import TitleSetter from '../TitleSetter'
import Hero from './Hero'
import Information from './Information';
import Teams from './Teams';

const AboutPage = () => {
  return (
    <>
      <TitleSetter title={"Our company, history and the people behind it."}/>
      <Hero/>
      <Information/>
      <Teams/>
    </>
  );
}

export default AboutPage