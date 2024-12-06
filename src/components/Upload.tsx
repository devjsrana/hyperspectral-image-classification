import { useRef } from "react";

type Props = {
  selectedXFile?: File;
  selectedYFile?: File;
  setSelectedImage: (data: { x?: File; y?: File }) => void;
};

const Upload = (props: Props) => {
  const xFileInput = useRef<HTMLInputElement>(null);
  const yFileInput = useRef<HTMLInputElement>(null);

  const handleXFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      props.setSelectedImage({ x: file, y: props.selectedYFile });
    }
  };
  const handleYFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      props.setSelectedImage({ x: props.selectedXFile, y: file });
    }
  };

  const onClear = () => {
    props.setSelectedImage({});
    if (xFileInput.current) {
      xFileInput.current.value = "";
    }
    if (yFileInput.current) {
      yFileInput.current.value = "";
    }
  };

  return (
    <section className="flex flex-col items-center gap-5">
      <div className="flex gap-2">
        <div className="w-44 h-44 border flex justify-center items-center rounded overflow-hidden relative">
          {props.selectedXFile ? props.selectedXFile.name : "Select X NPY"}
          <input
            ref={xFileInput}
            type="file"
            accept=".npy"
            className="bg-red-200 absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleXFileChange}
            // disabled={props.selectedXFile !== undefined}
          />
        </div>
        <div className="w-44 h-44 border flex justify-center items-center rounded overflow-hidden relative">
          {props.selectedYFile ? props.selectedYFile.name : "Select Y NPY"}
          <input
            ref={yFileInput}
            type="file"
            accept=".npy"
            className="bg-red-200 absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleYFileChange}
            // disabled={props.selectedYFile !== undefined}
          />
        </div>
      </div>
      {(props.selectedXFile || props.selectedYFile) && (
        <div className="flex justify-center">
          <button
            className="border border-red-500 py-2 px-4 rounded"
            onClick={onClear}
          >
            Clear
          </button>
        </div>
      )}
    </section>
  );
};

export default Upload;
