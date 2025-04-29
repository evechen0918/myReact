import React, { useState } from 'react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: "./images/img1.JPG" },
    { url: "./images/img2.JPG" },
    { url: "./images/img3.JPG" },
  ];

  return (
    <div style={{
      maxWidth: "100vw",
      height: "100vh",
      margin: "auto"
    }}>
      {/* 圖片 */}
      <div style={{
        backgroundImage: `url(${slides[currentIndex].url})`,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      </div>
    </div>
  );
}

export default App;
