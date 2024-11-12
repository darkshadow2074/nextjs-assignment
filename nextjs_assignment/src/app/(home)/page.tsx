import FooterComponent from "@/ui/FooterComponent";
import HeaderComponent from "@/ui/HeaderComponent";
import HeroBannerComponent from "@/ui/HeroBannerComponent";
import MiddleBodyComponent from "@/ui/MiddleBodyComponent";

import { PageConfig } from "@/utils/pageConfig";


const Home = () => {
  return (
    <div>
      <HeaderComponent headerConfig={PageConfig.headerConfig} />
      <HeroBannerComponent crouselComponent={PageConfig.crouselComponent} />
      <MiddleBodyComponent tabContent={PageConfig.tabContent} />
      <FooterComponent />
    </div>
  );
};

export default Home;
