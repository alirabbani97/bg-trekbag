import Logo from "./Logo";
import Counter from "./Counter";
import { useItemStore } from "../store/ItemStore";

export default function Header() {
  const items = useItemStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        packedItems={items.filter((item) => item.packed).length}
        totalItems={items.length}
      />
    </header>
  );
}
