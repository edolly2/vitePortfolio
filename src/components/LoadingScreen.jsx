import { useState, useEffect } from "react";
// import styled, { keyframes } from "styled-components";
import "../styles/LoadingScreen.css";
import SiteBrand from "./SiteBrand";

// const loadingAnimation = keyframes`
// 0% {
// width: 0px;
// }
// 25% {
//   width: 55px;
// }
// 50% {
//   width: 80px;
// }
// 75% {
//   width: 105px;
// }
// 100% {
//   width: 130px;
// }
// `;

// const loadingProgress = keyframes`
// 0% {
//   content: "0%";
// }
// 25% {
//   content: "25%";
// }
// 50% {
//   content: "50%";
// }
// 75% {
//   content: "75%";
// }
// 100% {
//   content: "100%";
// }
// `;

const LoadingScreen = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div
      className="loading-screen-container"
      style={{ display: loading ? "flex" : "none" }}
    >
      {loading ? (
        <div className="loading-wrapper">
          <div className="loading-content">
            <SiteBrand className="loading-logo" />
            <h1 className="loading-content-title">
              <span className="primary">&lt;</span>{" "}
              <span className="primary">Eric</span>{" "}
              <span className="secondary">Dollinger</span>{" "}
              <span className="primary">/&gt;</span>
            </h1>
          </div>
          <div className="loading-bar"></div>
          <span className="loading-text"></span>
        </div>
      ) : null}
    </div>
  );
};

export default LoadingScreen;
