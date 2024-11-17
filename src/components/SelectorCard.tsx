import { cn } from "../lib/utils";

type Props = {
  title: string;
  desc?: string;
  onSelect?: () => void;
  selected?: boolean;
};

const SelectorCard = (props: Props) => {
  return (
    <div
      className={cn("selector-card", props.selected && "active")}
      onClick={props.onSelect}
    >
      <h3 className="text-lg font-bold">{props.title}</h3>
      {props.desc && <p className="text-sm opacity-50">{props.desc}</p>}
    </div>
  );
};

export default SelectorCard;
