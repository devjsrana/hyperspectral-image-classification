import { useRef } from "react";

type Props = {
  selectedFile1?: File;
  selectedFile2?: File;
  setSelectedImage: (data: { file1?: File; file2?: File }) => void;
  model: "svm" | "cnn";
};

const Upload = (props: Props) => {
  const file1InputRef = useRef<HTMLInputElement>(null);
  const file2InputRef = useRef<HTMLInputElement>(null);

  const handleFile1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      props.setSelectedImage({ file1: file, file2: props.selectedFile2 });
    }
  };
  const handleFile2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      props.setSelectedImage({ file1: props.selectedFile1, file2: file });
    }
  };

  const onClear = () => {
    props.setSelectedImage({});
    if (file1InputRef.current) {
      file1InputRef.current.value = "";
    }
    if (file2InputRef.current) {
      file2InputRef.current.value = "";
    }
  };

  return (
    <section className="flex flex-col items-center gap-5">
      <div className="flex gap-2">
        <div className="w-44 h-44 border flex justify-center items-center rounded overflow-hidden relative">
          {props.selectedFile1
            ? props.selectedFile1.name
            : props.model === "svm"
            ? "Select X NPY"
            : "Select File"}
          <input
            ref={file1InputRef}
            type="file"
            accept=".npy"
            className="bg-red-200 absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFile1Change}
          />
        </div>
        <div className="w-44 h-44 border flex justify-center items-center rounded overflow-hidden relative">
          {props.selectedFile2
            ? props.selectedFile2.name
            : props.model === "svm"
            ? "Select Y NPY"
            : "Select label file"}
          <input
            ref={file2InputRef}
            type="file"
            accept=".npy"
            className="bg-red-200 absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFile2Change}
          />
        </div>
      </div>
      {(props.selectedFile1 || props.selectedFile2) && (
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
