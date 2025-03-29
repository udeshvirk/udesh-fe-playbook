import React from "react";

interface ListItemProps {
  index: number;
  style: React.CSSProperties;
  data: string[];
}

const ListItem: React.FC<ListItemProps> = React.memo(
  ({ index, style, data }) => (
    <div style={style} className="border-b px-3 py-2">
      {data[index]}
    </div>
  )
);

export default ListItem;
