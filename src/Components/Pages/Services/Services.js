import React , {useEffect} from "react";
import HeroSection from "../../HeroSection";
import { homeObjThree, homeObjFour } from "./Data";


function Services() {

  useEffect(() => {
    window.scrollTo(0,0);
  });
  return (
    <>

      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Services;
