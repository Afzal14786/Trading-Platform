import React from 'react'

const Information = () => {
  return (
    <>
        <div className='container'>
            <div className='row mb-5 px-4' style={{lineHeight : "1.8"}}>
                <div className='col-6 text-muted mt-4' style={{paddingLeft : "8rem"}}>
                    <p style={{fontWeight:"500"}}>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

                    <p style={{fontWeight:"500"}}>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                    <p style={{fontWeight:"500"}}>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>

                <div className='col-6 text-muted mt-4' style={{paddingLeft : "25px", paddingRight : "6rem",fontWeight : "500"}}>
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                    <p> <a href="#">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="#"> blog</a> or see what the media is<a href="#"> saying about us</a> or learn more about our business and product<a href="#"> philosophies.</a></p>

                </div>
            </div>
        </div>
    </>
  );
}

export default Information