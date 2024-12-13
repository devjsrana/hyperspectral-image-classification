import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/variables";

type Props = {
  isPavia?: boolean;
};

const ShowLegend = (props: Props) => {
  const [legendImg, setLegendImg] = useState<string>();
  useEffect(() => {
    fetchLegend();
  }, []);

  const fetchLegend = async () => {
    const url = new URL(`${BASE_URL}/legend`);
    if (!props.isPavia) {
      url.searchParams.append("type", "svm");
    }
    try {
      const response = await fetch(url, {
        method: "GET",
      });

      const result = await response.blob();

      setLegendImg(URL.createObjectURL(result));
    } catch (error) {}
  };

  return (
    <div>
      {legendImg ? (
        <img src={legendImg} alt="" className="w-full max-w-2xl" />
      ) : (
        <div className="min-h-[calc(100%-40px)] w-full bg-gray-300 animate-pulse flex justify-center items-center">
          loading...
        </div>
      )}
      <p className="text-center md:text-xl mt-1">Legend</p>
    </div>
  );
};

export default ShowLegend;
