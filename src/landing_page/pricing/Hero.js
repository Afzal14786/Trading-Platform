import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='container' style={{marginTop : "6rem", marginBottom : "7rem"}}>
            <div className='row text-center'>
                <h2 style={{color : "#424242", fontWeight : "500", fontSize : "3rem"}}>Charges</h2>
                <p className='text-muted' style={{fontWeight : "500"}}>List of all charges and taxes</p>
            </div>

            <div className='row' style={{marginTop : " 5rem"}}>
                <div className='col text-center'>
                    {/* images */}
                    <img src='media/images/pricing0.svg' alt='' style={{width : "80%"}}/>
                    <h3 style={{color : "#424242"}}>Free equity delivery</h3>
                    <p style={{color : "#424242", marginTop : "1.7rem", fontWeight : "500"}}>All equity delivery investments (NSE, BSE),are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className='col text-center'>
                    {/* images */}
                    <img src='media/images/other-trades.svg' alt='' style={{width : "80%"}}/>
                    <h3 style={{color : "#424242"}}>Intraday and F&O trades</h3>
                    <p style={{color : "#424242", marginTop : "1.7rem", fontWeight : "500"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className='col text-center'>
                    {/* images */}
                    <img src='media/images/pricing0.svg' alt='' style={{width : "80%"}}/>
                    <h3 style={{color : "#424242"}}>Free direct MF</h3>
                    <p style={{color : "#424242", marginTop : "1.7rem", fontWeight : "500"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default Hero