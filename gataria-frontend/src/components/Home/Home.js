import React from "react";

function Home() {
  return (
    <>
      <h1
        style={{
          color: "black",
          fontSize: "80px",
          textAlign: "center",
          fontFamily: "serif",
        }}
      >
        Gataria{" "}
        <span role="img" aria-label="dog">
          🐾
        </span>
      </h1>
      <p
        style={{
          color: "black",
          fontSize: "50px",
          textAlign: "center",
          fontFamily: "serif",
        }}
      >
        Te ajudamos doar e adotar um gatinho!!
      </p>
    </>
  );
}

export default Home;
