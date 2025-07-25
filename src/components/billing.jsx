import apple from "../assets/app.png";
import google from "../assets/google.png";
import bill from "../assets/bill.png";
import { layout, styles } from "../util/style";

const Billing = () => {
  return (
    <section id="features" className={layout.sectionReverse}>
      <div className={layout.sectionImageReverse}>
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 w-[50%] h-[55%] rounded-full top-0 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 rounded-full bottom-0 pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Hisob-kitob va fakturalarni <br className="sm:block hidden" />{" "}
          osongina boshqaring
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          laudantium molestiae impedit voluptatibus quo sunt aliquid, quaerat
          veniam labore veritatis.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={google}
            alt="google"
            className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={apple}
            alt="apple"
            className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
