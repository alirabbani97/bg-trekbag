import Logo from "./Logo";
import Counter from "./Counter";
import { useItemsContext } from "../lib/hooks/useItemsContext";

export default function Header() {
  const { items } =     useItemsContext();
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
