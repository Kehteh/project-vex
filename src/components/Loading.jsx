import React from "react";
import { Player } from "@lottie-react/lottie-react";
import animationData from '../lotties/LoadingStars.json';

const Loading = () => {
  return (
    <div className="loading-container">
      <Player
        autoplay
        loop
        src={loadingAnimation}
        style={{ height: "200px", width: "200px" }}
      />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;