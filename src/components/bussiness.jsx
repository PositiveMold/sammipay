import { features } from "../util/constants";
import { layout, styles } from "../util/style";
import Button from "./button";
import FeatureCard from "./feature-card";

const Bussiness = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Biznesni rivojlantiring, <br className="sm:block hidden" /> pulni biz
          hal qilamiz!
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          dicta aut doloremque nam, laborum sit nobis at debitis deserunt
          sapiente!
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImage} flex-col `}>
        {features.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Bussiness;
