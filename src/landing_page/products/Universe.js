import {Link} from 'react-router-dom'

const Universe = () => {
  return (
    <>
        <div className='container' style={{marginTop : "3rem"}}>
            <div className='row'>
                <p className='text-center' style={{fontWeight : "500", marginBottom : "3rem",color : "#424242"}} >Want to know more about our technology stack? Check out the <a href='https://zerodha.tech/' target="_blank"> Zerodha.tech blog</a>.</p>
                <h1 className='text-center' style={{marginTop : "4rem", color : "#424242", fontSize : "2.2rem"}}>The Zerodha Universe</h1>
                <p className='text-center text-muted' style={{color : "#424242", fontWeight : "500", marginTop : "1.5rem"}} >Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className='row mt-3 text-center' style={{color : "#424242", marginBottom : "2.5rem"}}>
                <div className='col mt-5'>
                    <a target = "_blank" href='#' style={{display : "block", marginBottom : "5rem",}}>
                        <img src='media/images/zerodhaFundhouse.png' alt='' style={{width : "50%"}}/>
                        <br/>
                        <span style={{ position : "relative", display : "block",fontSize : "12px", color : "#424242", lineHeight : "1.5", marginTop : "10px", fontWeight : "500"}}>
                            Our asset management venture <br/>that is creating simple and transparent index<br/> funds to help you save for your goals.
                        </span>
                    </a>

                    <a target = "_blank" href='#' style={{display : "block"}}>
                        <img src='media/images/streakLogo.png' alt='' style={{width : "50%"}}/>
                        <br/>
                        <span style={{ position : "relative", display : "block",fontSize : "12px", color : "#424242", lineHeight : "1.5", marginTop : "10px", fontWeight : "500"}}>
                            Systematic trading platform<br/> that allows you to create and backtest<br/> strategies without coding.
                        </span>
                    </a>
                </div>

                {/* col 2 */}
                <div className='col mt-5'>
                    <a target = "_blank" href='#' style={{display : "block", marginBottom : "5rem",}}>
                        <img src='media/images/sensibullLogo.svg' alt='' style={{width : "70%"}}/>
                        <br/>
                        <span style={{ position : "relative", display : "block",fontSize : "12px", color : "#424242", lineHeight : "1.5", marginTop : "10px", fontWeight : "500"}}>
                            Options trading platform thats lets you<br/>create strategies, analyze positions, and examine<br/>data points like open interest, FII/DII, and more.
                        </span>
                    </a>

                    <a target = "_blank" href='#' style={{display : "block"}}>
                        <img src='media/images/smallcaseLogo.png' alt='' style={{width : "70%"}}/>
                        <br/>
                        <span style={{ position : "relative", display : "block",fontSize : "12px", color : "#424242", lineHeight : "1.5", marginTop : "10px", fontWeight : "500"}}>
                            Thematic investing platform<br/> that helps you invest in diversefield<br/> backets of stocks on ETFs.
                        </span>
                    </a>
                </div>

                {/* col 3 */}
                <div className='col mt-5'>
                    <a target = "_blank" href='#' style={{display : "block", marginBottom : "5rem",}}>
                        <img src='media/images/tijori.svg' alt='' style={{width : "50%"}}/>
                        <br/>
                        <span style={{ position : "relative", display : "block",fontSize : "12px", color : "#424242", lineHeight : "1.5", marginTop : "10px", fontWeight : "500"}}>
                            Investment research platform <br/>that offers detailed insights on stocks,<br/> sectors, supply chains and more.
                        </span>
                    </a>

                    <a target = "_blank" href='#' style={{display : "block"}}>
                        <img src='media/images/dittoLogo.png' alt='' style={{width : "40%"}}/>
                        <br/>
                        <span style={{ position : "relative", display : "block",fontSize : "12px", color : "#424242", lineHeight : "1.5", marginTop : "10px", fontWeight : "500"}}>
                            Personalized advice on life<br/> and health insurance. No spam<br/> and no mis-selling.
                        </span>
                    </a>
                </div>
            </div>

            <div className='row mt-5 text-center' style={{marginBottom : "5rem"}}>
                <Link to={"/signup"}>
                    <button style={{width : "20%", margin : "0 auto", fontWeight : "700"}} className='bg-primary text-white p-2 mt-3 rounded border-0 open-account-btn'>Sign up for free</button>
                </Link>
            </div>
        </div>
    </>
  );
}

export default Universe