import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleAddItem = (itemText) => {
    const newItem = {
      text: itemText,
      id: new Date().getTime(),
      packed: false,
    };

    setItems((prev) => [...prev, newItem]);
  };

  const handleClear = () => {
    setItems([]);
  };
  const handleReset = () => {
    setItems(initialItems);
  };
  const handleCheckAll = () => {
    const checkedItems = items.map((item) => ({ ...item, packed: true }));

    return setItems(checkedItems);
  };

  const handleUnCheckAll = () => {
    const checkedItems = items.map((item) => ({ ...item, packed: false }));

    return setItems(checkedItems);
  };

  const handleToggleCheck = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
        sortBy,
        setSortBy,
        handleAddItem,
        handleCheckAll,
        handleUnCheckAll,
        handleReset,
        handleClear,
        handleDelete,
        handleToggleCheck,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
