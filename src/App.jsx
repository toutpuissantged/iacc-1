import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Features } from "./components/features";
import { Home } from "./components/home";
import { ServicesHome } from "./components/servicehome";
import { BlogHome } from "./components/bloghome";
import { RegistrerHome } from "./components/registrerhome";
import { Footer } from "./components/footer";
import { Slider } from "./components/slider";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
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

export default App;
