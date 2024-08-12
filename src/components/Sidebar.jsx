import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <AddItemForm />
      <ButtonGroup />
    </div>
  );
}
