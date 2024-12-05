import { TResult } from "../App";

type Props = {
  onClear?: () => void;
  result: TResult;
};

const Result = (props: Props) => {
  return (
    <div className="min-h-dvh flex flex-col justify-center items-center py-6 px-4">
      <h1 className="text-xl sm:text-3xl font-bold text-center mx-auto mb-8 uppercase text-gradient">
        Result
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <img
            src={props.result.inputImage}
            alt=""
            className="w-full max-w-2xl"
          />
          <p className="text-center md:text-xl">Input Image</p>
        </div>
        <div>
          <img
            src={props.result.resultImage}
            alt=""
            className="w-full max-w-2xl"
          />
          <p className="text-center text-xl">Output Image</p>
        </div>
      </div>
      <div className="text-center">
        <div>
          Accuracy: <span>{props.result.accuracy}</span>
        </div>
        {/* <div>
          Total response time: <span>20s</span>
        </div> */}
      </div>

      <button className="btn btn-gradient  mt-4" onClick={props.onClear}>
        Process Another Image
      </button>
    </div>
  );
};

export default Result;
