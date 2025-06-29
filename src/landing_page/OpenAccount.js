import React from 'react'
import { Link } from 'react-router-dom';

const OpenAccount = () => {
  return (
    <>
      <div className='container d-flex justify-content-center align-items-center mt-5 mb-5'>
         <div className='row text-center'>
            <h1 className='mt-5'>Open a Zerodha account</h1>
            <p className='mt-3 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link to={"/signup"}>
              <button style={{width : "20%", margin : "0 auto", fontWeight : "700"}} className='bg-primary text-white p-2 mt-3 rounded border-0 open-account-btn'>Sign up for free</button>
            </Link>
         </div>
      </div>
    </>
  )
}

export default OpenAccount