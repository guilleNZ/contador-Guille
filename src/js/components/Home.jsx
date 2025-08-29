import React from "react";

const SecondsCounter = ({ seconds }) => {
  const formatted = ("000000" + seconds).slice(-6);

  return (
    <div className="counter-container d-flex justify-content-center bg-dark p-3 rounded">
      <div className="digit bg-secondary text-white mx-1 p-3 rounded">⏰</div>
      {formatted.split("").map((d, i) => (
        <div key={i} className="digit bg-secondary text-white mx-1 p-3 rounded">
          {d}
        </div>
      ))}
    </div>
  );
};

const Home = ({ seconds }) => {
  return (
    <div className="text-center">
      <SecondsCounter seconds={seconds} />
    </div>
  );
};

export default Home;
