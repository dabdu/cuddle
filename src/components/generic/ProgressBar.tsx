import React from "react";

const ProgressBar = ({ total, completed }: any) => {
  const percentage = (completed / total) * 100;

  const progressBarStyle = {
    width: `${percentage}%`,
  };

  return (
    <div className="w-full bg-white rounded-full">
      <div
        className="w-full h-[15px] rounded-full"
        style={{ background: "#EBEDF1" }}
      >
        <div
          className="bg-primary h-full text-right flex justify-end items-center rounded-full text-white pr-1 font-bold text-xs"
          style={progressBarStyle}
        >
          {/* {percentage.toFixed(2)}% */}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
