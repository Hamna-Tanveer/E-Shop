import styles from "../../styles/styles";
import CountDown from "./CountDown";

const EventCard = () => {
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2`}>
      <div className="w-full lg:w-[50%] m-auto">
        <img
          src={"https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"}
          alt="loading..."
        />
      </div>

      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256gb</h2>
        <p>
          Experience unmatched performance with the Apple iPhone 14 Pro Max,
          featuring the lightning-fast A16 Bionic chip, a stunning 6.7-inch
          Super Retina XDR display, and an advanced 48MP triple-camera system
          for breathtaking photos and videos. Enjoy smooth performance, long
          battery life, and premium design crafted with surgical-grade stainless
          steel and Ceramic Shield protection. With Dynamic Island and Always-On
          Display, the iPhone 14 Pro Max redefines innovation and convenience
          perfect for those who want the ultimate smartphone experience.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 sold
          </span>
        </div>

        <CountDown></CountDown>
      </div>
    </div>
  );
};

export default EventCard;
