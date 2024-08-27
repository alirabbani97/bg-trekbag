import Button from "./Button";
import { useItemsContext } from "../lib/hooks/useItemsContext";

export default function ButtonGroup() {
  const { handleCheckAll, handleUnCheckAll, handleReset, handleClear } =
    useItemsContext();

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
