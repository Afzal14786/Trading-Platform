import React from 'react'

const Education = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          {/* Image */}
          <div className='col mt-5'>
            <img src='media/images/education.svg' alt='education svg' style={{width : "80%"}}/>
          </div>

          {/* Informartion */}
          <div className='col mt-5'>
              <div className='row mt-5'>
                 <h1 className='fs-2'>Free and open market education</h1>
                 <p className='fs-8 mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                 <a href="#" style={{ textDecoration: "none", fontWeight: "500" }}>
                  Varsity{" "}
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>

              <div className='row'>
                <p className='fs-8 mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="#" style={{ textDecoration: "none", fontWeight: "500" }}>
                  TradingQ&A{" "}
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education