export const generateData = (count) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push({
      id: Math.random().toString(36).substr(2, 9),
      title: `Item ${Math.floor(Math.random() * 1000)}`,
      description: `This is a description for item ${Math.floor(Math.random() * 1000)}`,
      image: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/150`
    });
  }
  return items;
};
