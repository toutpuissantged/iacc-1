import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import {Slider} from "../components/slider";
import { Features } from "../components/features";

import { ServicesHome } from "../components/servicehome";
import { Home } from "../components/home";
import { BlogHome } from "../components/bloghome"; 
import { RegistrerHome } from "../components/registrerhome"; 
import { Footer } from "../components/footer";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const HomePages = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Slider data={landingPageData.Slider} />
      <Features data={landingPageData.Features} />
      <ServicesHome data={landingPageData.ServicesHome} />
      <Home data={landingPageData.Home}/>
      <BlogHome data={landingPageData.BlogHome} />
      <RegistrerHome data={landingPageData.RegistrerHome} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

export default HomePages;
