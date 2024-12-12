import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/variables";

const ShowLegend = () => {
  const [legendImg, setLegendImg] = useState<string>();
  useEffect(() => {
    fetchLegend();
  }, []);

  const fetchLegend = async () => {
    try {
      const response = await fetch(`${BASE_URL}/legend`, {
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
