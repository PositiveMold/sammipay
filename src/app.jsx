import { Home, Navbar } from "./components";
import { styles } from "./util/style";
import Statistics from "./components/statistics";
import Contract from "./components/contract";
import Billing from "./components/billing";
import Bussiness from "./components/bussiness";
import CTA from "./components/cta";
import Testimonials from "./components/testimonials";
import Clients from "./components/clients";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="bg-primarys w-full overflow-hidden">
      <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primarys ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>
      <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract />
          <Billing />
          <Bussiness />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
