import React from "react";

const BackgroundImage = ({ imageUrl, children }: any) => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
