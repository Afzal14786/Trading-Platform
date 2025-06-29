
const CreateTicket = () => {
  return (
    <>
        <div className='container' style={{marginBottom : "7rem"}}>
            <h4 className='text-muted' style={{marginTop : "2.2rem", fontSize : "22px", fontWeight : "500"}}>To create a ticket, select a relevant topic</h4>
            <div className='row mt-5 mb-5'>
                <div className='col-4 create-ticket'>
                    <h5 className='create-ticket-headings'><a href='#'><i class="fas fa-plus-circle"></i> &nbsp;Account Opening</a> </h5>
                    <span className='text-gray'>
                        <a href='#'>Resident individual</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Minor</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Non Resident Indian (NRI)</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Company, Partnership, HUf and LLP</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Glossary</a>
                    </span>
                </div>

                {/* row 2 */}
                <div className='col-4 create-ticket'>
                    <h5 className='create-ticket-headings'><a href='#'><i class="far fa-user"></i> &nbsp;Your Zerodha Account</a> </h5>
                    <span className='text-gray'>
                        <a href='#'>Your Profile</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Account modification</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Client Master Report (CMR) and Depository Participant (DP)</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Nomination</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Transfer and conversion of securities</a>
                    </span>
                </div>

                {/* row 3 */}
                <div className='col-4 create-ticket'>
                    <h5 className='create-ticket-headings'><a href='#'><i class="fas fa-signal"></i> &nbsp;Kite</a> </h5>
                    <span className='text-gray'>
                        <a href='#'>IPO</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Trading FAQs</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Margin Trading Facility (MTF) and Margins</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Charts and orders</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Alerts and Nudges</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>General</a>
                    </span>
                </div>
            </div>

            <div className='row mt-5 mb-5'>
                <div className='col-4 create-ticket'>
                    <h5 className='create-ticket-headings'><a href='#'><i class="fas fa-credit-card"></i> &nbsp;Funds</a> </h5>
                    <span className='text-gray'>
                        <a href='#'>Add money</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Withdraw money</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Add bank accounts</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>eMandates</a>
                    </span>
                </div>

                {/* row 2 */}
                <div className='col-4 create-ticket'>
                    {/* can't fint the console icon similar to zerodha */}
                    <h5 className='create-ticket-headings'><a href='#'><i class="fas fa-terminal"></i> &nbsp;Console</a> </h5>
                    <span className='text-gray'>
                        <a href='#'>Portfolio</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Corporate actions</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Funds statement</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Report</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Profile</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Segments</a>
                    </span>
                </div>

                {/* row 3 */}
                <div className='col-4 create-ticket'>
                    {/* can't find the similar icon for coin as zerodha */}
                    <h5 className='create-ticket-headings'><a href='#'><i class="fab fa-bitcoin"></i> &nbsp;Coin</a> </h5>
                    <span className='text-gray'>
                        <a href='#'>Mutual funds</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>National Pension Scheme (NPS)</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Features on Coin</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>Payments and Orders</a>
                    </span>

                    <span className='text-gray'>
                        <a href='#'>General</a>
                    </span>
                </div>
            </div>
        </div>
    </>
  );
}

export default CreateTicket