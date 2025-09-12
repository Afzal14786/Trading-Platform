/**
 * @description Team.js
 * 
 *  This page contain all the information regarding the team
 */

const Teams = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row d-flex mb-5">
          <h3
            className="text-center"
            style={{ fontWeight: "400", fontSize: "2rem" }}
          >
            People
          </h3>

          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center mt-5">
            <img
              src="media/images/nithinKamath.jpg"
              className="img-fluid rounded-circle"
              style={{ width: "50%", marginLeft : "4rem"}}
              alt="ceo-image"
            />
            <p
              className="mt-3"
              style={{
                fontWeight: "500",
                fontSize: "1.5rem",
                lineHeight: "1.3",
                letterSpacing: "1.2",
                marginLeft : "4rem",
              }}
            >
              Nithin Kamath
            </p>
            <p
              className="text-muted"
              style={{ fontSize: "17px", fontWeight: "500", marginLeft : "4rem"}}
            >
              Founder, CEO
            </p>
          </div>

          <div className="col-12 col-md-6 mt-5 text-muted" style={{lineHeight : "1.6", fontSize : "1.1rem"}}>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

            <p>Playing basketball is his zen.</p>

            <p>Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a></p>
          </div>
        </div>

        {/* row 1 */}
        <div className="row d-flex mt-5">
            <div className="col d-flex flex-column align-items-center justify-content-center mt-5">
                <img
                src="media/images/Nikhil.jpg"
                className="img-fluid rounded-circle"
                style={{ width: "65%", marginLeft : "4rem"}}
                alt="ceo-image"
                />
                <p
                className="mt-3"
                style={{
                    fontSize: "1.5rem",
                    lineHeight : "1.2",
                    letterSpacing: "1.2",
                    marginLeft : "4rem",
                }}
                >
                Nithin Kamath
                </p>
                <p
                className="text-muted"
                style={{ fontSize: "17px", marginLeft : "4rem", lineHeight : "1.2"}}
                >
                Co-founder & CFO
                </p>
            </div>

            <div className="col d-flex flex-column align-items-center justify-content-center mt-5">
                <img
                src="media/images/Kailash.jpg"
                className="img-fluid rounded-circle"
                style={{ width: "65%", marginLeft : "4rem"}}
                alt="ceo-image"
                />
                <p
                className="mt-3"
                style={{
                    fontSize: "1.5rem",
                    lineHeight : "1.2",
                    letterSpacing: "1.2",
                    marginLeft : "4rem",
                }}
                >
                Dr. Kailash Nadh
                </p>
                <p
                className="text-muted"
                style={{ fontSize: "17px", marginLeft : "4rem", lineHeight : "1.2"}}
                >
                CTO
                </p>
            </div>

            <div className="col d-flex flex-column align-items-center justify-content-center mt-5">
                <img
                src="media/images/Venu.jpg"
                className="img-fluid rounded-circle"
                style={{ width: "65%", marginLeft : "4rem"}}
                alt="ceo-image"
                />
                <p
                className="mt-3"
                style={{
                    fontSize: "1.5rem",
                    lineHeight : "1.2",
                    letterSpacing: "1.2",
                    marginLeft : "4rem",
                }}
                >
                Venu Madhav
                </p>
                <p
                className="text-muted"
                style={{ fontSize: "17px", marginLeft : "4rem", lineHeight : "1.2"}}
                >
                COO
                </p>
            </div>
        </div>

        {/* row 2 */}
        <div className="row d-flex mt-5">
            <div className="col d-flex flex-column align-items-center justify-content-center mt-5">
                <img
                src="media/images/Hanan.jpg"
                className="img-fluid rounded-circle"
                style={{ width: "65%", marginLeft : "4rem"}}
                alt="ceo-image"
                />
                <p
                className="mt-3"
                style={{
                    fontSize: "1.5rem",
                    lineHeight : "1.2",
                    letterSpacing: "1.2",
                    marginLeft : "4rem",
                }}
                >
                Hanan Delvi
                </p>
                <p
                className="text-muted"
                style={{ fontSize: "17px", marginLeft : "4rem", lineHeight : "1.2"}}
                >
                CCO
                </p>
            </div>

            <div className="col d-flex flex-column align-items-center justify-content-center mt-5">
                <img
                src="media/images/Seema.jpg"
                className="img-fluid rounded-circle"
                style={{ width: "65%", marginLeft : "4rem"}}
                alt="ceo-image"
                />
                <p
                className="mt-3"
                style={{
                    fontSize: "1.5rem",
                    lineHeight : "1.2",
                    letterSpacing: "1.2",
                    marginLeft : "4rem",
                }}
                >
                Seema Patil
                </p>
                <p
                className="text-muted"
                style={{ fontSize: "17px", marginLeft : "4rem", lineHeight : "1.2"}}
                >
                Director
                </p>
            </div>

            <div className="col d-flex flex-column align-items-center justify-content-center mt-5">
                <img
                src="media/images/karthik.jpg"
                className="img-fluid rounded-circle"
                style={{ width: "65%", marginLeft : "4rem"}}
                alt="ceo-image"
                />
                <p
                className="mt-3"
                style={{
                    fontSize: "1.5rem",
                    lineHeight : "1.2",
                    letterSpacing: "1.2",
                    marginLeft : "4rem",
                }}
                >
                Karthik Rangappa
                </p>
                <p
                className="text-muted"
                style={{ fontSize: "17px", marginLeft : "4rem", lineHeight : "1.2"}}
                >
                Chief of Education
                </p>
            </div>
        </div>

        {/* Row 3 */}

        <div className="row d-flex mt-5">
            <div className="col d-flex flex-column align-items-center justify-content-center mt-5">
                <img
                src="media/images/Austin.jpg"
                className="img-fluid rounded-circle"
                style={{ width: "65%", marginLeft : "4rem"}}
                alt="ceo-image"
                />
                <p
                className="mt-3"
                style={{
                    fontSize: "1.5rem",
                    lineHeight : "1.2",
                    letterSpacing: "1.2",
                    marginLeft : "4rem",
                }}
                >
                Austin Prakash
                </p>
                <p
                className="text-muted"
                style={{ fontSize: "17px", marginLeft : "4rem", lineHeight : "1.2"}}
                >
                Director Strategy
                </p>
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center mt-5"></div>
            <div className="col d-flex flex-column align-items-center justify-content-center mt-5"></div>
        </div>
      </div>
    </>
  );
};

export default Teams;
