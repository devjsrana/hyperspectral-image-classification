import { useMemo, useState } from "react";
import { cn } from "../lib/utils";
import Upload from "../components/Upload";
import ModelDatasetSelector from "../components/ModelDatasetSelector";
import toast from "react-hot-toast";
import { BASE_URL } from "../constants/variables";
import { TResult } from "../App";

type Props = {
  setResult: (data: TResult) => void;
};

const ModelSelectorPage = (props: Props) => {
  const [step, setStep] = useState(1);
  const [selectedDataset, setSelectedDataset] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    file1?: File;
    file2?: File;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    if (step === 2) {
      if (selectedModel === "svm" && selectedDataset === "indian_pine") {
        submitSvmIndianPine();
        return;
      }
      // if (selectedModel === "svm" && selectedDataset === "pavia_u") {
      //   toast.error("SVM is not supported for Pavia U dataset");
      //   return;
      // }
      if (selectedModel === "3d_cnn" && selectedDataset === "indian_pine") {
        submitCnnIndianPine();
        return;
      }
      if (selectedModel === "3d_cnn" && selectedDataset === "pavia_u") {
        submitCnnPaviau();
        return;
      }
    } else {
      if (selectedModel === "svm" && selectedDataset === "pavia_u") {
        toast.error("SVM is not supported for Pavia U dataset");
        return;
      }
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step !== 1) {
      setStep(step - 1);
    }
  };

  const submitSvmIndianPine = async () => {
    if (!selectedImage) return;
    setIsSubmitting(true);
    try {
      const startTime = Date.now();
      const data = new FormData();
      data.append("x_test", selectedImage.file1 as Blob);
      data.append("y_test", selectedImage.file2 as Blob);
      const response = await fetch(`${BASE_URL}/predict-image`, {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error);
      }
      setIsSubmitting(false);

      const endTime = Date.now();
      const response_time = (endTime - startTime) / 1000;

      props.setResult({
        accuracy: result.accuracy,
        resultImage: "data:image/jpeg;base64," + result.base64_image,
        inputImage: "data:image/jpeg;base64," + result.input_image,
        response_time: response_time,
      });
    } catch (error: any) {
      toast.error(error.message);
      setIsSubmitting(false);
    }
  };

  const submitCnnIndianPine = async () => {
    if (!selectedImage) return;
    setIsSubmitting(true);
    try {
      const startTime = Date.now();
      const data = new FormData();
      data.append("pca", selectedImage.file1 as Blob);
      data.append("labels", selectedImage.file2 as Blob);
      const response = await fetch(`${BASE_URL}/predict-cnn-ind`, {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error);
      }
      setIsSubmitting(false);

      const endTime = Date.now();
      const response_time = (endTime - startTime) / 1000;

      props.setResult({
        accuracy: result.accuracy,
        resultImage: "data:image/jpeg;base64," + result.base64_image,
        inputImage: "data:image/jpeg;base64," + result.input_image,
        response_time: response_time,
      });
    } catch (error: any) {
      toast.error(error.message);
      setIsSubmitting(false);
    }
  };

  const submitCnnPaviau = async () => {
    if (!selectedImage) return;
    setIsSubmitting(true);
    try {
      const startTime = Date.now();
      const data = new FormData();
      data.append("pca", selectedImage.file1 as Blob);
      data.append("labels", selectedImage.file2 as Blob);
      const response = await fetch(`${BASE_URL}/predict-cnn-paviau`, {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error);
      }
      setIsSubmitting(false);

      const endTime = Date.now();
      const response_time = (endTime - startTime) / 1000;

      props.setResult({
        accuracy: result.accuracy,
        resultImage: "data:image/jpeg;base64," + result.base64_image,
        inputImage: "data:image/jpeg;base64," + result.input_image,
        response_time: response_time,
      });
    } catch (error: any) {
      toast.error(error.message);
      setIsSubmitting(false);
    }
  };

  const isNextDisabled = useMemo(() => {
    if (!selectedDataset || !selectedModel) return true;
    if (step === 2) {
      if (!selectedImage.file1 || !selectedImage.file2) {
        return true;
      }
    }
    return false;
  }, [selectedDataset, selectedModel, selectedImage]);

  if (isSubmitting) {
    return (
      <div className="min-h-[calc(100dvh-80px)] w-full flex justify-center items-center py-8 px-4">
        <div className="w-full max-w-2xl overflow-hidden">
          <h1 className="text-xl sm:text-3xl font-bold text-center mx-auto mb-8 uppercase text-gradient max-w-sm py-4 animate-pulse">
            Processing...
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100dvh-80px)] w-full flex justify-center items-center py-8 px-4">
      <div className="w-full max-w-2xl overflow-hidden md:bg-black md:p-6 md:rounded-2xl md:bg-opacity-10">
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

        {step === 2 && (
          <Upload
            selectedFile1={selectedImage.file1}
            selectedFile2={selectedImage.file2}
            setSelectedImage={setSelectedImage}
            model={selectedModel === "svm" ? "svm" : "cnn"}
          />
        )}

        <div
          className={cn("flex items-center mt-6", step !== 1 ? "gap-2" : "")}
        >
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
