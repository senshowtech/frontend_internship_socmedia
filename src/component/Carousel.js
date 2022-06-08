import React from "react";

export default function Carousel() {
  return (
    <div className="d-flex justify-content-center">
      <div className="carousel">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../assets/img/asset1.png")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../assets/img/asset1.png")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../assets/img/asset1.png")}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <div className="button-carousel-kiri">
              <svg
                width="105"
                height="120"
                viewBox="0 0 105 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_44)">
                  <path
                    d="M80 50C80 33.4315 66.5685 20 50 20H15V100H50C66.5685 100 80 86.5685 80 70V50Z"
                    fill="#3F6745"
                  />
                </g>
                <path
                  d="M48 72L36 60L48 48"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_d_1_44"
                    x="0"
                    y="0"
                    width="105"
                    height="120"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="5" />
                    <feGaussianBlur stdDeviation="10" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_44"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_44"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <div className="button-carousel-kanan">
              <svg
                width="105"
                height="120"
                viewBox="0 0 105 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_40)">
                  <path
                    d="M25 50C25 33.4315 38.4315 20 55 20H90V100H55C38.4315 100 25 86.5685 25 70V50Z"
                    fill="#3F6745"
                  />
                </g>
                <path
                  d="M58 72L70 60L58 48"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_d_1_40"
                    x="0"
                    y="0"
                    width="105"
                    height="120"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-5" />
                    <feGaussianBlur stdDeviation="10" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_40"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_40"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
