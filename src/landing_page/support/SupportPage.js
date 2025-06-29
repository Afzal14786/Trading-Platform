import TitleSetter from '../TitleSetter'
import Hero from './Hero'
import CreateTicket from './CreateTicket';


const SupportPage = () => {
  return (
    <>
      <TitleSetter title={"Zerodha Support Portal: Find answers to all your queries"}/>
      <Hero/>
      <CreateTicket/>
    </>
  );
}

export default SupportPage