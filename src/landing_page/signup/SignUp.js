import TitleSetter from '../TitleSetter'
import SignUpInfo from './SignUpInfo'
import SignUpForm from './SignUpForm'

const SignUp = () => {

  return (
    <>  
      <TitleSetter title={"Signup a free demat and trading account online at zerodha"} />
      <SignUpInfo/>
      <SignUpForm/>
    </>
  )
}

export default SignUp