import React, { useRef, useEffect } from "react";
import { VariableSizeList as VirtualList } from "react-window";
import ListItem from "./components/ListItem";

interface LargeDynamicListProps {
  items: string[];
}

const LargeDynamicList: React.FC<LargeDynamicListProps> = ({ items }) => {
  const listRef = useRef<VirtualList>(null);

  const getItemSize = (index: number) => {
    return items[index].length > 100 ? 80 : 50; // Dynamic height logic
  };

  useEffect(() => {
    listRef.current?.resetAfterIndex(0, true);
  }, [items]);

  return (
    <VirtualList
      ref={listRef}
      height={500}
      width={"100%"}
      itemCount={items.length}
      itemSize={getItemSize}
      itemData={items}
    >
      {ListItem}
    </VirtualList>
  );
};

export default LargeDynamicList;
