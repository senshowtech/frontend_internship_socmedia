import React from "react";

export default function About() {
  return (
    <div id="about">
      <div className="d-flex text-about">
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
            Mengapa Greenpark Apartemen ?
          </h2>
        </div>
      </div>
      <div style={{ marginLeft: "83px" }}>
        <p>
          Ini alasan Mengapa anda perlu memiliki hunian di Greenpark Jogja
          Apartemen.
        </p>
      </div>
      <div className="d-flex flex-column justify-content-center mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md">
              <div className="d-flex justify-content-center">
                <div style={{ width: "68px", height: "68px" }}>
                  <img
                    src={require("../assets/img/icon.png")}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <h5 className="font-link">Bonus & Cashback</h5>
              </div>
              <div className="d-flex justify-content-center text-center">
                <p>
                  Dapatkan bonus dan cashback menarik dari kami untuk setiap
                  pembelian Apartemen ....
                </p>
              </div>
            </div>
            <div className="col-12 col-md">
              <div className="d-flex justify-content-center">
                <div style={{ width: "68px", height: "68px" }}>
                  <img
                    src={require("../assets/img/icon1.png")}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <h5 className="font-link">Pelayanan Terbaik</h5>
              </div>
              <div className="d-flex justify-content-center text-center">
                <p>
                  Kami selalu memberikan pelayanan terbaik untuk setiap customer
                  kami.
                </p>
              </div>
            </div>
            <div className="col-12 col-md">
              <div className="d-flex justify-content-center">
                <div style={{ width: "68px", height: "68px" }}>
                  <img
                    src={require("../assets/img/icon2.png")}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <h5 className="font-link">Harga = Kualitas</h5>
              </div>
              <div className="d-flex justify-content-center text-center">
                <p>Apa yang anda bayar, sesuai dengan yang anda dapatkan.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md">
              <div className="d-flex justify-content-center">
                <div style={{ width: "68px", height: "68px" }}>
                  <img
                    src={require("../assets/img/icon3.png")}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <h5 className="font-link">Lokasi Strategi</h5>
              </div>
              <div className="d-flex justify-content-center text-center">
                <p>
                  Dekat dengan lokasi terkenal di Jogja, membuat anda menjadi
                  lebih mudah dalam menjangkaunya.
                </p>
              </div>
            </div>
            <div className="col-12 col-md">
              <div className="d-flex justify-content-center">
                <div style={{ width: "68px", height: "68px" }}>
                  <img
                    src={require("../assets/img/icon4.png")}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <h5 className="font-link">Objek Investasi</h5>
              </div>
              <div className="d-flex justify-content-center text-center">
                <p>
                  Kapan lagi investasi properti dikota besar dengan harga dan
                  kualitas yang sepadan ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="apartement"
        className="d-flex align-items-center mt-5"
        style={{
          height: "146px",
          backgroundColor: "#3F6745",
          color: "#FFFFFF",
        }}
      >
        <p className="text-center text-tengah ">
          Tidak ada lagi rasa jenuh ketika anda mendapatkan suasana hunian yang
          tepat. Nuansa alam yang melekat dan pemandangan yang indah membuat
          suasana dan aura Greenpark Jogja Apartment menjadi lebih nyaman untuk
          dihuni.
        </p>
      </div>
    </div>
  );
}
