import { useState } from "react";
import Result from "./components/Result";
import ModelSelectorPage from "./pages/ModelSelectorPage";

function App() {
  const [resultImage, setResultImage] = useState<string | undefined>("test");

  return (
    <>
      {resultImage ? (
        <Result onClear={() => setResultImage(undefined)} />
      ) : (
        <ModelSelectorPage onSubmit={setResultImage} />
      )}
    </>
  );
}

export default App;
