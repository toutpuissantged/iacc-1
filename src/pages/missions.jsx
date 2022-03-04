import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { MissionList } from "../components/missionlist";
import { Footer } from "../components/footer"; 
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Missions = () => {
  const [Missions, setMissionsData] = useState({});
  useEffect(() => {
    setMissionsData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <MissionList data={Missions.MissionList} /> 
      <Footer data= {Missions.Footer}/>
    </div>
  );
};

export default Missions;
