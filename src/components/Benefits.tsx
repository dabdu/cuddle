import React from "react";
import { GoDotFill } from "react-icons/go";
const Benefits = () => {
  const items = [
    {
      title: "Minimal Time Commitment",
      desc: "Asset flipping requires significantly less time and involvement compared to long-term property ownership. Enjoy the benefits of real estate appreciation without the day-to-day management responsibilities.",
    },
    {
      title: "Rapid Returns",
      desc: ": Leverage short holding periods to capture quick returns on your investment. Asset flipping aims to capitalize on market fluctuations, providing potential gains within a relatively short timeframe.            ",
    },
    {
      title: "Diversification Strategy",
      desc: "Enhance the diversity of your investment portfolio by adding short-term, high-potential properties. This strategy mitigates risk and balances your overall investment profile.",
    },
    {
      title: "Expert Curation",
      desc: "Our experienced team meticulously identifies properties with substantial potential for appreciation. Benefit from our market insights and due diligence to make informed investment decisions.",
    },
    {
      title: "Hands-Off Approach",
      desc: "Sit back and watch your investment work for you. Our platform streamlines the investment process, offering a hassle-free experience from acquisition to resale.",
    },
  ];
  return (
    <div className="container">
      <div className="flex">
        <h1 className="bg-purple-100 px-2 py-1 font-medium mb-2">Benefits:</h1>
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex gap-3 items-center my-4">
          <GoDotFill className="text-primary" />
          <p className="text-zinc-500 text-sm font-semibold">
            {item.title}:{" "}
            <span className="text-xs font-normal">{item.desc}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
