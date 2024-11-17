import { useRef } from "react";

type Props = {
  selectedImage?: string;
  setSelectedImage: (file?: string) => void;
};

const Upload = (props: Props) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      props.setSelectedImage(URL.createObjectURL(file));
    }
  };

  const onClear = () => {
    props.setSelectedImage(undefined);
    if (fileInput.current) {
      fileInput.current.value = "";
    }
  };

  return (
    <section className="flex flex-col items-center gap-5">
      {props.selectedImage ? (
        <img src={props.selectedImage} alt="" className="w-full max-w-lg" />
      ) : (
        <div className="w-44 h-44 border flex justify-center items-center rounded overflow-hidden relative">
          Click to Upload
          <input
            ref={fileInput}
            type="file"
            accept="image/*, .heic"
            className="bg-red-200 absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
        </div>
      )}
      {props.selectedImage && (
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
