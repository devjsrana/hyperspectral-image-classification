import { resultImage } from "../constants/images";
type Props = {
  onClear?: () => void;
};

const Result = (props: Props) => {
  return (
    <div className="min-h-dvh flex flex-col justify-center items-center py-6 px-4">
      <h1 className="text-xl sm:text-3xl font-bold text-center mx-auto mb-8 uppercase text-gradient">
        Result
      </h1>
      <img src={resultImage} alt="" className="w-full max-w-2xl" />

      <button className="btn btn-gradient  mt-4" onClick={props.onClear}>
        Process Another Image
      </button>
    </div>
  );
};

export default Result;
