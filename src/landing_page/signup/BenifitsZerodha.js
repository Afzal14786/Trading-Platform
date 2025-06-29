import React from 'react'

const BenifitsZerodha = () => {
  return (
      <>
        <div className='container'>
           <div className='row d-flex justify-content-between mt-5 mb-5'>
              <div className='col-6'>
                <p className='text-center'>
                  <img src='media/images/acop-benefits.svg' alt='acop-benefits' style={{marginBottom : "15px", width : "100%"}}/>
                </p>

                <h2 className='text-muted'>Benifits of opening a Zerodha demat account</h2>
              </div>

              <div className='col-6'>
                <div className='mt-3 mx-3'>
                    <h3 className='mb-3'>Unbeatable pricing</h3>
                    <p className='text-muted mb-5'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                </div>
                
                <div className='mt-3 mx-3'>
                    <h3 className='mb-3'>Best investing experience</h3>
                    <p className='text-muted mb-5'>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                </div>

                <div className='mt-3 mx-3'>
                    <h3 className='mb-3'>No spam or gimmicks</h3>
                    <p className='text-muted mb-5'>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                </div>

                <div className='mt-3 mx-3'>
                    <h3 className='mb-3'>The Zerodha universe</h3>
                    <p className='text-muted mb-5'>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                </div>
              </div>
           </div>
        </div>
      </>
  );
}

export default BenifitsZerodha