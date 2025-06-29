import TitleSetter from "../TitleSetter"
import SignUpInfo from './SignUpInfo'
import InvestmentOptions from './InvestmentOptions'
import SignUpForm from './SignUpForm'
import OpenDematAccount from './OpenDematAccount'
import BenifitsZerodha from './BenifitsZerodha'
import DifferentAccountType from './DifferentAccountType'

const OpenAccount = () => {
  return (
    <>
        <TitleSetter title={"Open a free demat and trading account online at Zerodha"}/>
        <SignUpInfo/>
        <SignUpForm/>
        <InvestmentOptions/>
        <OpenDematAccount/>
        <BenifitsZerodha/>
        <DifferentAccountType/>
    </>
  );
}

export default OpenAccount