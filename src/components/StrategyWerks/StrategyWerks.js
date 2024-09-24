import React, { useState, useEffect, useRef } from 'react';
import ListItem from '../List/List';
import { generateData } from '../../data';
import './StrategyWerks.scss';

const ITEM_HEIGHT = 150; 
const BUFFER = 5; 
const BATCH_SIZE = 25; 
const TOTAL_ITEMS = 10000;

const StrategyWerks = () => {
  const [items, setItems] = useState(generateData(BATCH_SIZE));
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  const visibleCount = Math.ceil(window.innerHeight / ITEM_HEIGHT) + BUFFER * 2;

  
  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      setScrollTop(scrollTop);

      if (scrollHeight - scrollTop <= clientHeight + 100 && !isLoading && hasMore) {
        setIsLoading(true);
        setTimeout(() => {
          const newItems = generateData(BATCH_SIZE);
          setItems((prevItems) => [...prevItems, ...newItems]);

          
          if (items.length + BATCH_SIZE >= TOTAL_ITEMS) {
            setHasMore(false);
          }
          setIsLoading(false);
        }, 1000);
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', onScroll);

    return () => container.removeEventListener('scroll', onScroll);
  }, [isLoading, items.length, hasMore]);

  const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER);
  const endIndex = Math.min(items.length, startIndex + visibleCount);

  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div className="virtual-list-container" ref={containerRef}>
      <div style={{ height: `${items.length * ITEM_HEIGHT}px`, position: 'relative' }}>
        <div style={{ transform: `translateY(${startIndex * ITEM_HEIGHT}px)` }}>
          {visibleItems.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      {isLoading && <div className="loading-indicator">Loading more items...</div>}
    </div>
  );
};

export default StrategyWerks;