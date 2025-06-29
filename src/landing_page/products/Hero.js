import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='container' style={{marginTop : "5rem", marginBottom : "5rem"}}>
            <div className='row text-center'>
                <h1 className='text-muted' style={{fontSize : "3rem"}}>Zerodha Products</h1>
                <p className='text-muted' style={{fontSize : "1.4rem", lineHeight : "2", fontWeight : "500"}}>Sleek, modern, and intuitive trading platforms</p>
                <p className='text-muted' style={{fontSize : "1rem", fontWeight : "500"}}>Check out our <a href=''>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> </p>
            </div>
            <div className='row text-center border-top' style={{marginTop : "6rem", marginBottom : "3rem"}}></div>
        </div>
    </>
  );
}

export default Hero