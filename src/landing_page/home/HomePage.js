import TitleSetter from '../TitleSetter';
import Award from './Awards'
import Hero from './Hero'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'

import OpenAccount from '../OpenAccount'

const HomePage = () => {

  return (
    <>
      <TitleSetter title={"An Online platform for stock trading & ..."}/>
      <Hero/>
      <Award/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
    </>
  )
}

export default HomePage