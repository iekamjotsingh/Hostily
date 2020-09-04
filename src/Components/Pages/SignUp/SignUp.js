import React , {useEffect} from 'react'
import HeroSection from '../../HeroSection'
import { homeObjTwo, homeObjThree, homeObjFour} from './Data'
function SignUp() {
  useEffect(() => {
    window.scrollTo(0,0);
  });
    return (
        <> 
          <HeroSection {...homeObjThree}/>
          <HeroSection {...homeObjTwo}/>
          <HeroSection {...homeObjFour}/>
        </>
    )
}

export default SignUp
