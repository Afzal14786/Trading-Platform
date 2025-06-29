import React from 'react'

const AccountOpeningCharges = () => {
  return (
    <>
        <div className='container' style={{marginTop : "4rem", marginBottom : "4rem"}}>
            <h3 className='account-opening-charges'>Charges for acoount opening</h3>
            <div className='row' style={{marginBottom : "2rem"}}>
                <div className="account-opeing-table">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={3}>Type of account</th>
                                <th>Charges</th>
                            </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td colSpan={3}>Online account</td>
                            {/* free button should be there */}
                            <td><span className='free-tag'>FREE</span></td>   
                        </tr>

                        <tr>
                            <td colSpan={3}>Offline</td>
                            <td><span className='free-tag'>FREE</span></td>
                        </tr>

                        <tr>
                            <td colSpan={3}>NRI account (offline only)</td>
                            <td>&#8377; 500</td>
                        </tr>

                        <tr>
                            <td colSpan={3}>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td>&#8377; 500</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='row' style={{marginTop : "4rem"}}>
                <h4 className='account-opening-charges'>Charges for optional value added services</h4>
                <div className='service-charges'>
                    <table>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Billing Frquency</th>
                                <th>Charges</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Tickertape</td>
                                <td>Monthly / Annual</td>
                                <td>Free: 0 | Pro: 249/2399</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>Smallcase</td>
                                <td>Per transaction</td>
                                <td>Buy & Invest More: 100 | SIP: 10</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>Kite Connect</td>
                                <td>Monthly</td>
                                <td>Connect: 500 | Historical: 500</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  );
}

export default AccountOpeningCharges