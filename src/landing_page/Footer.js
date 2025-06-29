
import { useLocation } from "react-router-dom";


const Footer = () => {
  const location = useLocation();
  const isSupportPage = location.pathname === "/support"; // or whatever your support URL is



  return (
    <>
      <div className='w-100 border-top' style={{backgroundColor : "#fdfcfc"}}>
          <div className='container mt-5' style={{marginBottom : "1rem"}}>
            <div className='row'>

              {/* Support Footer Page */}
              {isSupportPage ? (
                <>
                  <div className='col-3 mt-1'>
                    <img src='media/images/logo.svg' style={{width : "70%"}} alt='Logo at footer'/>
                    <h4 className="text-muted" style={{marginTop : "1.1rem", fontSize : "1.2rem", fontWeight : "500"}}><i class="fas fa-phone"></i>&nbsp; 080 47181888</h4>
                    <p className ='small mt-3 text-muted'>&copy; 2010 - 2025, Zerodha Broking Ltd. <br/> All rights reserved.</p>
                    <i class="fab fa-twitter icon-first"></i>
                    <i class="fab fa-facebook-square icons"></i>
                    <i class="fab fa-instagram icons"></i>
                    <i class="fab fa-linkedin-in icons"></i>
                  </div>
                </>
              ): (
                <>
                  <div className='col-3 mt-2'>
                    <img src='media/images/logo.svg' style={{width : "70%"}} alt='Logo at footer'/>
                    <p className ='small mt-3 text-muted'>&copy; 2010 - 2025, Zerodha Broking Ltd. <br/> All rights reserved.</p>
                    <i class="fab fa-twitter icon-first"></i>
                    <i class="fab fa-facebook-square icons"></i>
                    <i class="fab fa-instagram icons"></i>
                    <i class="fab fa-linkedin-in icons"></i>

                    <div className='border-bottom mt-3 mb-3'></div>
                    <i class="fab fa-youtube icon-first"></i>
                    <i class="fab fa-whatsapp icons"></i>
                    <i class="fab fa-telegram-plane icons"></i>
                  </div>
                </>
              )}

              {
              isSupportPage ? 
                (
                  <>
                    <div className='col '>
                      <h3 className='fs-5 text-muted'>Company</h3>
                      <ul className='list-unstyled mt-3'>
                        <li className='links mt-2'><a href='#' className='text-muted link'>About</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Products</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Pricing</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Referral programme</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Careers</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Press & Media</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Zerodha Cares (CSR)</a></li>
                      </ul>
                    </div>
                  </>
                ) : 
                (
                  <>
                    {/* Account */}
                    <div className='col mt-1'>
                      <h3 className='fs-5'>Account</h3>
                      <ul className='list-unstyled mt-3'>
                        <li className='links'><a href='#' className='text-muted link'>Open demat account</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Minor demat account</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>NRI demat account</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Commodity</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Dematerialisation</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Fund transfer</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>MTF</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Referral program</a></li>
                      </ul>
                    </div> 
                  </>
                )
              }

              {
                isSupportPage ? 
                (
                  <>
                    <div className='col'>
                      <h3 className='fs-5 text-muted'>Support</h3>
                      <ul className='list-unstyled mt-3'>
                        <li className='links'><a href='#' className='text-muted link'>Contact</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Support portal</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Z-Connect</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>List of charges</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Downloads & resources</a></li>
                      </ul>
                    </div>
                  </>
                ) : 
                (
                  <>
                    <div className='col'>
                      <h3 className='fs-5'>Support</h3>
                      <ul className='list-unstyled mt-3'>
                        <li className='links'><a href='#' className='text-muted link'>Contact us</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Support portal</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>How to file a complaint</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Status of your complaints</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Bulletin</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Circular</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Z-Connect blog</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Downloads</a></li>
                      </ul>
                    </div>
                  </>
                )
              }

              
              {
                isSupportPage ? 
                (
                  <>
                    <div className='col'>
                      <h3 className='fs-5 text-muted'>Account</h3>
                      <ul className='list-unstyled mt-3'>
                        <li className='links'><a href='#' className='text-muted link'>Open an account</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Fund transfer</a></li>
                      </ul>
                    </div> 
                  </>
                ) : 
                (
                  <>
                    {/* Company */}
                    <div className='col '>
                      <h3 className='fs-5'>Company</h3>
                      <ul className='list-unstyled mt-3'>
                        <li className='links mt-2'><a href='#' className='text-muted link'>About</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Philosophy</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Press & media</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Carrers</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Zerodha Cares &#40;CSR&#41;</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Zerodha.tech</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Open source</a></li>
                      </ul>
                    </div>

                  </>
                )
              }

              {
                isSupportPage ? 
                (
                  <></>
                ) : 
                (
                  <>
                          {/* Quick Links */}
                    <div className='col'>
                      <h3 className='fs-5'>Quick links</h3>
                      <ul className='list-unstyled mt-3'>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Upcomming IPOs</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Brokerage charges</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Market holidays</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Economic calendar</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Calculator</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Markets</a></li>
                        <li className='links mt-2'><a href='#' className='text-muted link'>Sectors</a></li>
                      </ul>
                    </div>
                  </>
                )
              }


              {
                isSupportPage ? 
                (
                  <></>
                ) : 
                (
                  <>

                    <p className='mt-4 text-muted font'>Zerodha Broking Ltd.: Member of NSE, BSE​ &#38;​ MCX &#8722; SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. &#8722; SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 &#8722; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='#' className='footer-links'>complaints@zerodha.com</a> , for DP related to <a href='#' className='footer-links'>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                    <p className='mt-1 text-muted font'>Procedure to file a complaint on <a href='#' className='footer-links'>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p className='mt-1 text-muted font'>
                        <a href='#' className='footer-links'>Smart Online Dispute Resolution</a> | <a href='#' className='footer-links'>Grievances Redressal Mechanism</a> 
                    </p>

                    <p className='mt-1 text-muted font'>
                      Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>

                    <p className='mt-1 text-muted font'>
                      Attention investors: 1&#41; Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2&#41; Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3&#41; Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p className='mt-1 text-muted font'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary &#40;broker, DP, Mutual Fund etc.&#41;, you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='#' className='footer-links'>create a ticket here</a>.</p>

                    <div className='row text-center'>
                      <div className='col mb-4'>
                      <a href='#' className='policies-links-first policies-links text-muted small'>BSE</a>
                      <a href='#' className='policies-links text-muted small'>NSE</a>
                      <a href='#' className='policies-links text-muted small'>MCX</a>
                      <a href='#' className='policies-links text-muted small'>Terms &#38; conditions</a>
                      <a href='#' className='policies-links text-muted small'>Policies &#38; procedures</a>
                      <a href='#' className='policies-links text-muted small'>Privace policy</a>
                      <a href='#' className='policies-links text-muted small'>Disclosure</a>
                      <a href='#' className='policies-links text-muted small'>For investor&#39; attention</a>
                      <a href='#' className='policies-links text-muted small'>Investor charter</a>
                      </div>
                    </div>
                  </>
                )
              }


            </div>
          </div>
      </div>
    </>
  )
}

export default Footer