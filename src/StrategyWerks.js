import React, { useState, useEffect, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import { useDispatch, useSelector } from "react-redux";
import "./StrategyWerks.scss";


const fetchItems = (items) => ({
  type: "FETCH_ITEMS",
  payload: { items }
});


const fetchData = (a,b) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newItems = Array.from({ length: b }, (_, i) => `Data ${a + i + 1}`);
      resolve(newItems);
    }, 1000); 
  });
};

const StrategyWerks = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items); 
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);


const loadMoreItems = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const newItems = await fetchData(items.length, 100);
    dispatch(fetchItems(newItems));
    setHasMore(newItems.length > 0);
    setLoading(false);
  }, [items, hasMore, loading, dispatch]);

const Row = ({ index, style }) => (
    <div style={style} className="list-item" tabIndex={0} aria-label={`Data ${index + 1}`}>
      <div className="item-info">
        {`Data ${index + 1}`}
      </div>
      
    </div>
  );

  const onScroll = ({ scrollDirection, scrollOffset, scrollUpdateWasRequested }) => {
    if (!scrollUpdateWasRequested && scrollOffset > (items.length - 20) * 35) {
      loadMoreItems();
    }
  };

  return (
    <div className="virtual-list-container" role="list">
     <List
  height={window.innerHeight - 100}
  itemCount={hasMore ? items.length + 1 : items.length}
  itemSize={75} 
  width={"100%"}
  onScroll={onScroll}
>
        {Row}
      </List>
      {loading && <div className="loading-indicator" role="status"><strong>Loading more items...</strong></div>}
    </div>
  );
};

export default StrategyWerks;
