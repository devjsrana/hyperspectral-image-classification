import SelectCard from "./SelectCard";

const modelList = [
  {
    id: "svm",
    name: "SVM",
    description: "SVM",
  },
  {
    id: "3d_cnn",
    name: "3D CNN",
    description: "3D CNN",
  },
];
const datasetList = [
  {
    id: "indian_pine",
    name: "Indian Pine",
    description: "Indian Pine",
  },
  {
    id: "pavia_u",
    name: "pavia_U",
    description: "pavia_U",
  },
];

type Props = {
  onSelectModel: (id: string) => void;
  onSelectDataset: (id: string) => void;
  selectedModel: string | null;
  selectedDataset: string | null;
};

const ModelDatasetSelector = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <SelectCard
        title="Model"
        options={modelList}
        value={props.selectedModel || undefined}
        onSelect={props.onSelectModel}
        placeholder="Select a Model"
      />
      <SelectCard
        title="Dataset"
        options={datasetList}
        value={props.selectedDataset || undefined}
        onSelect={props.onSelectDataset}
        placeholder="Select a Dataset"
        disabled={!props.selectedModel}
      />
    </div>
  );
};

export default ModelDatasetSelector;
