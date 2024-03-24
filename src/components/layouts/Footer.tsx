import { company, contact, learn, product } from "@/constants/data";
import { logo, scaleObject } from "@/constants/import";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="container relative">
      <Image
        alt="Ellipse"
        src={scaleObject}
        className="w-[70px] absolute left-0 -top-[150px] hidden lg:block"
      />
      <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3">
        {/* Col 1 Company Desc */}
        <div className="col-span-2 pr-16 my-2">
          <Image src={logo} alt="logo" width={150} height={50} />
          <p className="text-zinc-500 text-xs mt-2">
            Cuddle Realty is at the forefront of transforming the real estate
            coownership landscape, offering a groundbreaking platform that
            empowers investors to unlock the potential of shared property
            ownership
          </p>
        </div>

        {/* Col 2 Product */}
        <div className={"footer-col"}>
          <h1 className="heading">Products</h1>
          {product.map((item, index) => (
            <p className="text" key={index}>
              {item}
            </p>
          ))}
        </div>
        {/* Col 3 COmpany  */}
        <div className={"footer-col"}>
          <h1 className="heading">Company</h1>
          {company.map((item, index) => (
            <p className="text" key={index}>
              {item}
            </p>
          ))}
        </div>
        {/* Col 4 Learn  */}
        <div className={"footer-col"}>
          <h1 className="heading">Learn</h1>
          {learn.map((item, index) => (
            <p className="text" key={index}>
              {item}
            </p>
          ))}
        </div>
        {/* Col 4 Contact Us  */}
        <div className={"footer-col"}>
          <h1 className="heading">Contact Us</h1>
          {contact.map((item, index) => (
            <p className="text" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
      <p className="text-primary text-xs font-medium text-center my-10">
        © 2023 Cuddle Realty. All rights reserved. | Privacy Policy | Terms of
        Use
      </p>
    </div>
  );
};

export default Footer;
