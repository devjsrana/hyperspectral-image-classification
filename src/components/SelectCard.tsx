type Props = {
  options: {
    id: string;
    name: string;
    description: string;
  }[];
  title: string;
  onSelect?: (value: string) => void;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
};

const SelectCard = (props: Props) => {
  return (
    <div className="w-full grid">
      <h2 className="text-lg font-bold text-gradient">{props.title}</h2>
      <select
        value={props.value}
        className={`selector-card outline-none !px-2 ${
          props.disabled && "opacity-50"
        }`}
        onChange={(e) => {
          if (props.onSelect) {
            props.onSelect(e.target.value);
          }
        }}
        disabled={props.disabled}
      >
        <option value={""}>{props.placeholder}</option>
        {props.options.map((item) => (
          <option key={item.id} value={item.id} className="w-full">
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCard;
