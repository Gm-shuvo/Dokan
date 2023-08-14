import React from "react";
import { CircularProgress } from "@material-ui/core";

const GlobalLoader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000, // Set a higher z-index to ensure the loader is on top
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default GlobalLoader;
  