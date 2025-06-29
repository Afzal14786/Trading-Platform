import React from 'react'
import { Link } from 'react-router-dom';

const RightImage = ({ImageURL, title, paragraph, link}) => {
  return (
    <>
      <div className='container pt-3' style={{marginBottom : "5rem"}}>
          <div className='row align-items-center'>
              <div className='col-lg-4 col-md-6 col-sm-12'>
                  <h2 className='text-muted'>{title}</h2>
                  <p>{paragraph}</p>
                  <a href='#'>{link} <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>

              <div className='col-lg-8 col-md-6 col-sm-12 d-flex justify-content-center'>
                <img src={ImageURL} style={{width : "100%"}} alt=''/>
              </div>

          </div>
        </div>
    </>
  );
}

export default RightImage