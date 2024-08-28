import { useItemStore } from "../store/ItemStore";
import Button from "./Button";

export default function ButtonGroup() {
  const handleCheckAll = useItemStore((state) => state.checkAll);
  const handleUnCheckAll = useItemStore((state) => state.unCheckAll);
  const handleReset = useItemStore((state) => state.reset);
  const handleClear = useItemStore((state) => state.clearItems);

  const btnText = [
    { text: "Check All", action: handleCheckAll },
    { text: "Uncheck All", action: handleUnCheckAll },
    { text: "Reset", action: handleReset },
    { text: "Remove All Items", action: handleClear },
  ];
  return (
    <section className="button-group">
      {btnText.map((btn) => (
        <Button key={btn.text} variant={"secondary"} onClick={btn.action}>
          {btn.text}
        </Button>
      ))}
    </section>
  );
}
