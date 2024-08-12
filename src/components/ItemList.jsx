import { items } from "../lib/constants";

export default function ItemList() {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.text} text={item.text} />
      ))}
    </ul>
  );
}

function ListItem({ text }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox"></input>
        {text}
      </label>
    </li>
  );
}
