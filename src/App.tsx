import { useState } from "react";
import Result from "./components/Result";
import ModelSelectorPage from "./pages/ModelSelectorPage";
import { Toaster } from "react-hot-toast";

export type TResult = {
  inputImage: string;
  resultImage: string;
  accuracy: number;
};

function App() {
  const [resultImage, setResultImage] = useState<TResult | undefined>(
    undefined
  );

  return (
    <>
      <Toaster />
      {resultImage ? (
        <Result
          onClear={() => setResultImage(undefined)}
          result={resultImage}
        />
      ) : (
        <ModelSelectorPage setResult={setResultImage} />
      )}
    </>
  );
}

export default App;
