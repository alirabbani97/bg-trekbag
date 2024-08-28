import { useRef, useState } from "react";
import Button from "./Button";
import { useItemStore } from "../store/ItemStore";

export default function AddItemForm() {
  const handleAddItem = useItemStore((state) => state.addItem);

  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("no item to be added");
      inputRef.current.focus();
      return;
    }

    handleAddItem(itemText);
    setItemText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Item</h2>
      <input
        ref={inputRef}
        onChange={(e) => setItemText(e.target.value)}
        value={itemText}
        autoFocus
      />
      <Button>Add</Button>
    </form>
  );
}
