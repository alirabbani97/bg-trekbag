import { useMemo } from "react";
import EmptyText from "./EmptyText";
import SortingFilter from "./SortingFilter";
import { options } from "../lib/constants";
import { useItemStore } from "../store/ItemStore";

export default function ItemList() {
  const items = useItemStore((state) => state.items);
  const sortBy = useItemStore((state) => state.sortBy);
  const setSortBy = useItemStore((state) => state.setSortBy);
  const handleToggleCheck = useItemStore((state) => state.toggle);
  const handleDelete = useItemStore((state) => state.delete);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyText />}
      {items.length > 0 ? (
        <SortingFilter setSortBy={setSortBy} options={options} />
      ) : null}

      {sortedItems.map((item) => (
        <ListItem
          onToggleCheck={handleToggleCheck}
          onDelete={handleDelete}
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
}

function ListItem({ item, onToggleCheck, onDelete }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleCheck(item.id)}
          checked={item.packed}
          type="checkbox"
        ></input>
        {item.text}
      </label>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
