import SelectorCard from "./SelectorCard";

const modelList = [
  {
    id: "model1",
    name: "Model 1",
    description: "This is model 1",
  },
  {
    id: "model2",
    name: "Model 2",
    description: "This is model 2",
  },
  {
    id: "model3",
    name: "Model 3",
    description: "This is model 3",
  },
  {
    id: "model4",
    name: "Model 4",
    description: "This is model 4",
  },
];

type Props = {
  onSelect: (id: string) => void;
  selectedModel: string | null;
};

const ModelSelector = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {modelList.map((item) => (
        <SelectorCard
          key={item.id}
          title={item.name}
          desc={item.description}
          selected={item.id === props.selectedModel}
          onSelect={() => props.onSelect(item.id)}
        />
      ))}
    </div>
  );
};

export default ModelSelector;
