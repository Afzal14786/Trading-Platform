import React from 'react'

const OpenDematAccount = () => {
  return (
    <>
        <div className='w-100 p-5' style={{backgroundColor : "#fafafb"}}>
            <div className='container'>

                <h2 className='text-center mb-5'>Steps to open a demat account with Zerodha</h2>
                <div className='row d-flex'>
                    <div className='col-6 text-center'>
                        <img src='media/images/steps-acop.svg' alt='Steps Acop' />
                    </div>

                    <div className='col-6 mt-3'>
                        <div className='border-bottom d-flex mb-4'>
                            <div className='text-center steps mt-1'>01</div>
                            <p className='acop-steps-text'>Enter the requested details</p>
                        </div>

                        <div className='border-bottom d-flex mb-4'>
                            <div className='text-center steps mt-1'>02</div>
                            <p className='acop-steps-text'>Complete e-sign & verification</p>
                        </div>

                        <div className='d-flex mb-4'>
                            <div className='text-center steps mt-1'>03</div>
                            <p className='acop-steps-text'>Start Investing</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default OpenDematAccount