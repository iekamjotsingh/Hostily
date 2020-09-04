import React , {useEffect} from "react";
import HeroSection from "../../HeroSection";
import { homeObjTwo, homeObjFour } from "./Data";
import Pricing from "../../Pricing";


function Products() {

  useEffect(() => {
    window.scrollTo(0,0);
  });
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;
