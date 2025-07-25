import { styles } from "../util/style";
import discount from "../assets/discount.svg";
import robot from "../assets/robot.png";
import Button from "./button";

const Home = () => {
  return (
    <section
      id="home"
      className={`flex items-center md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* Animation image */}
      <div
        className={`flex-1 md:${styles.flexStart} md:my-0 my-10 relative ${styles.flexCenter}`}
      >
        <img
          src={robot}
          alt="robot"
          className={`w-[190%] h-[100%] relative z-10 rounded-sm mr-10 -scale-x-100 `}
        />
      </div>

      {/* Information */}
      <div
        className={`  flex ss:items-start items-center  flex-1  flex-col xl:px-0 sm:px-16 px-6   `}
      >
        {/* Discount information */}
        <div className="flex flex-row  items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient ">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph}  ml-2`}>
            <span className="text-white">20%</span> Chegirma
            <span className="text-white">1 Oylik</span> Xisob Uchun
          </p>
        </div>

        {/* Title */}
        <div>
          <h1 className={`${styles.heading1} `}>
            Yangi Avlod <br />
            <span className="text-gradient">To'lov Usuli </span>
          </h1>
        </div>

        {/* Description */}
        <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsam
          sapiente quasi fuga nemo repudiandae vel omnis vero esse culpa!
        </p>

        {/* Getting Started */}
        <Button styles={"mt-2"} />

        {/* Gradient Background */}
        <div >
          <div className="absolute z-[0] w-[40%] h-[35%] sm:top-20 top-40 pink__gradient" />
          <div className=" z-[0] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>
    </section>
  );
};

export default Home;
