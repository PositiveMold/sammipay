import { layout, styles } from "../util/style";
import Button from "./button";
import Card from "../assets/card.png";

const Contract = () => {
  return (
    <section id="product" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Bir necha oson qadamda <br className="sm:block hidden" />
          kontrakt tuzish
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quae
          quisquam dolor reiciendis quia fuga, in quo est? Cumque, voluptas.
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={layout.sectionImage}>
        <img src={Card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default Contract;
