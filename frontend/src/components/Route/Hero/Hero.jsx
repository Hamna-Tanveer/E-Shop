import React from "react";
import styles from "../../../styles/styles";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat  ${styles.noramlFlex}`}
      style={{
        backgroundImage: `url("https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg")`,
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Discover thousands of products from trusted sellers all in one place.
          Whether you’re shopping for fashion,
          <br /> electronics, beauty, or home essentials we connect you directly
          with verified vendors offering the best <br /> deals.Shop with
          confidence, explore diverse brands, and enjoy secure payments, fast
          delivery, and 24/7 <br /> customer support. Are you a seller? Join our
          platform to grow your business and reach more customers today!
        </p>
        <Link to="/products">
          <div className={`${styles.button} mt-5`}>
            <span className="text-white font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
