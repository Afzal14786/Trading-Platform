import React from 'react'
import {Link} from "react-router-dom";
const LeftImage = ({ImageUrl, heading, paragraph, tryDemo, learnMore, googlePlayStore, IOS}) => {
  return (
    <>
        <div className='container pt-3' style={{marginBottom : "5rem"}}>
            <div className='row'>
                <div className='col-8 d-flex align-item-start justify-content-start'>
                    <img src={ImageUrl} style={{width : "75%"}} alt=''/>
                </div>

                <div className='col-4' style={{marginTop : "4rem"}}>
                    <h2 className='text-muted'>{heading}</h2>
                    <p>{paragraph}</p>
                    <a href='#'>{tryDemo} <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href='#' className='mx-5' style={{marginLeft: "2rem"}}>{learnMore} <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <Link>
                        <img src={googlePlayStore} alt='googlePlayStore' style={{marginTop : "20px"}}/>
                        <img src={IOS} alt='googlePlayStore' style={{marginTop : "20px", marginLeft : "2rem"}}/>
                    </Link>
                </div>
            </div>
        </div>
    </>
  );
}

const LeftImage2 = ({ImageUrl, heading, paragraph, tryDemo, googlePlayStore, IOS}) => {
  return (
    <>
        <div className='container pt-3' style={{marginBottom : "5rem"}}>
            <div className='row'>
                <div className='col-8 d-flex align-item-start justify-content-start'>
                    <img src={ImageUrl} style={{width : "80%"}} alt=''/>
                </div>

                <div className='col-4' style={{marginTop : "4rem"}}>
                    <h2 className='text-muted'>{heading}</h2>
                    <p>{paragraph}</p>
                    <a href='#'>{tryDemo} <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <div>
                        <Link>
                            <img src={googlePlayStore} alt='googlePlayStore' style={{marginTop : "20px"}}/>
                            <img src={IOS} alt='googlePlayStore' style={{marginTop : "20px", marginLeft : "2rem"}}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

const LeftImage3 = ({ImageUrl, heading, paragraph, googlePlayStore, IOS}) => {
  return (
    <>
        <div className='container pt-3' style={{marginBottom : "5rem"}}>
            <div className='row'>
                <div className='col-8 d-flex align-item-start justify-content-start'>
                    <img src={ImageUrl} style={{width : "60%"}} alt=''/>
                </div>

                <div className='col-4' style={{marginTop : "4rem"}}>
                    <h2 className='text-muted'>{heading}</h2>
                    <p>{paragraph}</p>

                    <div>
                        <Link>
                            <img src={googlePlayStore} alt='googlePlayStore' style={{marginTop : "20px"}}/>
                            <img src={IOS} alt='googlePlayStore' style={{marginTop : "20px", marginLeft : "2rem"}}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export {
    LeftImage,
    LeftImage2,
    LeftImage3
}