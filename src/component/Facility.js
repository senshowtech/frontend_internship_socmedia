import React from "react";

export default function Facility() {
  return (
    <div className="facility">
      <div className="d-flex text-facility">
        <div className="d-flex align-items-center text-sub-facility">
          <svg
            width="33"
            height="4"
            viewBox="0 0 33 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 2H33" stroke="white" strokeWidth="3" />
          </svg>
        </div>
        <div className="ms-2">
          <h2
            className="font-link text-sub-facility"
            style={{ fontSize: "36px", color: "#FFFFFF" }}
          >
            Fasilitas Apartement
          </h2>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card card-facility">
                <img
                  src={require("../assets/img/asset2.jpg")}
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-text text-center font-link">
                    Perabotan Lengkap
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-facility">
                <img
                  src={require("../assets/img/asset3.jpg")}
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-text text-center font-link">Lobby</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-facility">
                <img
                  src={require("../assets/img/asset4.jpg")}
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-text text-center font-link">
                    Kolam Renang
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-facility">
                <img
                  src={require("../assets/img/asset5.jpg")}
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-text text-center font-link">
                    Pemandangan Terbaik
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card card-facility">
                <img
                  src={require("../assets/img/asset6.jpg")}
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-text text-center font-link">
                    Lintas Jogging
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-facility">
                <img
                  src={require("../assets/img/asset7.jpg")}
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-text text-center font-link">
                    Sky View Cafe
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-facility">
                <img
                  src={require("../assets/img/asset8.jpg")}
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-text text-center font-link">
                    Eiji Mentai Resto di Lobby
                  </h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-facility">
                <img
                  src={require("../assets/img/asset9.jpg")}
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-text text-center font-link">
                    Area Fitness
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
