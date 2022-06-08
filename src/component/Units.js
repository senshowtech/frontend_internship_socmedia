import React from "react";

export default function Units() {
  return (
    <div className="units">
      <div className="d-flex text-units">
        <div className="d-flex align-items-center">
          <svg
            width="33"
            height="4"
            viewBox="0 0 33 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 2H33" stroke="black" strokeWidth="3" />
          </svg>
        </div>
        <div className="ms-2">
          <h2 className="font-link" style={{ fontSize: "36px" }}>
            Tipe Unit
          </h2>
        </div>
      </div>
      <div>
        <p className="text-unit-sub">
          Konsep apartemen yang menyatu dengan alam dengan
        </p>
        <p className="text-unit-sub" style={{ marginTop: "-15px" }}>
          hamparan sawah, sungai kecil mengalir, dan view gunung merapi.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md card-units">
            <div className="d-flex flex-column">
              <img
                style={{
                  width: "280px",
                  height: "188px",
                  borderBottomLeftRadius: "20px",
                }}
                src={require("../assets/img/asset10.png")}
                className="img-concept"
                alt="..."
              />
              <h4 className="font-link">Unit Studio</h4>
              <p style={{ fontSize: "14px" }}>
                7m x 3.5m | 1 Kamar | 1 Dapur | 1 Km. Mandi
              </p>
            </div>
          </div>
          <div className="col-12 col-md card-units">
            <div className="d-flex flex-column">
              <img
                style={{
                  width: "280px",
                  height: "188px",
                  borderBottomLeftRadius: "20px",
                }}
                src={require("../assets/img/asset11.png")}
                className="img-concept"
                alt="..."
              />
              <h4 className="font-link">Unit 1 BR</h4>
              <p style={{ fontSize: "14px" }}>7m x 4.5m | 2 Kamar | Pantry</p>
              <p style={{ fontSize: "14px", marginTop: "-15px" }}>
                1 Km. Mandi | 1 Lantai | R. Keluarga
              </p>
            </div>
          </div>
          <div className="col-12 col-md card-units">
            <div className="d-flex flex-column">
              <img
                style={{
                  width: "280px",
                  height: "188px",
                  borderBottomLeftRadius: "20px",
                }}
                src={require("../assets/img/asset12.png")}
                className="img-concept"
                alt="..."
              />
              <h4 className="font-link">Unit 2 BR</h4>
              <p style={{ fontSize: "14px" }}>7m x 7m | 1 Kasur | 1 Dapur</p>
              <p style={{ fontSize: "14px", marginTop: "-15px" }}>
                1 Kamar Mandi | 1 Lantai
              </p>
            </div>
          </div>
          <div className="col-12 col-md card-units">
            <div className="d-flex flex-column">
              <img
                style={{
                  width: "280px",
                  height: "188px",
                  borderBottomLeftRadius: "20px",
                }}
                src={require("../assets/img/asset13.png")}
                className="img-concept"
                alt="..."
              />
              <h4 className="font-link">Unit Duplex</h4>
              <p style={{ fontSize: "14px" }}>
                7.3m x 4.5m | 2 Kamar | 1 Dapur | 1 Km. Mandi
              </p>
              <p style={{ fontSize: "14px", marginTop: "-15px" }}>2 Lantai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
