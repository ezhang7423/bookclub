import React, { useState, useEffect } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const ismobile = window.innerWidth < 700;
    if (ismobile !== isMobile) setIsMobile(ismobile);

    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 700;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);
  return (
    <div className="main">
      <h1 className={`${isMobile ? "" : "text-9xl"}`}>Welcome home.</h1>

      <style jsx>
        {`
          .main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 80vh;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
