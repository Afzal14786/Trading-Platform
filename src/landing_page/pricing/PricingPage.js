import TitleSetter from '../TitleSetter'
import Hero from './Hero';
import ChargesSection from './ChargesSection';
import ChargesExplained from './ChargesExplained';
import AccountOpeningCharges from './AccountOpeningCharges';
const PricingPage = () => {
  return (
    <>
      <TitleSetter title={"Zerodha brokerage charges, fees & taxes on trading and ..."}/>
      <Hero/>
      <ChargesSection/>
      <ChargesExplained/>
      <AccountOpeningCharges/>
    </>
  );
}

export default PricingPage