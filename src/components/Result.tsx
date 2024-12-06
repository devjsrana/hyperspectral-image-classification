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
          <p className="text-center md:text-xl mt-1">Input Image</p>
        </div>
        <div>
          <img
            src={props.result.resultImage}
            alt=""
            className="w-full max-w-2xl"
          />
          <p className="text-center md:text-xl mt-1">Output Image</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-center">Result Details</h2>
        <table className="w-full max-w-lg mt-1">
          <tbody>
            <tr>
              <td className="border px-4 py-1">Accuracy:</td>
              <td className="border px-4 py-1 text-center">
                {(props.result.accuracy * 100).toFixed(2)}%
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-1">Response Time:</td>
              <td className="border px-4 py-1 text-center">
                {props.result.response_time} sec
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="btn btn-gradient  mt-6" onClick={props.onClear}>
        Process Another Image
      </button>
    </div>
  );
};

export default Result;
