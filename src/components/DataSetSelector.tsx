import SelectorCard from "./SelectorCard";

const datasetList = [
  {
    id: "ds1",
    name: "Dataset 1",
    description: "This is dataset 1",
  },
  {
    id: "ds2",
    name: "Dataset 2",
    description: "This is dataset 2",
  },
  {
    id: "ds3",
    name: "Dataset 3",
    description: "This is dataset 3",
  },
  {
    id: "ds4",
    name: "Dataset 4",
    description: "This is dataset 4",
  },
];

type Props = {
  onSelect: (id: string) => void;
  selectedDataset: string | null;
};

const DataSetSelector = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {datasetList.map((item) => (
        <SelectorCard
          key={item.id}
          title={item.name}
          desc={item.description}
          selected={item.id === props.selectedDataset}
          onSelect={() => props.onSelect(item.id)}
        />
      ))}
    </div>
  );
};

export default DataSetSelector;
