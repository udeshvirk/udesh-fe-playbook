import React, { useMemo } from "react";
import { FixedSizeList as VirtualList } from "react-window";
import ListItem from "./components/ListItem";

interface LargeListProps {
  items: string[];
}

const LargeList: React.FC<LargeListProps> = ({ items }) => {
  const itemData = useMemo(() => items, [items]);

  return (
    <VirtualList
      height={500} // Height of the viewport
      width={"100%"} // Full width container
      itemCount={items.length}
      itemSize={50} // Fixed item height (for dynamic heights, see below)
      itemData={itemData}
    >
      {ListItem}
    </VirtualList>
  );
};

export default LargeList;
