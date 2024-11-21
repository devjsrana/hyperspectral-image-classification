import { useState } from "react";
import { cn } from "../lib/utils";
import Upload from "../components/Upload";
import ModelDatasetSelector from "../components/ModelDatasetSelector";

type Props = {
  onSubmit: (resultImage?: string) => void;
  onImageUpload?: (image: string) => void;
};

const ModelSelectorPage = (props: Props) => {
  const [step, setStep] = useState(1);
  const [selectedDataset, setSelectedDataset] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    if (step === 2) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        props.onSubmit(selectedImage);
      }, 2000);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step !== 1) {
      setStep(step - 1);
    }
  };

  // const isNextDisabled =
  //   step === 1
  //     ? selectedDataset === null
  //     : step === 2
  //     ? selectedModel === null
  //     : selectedImage === undefined;
  const isNextDisabled =
    !selectedDataset || !selectedModel || (step === 2 && !selectedImage);

  if (isSubmitting) {
    return (
      <div className="min-h-dvh w-full flex justify-center items-center py-8 px-4">
        <div className="w-full max-w-2xl overflow-hidden">
          <h1 className="text-xl sm:text-3xl font-bold text-center mx-auto mb-8 uppercase text-gradient max-w-sm py-4 animate-pulse">
            Processing...
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh w-full flex justify-center items-center py-8 px-4">
      <div className="w-full max-w-2xl overflow-hidden">
        {/* <h1 className="text-xl sm:text-3xl font-bold text-center mx-auto mb-8 uppercase text-gradient max-w-sm py-4">
          Select a {step === 1 ? "dataset" : step === 2 ? "model" : "image"}
        </h1> */}
        <h1 className="text-xl sm:text-3xl font-bold text-center mx-auto mb-8 uppercase text-gradient max-w-sm py-4">
          Hyperspectral Image Classification
        </h1>
        {step === 1 && (
          <>
            <ModelDatasetSelector
              selectedDataset={selectedDataset}
              onSelectDataset={setSelectedDataset}
              selectedModel={selectedModel}
              onSelectModel={setSelectedModel}
            />
          </>
        )}

        {/* {step === 2 && (
          <ModelSelector
            selectedModel={selectedModel}
            onSelect={setSelectedModel}
          />
        )} */}

        {step === 2 && (
          <Upload
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}

        <div className="flex items-center mt-6 gap-2">
          <button
            className={cn(
              "btn bg-white bg-opacity-50 !text-black overflow-hidden !px-0",
              step !== 1 ? "w-28" : "w-0"
            )}
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className={cn(
              "flex-1 btn btn-gradient",
              isNextDisabled ? "opacity-50" : "opacity-100"
            )}
            disabled={isNextDisabled}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelSelectorPage;
