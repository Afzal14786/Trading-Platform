import React from 'react'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <>
      <div className='container text-center justify-center mb-5' style={{marginTop : "3.5rem"}}>
        <div className='row home-hero'>
          <img src='media/images/homeHero.png'alt='Hero Image' style={{width : "65%"}} className='mb-3 w-[70%] mx-auto block'/>
          <h3 className='mt-5 home-hero-heading' style={{ fontSize : "2.7rem", color : "#424242"}}>Invest in everything</h3> 
          <p className='fs-5 mt-2 text-muted'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <Link to={"/signup"}>
            <button style={{width : "20%", margin : "0 auto", fontWeight : "700"}} className='bg-primary text-white p-2 mt-3 rounded border-0 open-account-btn'>Sign up for free</button>
          </Link>
        </div>

        <div className='row mt-5'></div>

      </div>
    </>
  )
}

export default Hero