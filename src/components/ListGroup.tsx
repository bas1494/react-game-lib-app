import { useState } from "react";

interface Props {
  header: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, header, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleListItemClick = (item: string, index: number) => {
    setSelectedIndex(index);
    onSelectItem(item);
  };

  return (
    <>
      <h1>{header}</h1>
      {items.length === 0 && "No items found"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => handleListItemClick(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
