import React from "react";

export default function Concept() {
  return (
    <div className="d-flex justify-content-center align-items-center concept">
      <div className="container">
        <div className="row">
          <div className="col col-md">
            <div className="card card-concept">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../assets/img/merapi.png")}
                  className="img-concept"
                  alt="..."
                />
              </div>
              <div className="p-5 ms-2" style={{ marginTop: "-20px" }}>
                <div className="d-flex">
                  <p>1.</p>
                  <p>
                    Konsep apartemen yang menyatu dengan alam dengan hamparan
                    sawah, sungai kecil mengalir, dan view gunungmerapi.
                  </p>
                </div>
                <div className="d-flex">
                  <p>2.</p>
                  <p>
                    Low pollution. Di areal keramaian kota namun jauh dari
                    polusi udara memungkinkan sebagai hunian yang nyaman.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md">
            <div className="card card-concept">
              <div className="d-flex justify-content-center">
                <img
                  src={require("../assets/img/room.png")}
                  className="img-concept"
                  alt="..."
                />
              </div>
              <div className="p-5 ms-2" style={{ marginTop: "-20px" }}>
                <div className="d-flex">
                  <p>1.</p>
                  <p>
                    Konsep apartemen yang menyatu dengan alam dengan hamparan
                    sawah, sungai kecil mengalir, dan view gunungmerapi.
                  </p>
                </div>
                <div className="d-flex">
                  <p>2.</p>
                  <p>
                    Salah satu konsep terbaik apartemen, "smart living" tampilan
                    minimalis dengan perabotan mebel yang multi-fungsi sehingga
                    ruangan tampak lebih luas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
