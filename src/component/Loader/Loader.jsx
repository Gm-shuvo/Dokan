import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <TailSpin
        height="60"
        width="60"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
