import Banner from "@/components/Banner";
import FeatureSection from "@/components/FeatureSection";

import Services from "@/components/Services";
import WorkingSystem from "@/components/WorkingSystem";

import { Bounce, ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeatureSection></FeatureSection>
      <WorkingSystem></WorkingSystem>
      <Services></Services>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}
