
import { useLocation } from "react-router-dom";

const SignUpInfo = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/signup";

  return (
    <>
      <div className='container items-center justify-center'>
        <div className='row d-flex text-center mb-5' style={{marginTop : "3rem", paddingTop : "4rem"}}>

          {
            isSignUpPage ? 
            (
              <>
                  <h1 className='' style={{color: "#424242", fontSize : "2.4rem", fontWeight : "5px"}} >Open a free demat and trading account online</h1>
                  <p className='text-muted' style={{fontSize : "1.2rem"}} >Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
              </>
            ) : 
            (
              <>
                <h1 className='' style={{color: "#424242", fontWeight : "600", fontSize : "3rem"}} >Open a free demat and trading account online</h1>
                <p className='text-muted' style={{fontSize : "1.4rem", marginTop : "1rem"}} >Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>   
              </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default SignUpInfo