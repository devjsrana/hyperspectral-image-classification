import { useState } from "react";
import Result from "./components/Result";
import ModelSelectorPage from "./pages/ModelSelectorPage";

function App() {
  const [resultImage, setResultImage] = useState<string | undefined>(undefined);

  return (
    <>
      {resultImage ? (
        <Result
          onClear={() => setResultImage(undefined)}
          inputImage={resultImage}
          resultImage={resultImage}
        />
      ) : (
        <ModelSelectorPage onSubmit={setResultImage} />
      )}
    </>
  );
}

export default App;
