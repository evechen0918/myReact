import React, { useEffect, useState } from 'react';
import { LuArrowBigLeftDash } from "react-icons/lu";
import { LuArrowBigRightDash } from "react-icons/lu";

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { url: "./img1.jpg" },
        { url: "./img2.jpg" },
        { url: "./img3.jpg" },
    ];
    useEffect(() => {
        const autoplay = setInterval(() => {
            // 第一步：設定每隔1秒(1000ms)換下一張
            nextSlide();
        }, 3000)
        //第二步：釋放記憶體
        return () => clearInterval(autoplay);
    }, [currentIndex]);
    //下一張
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1)) //編號0，第一張位置
    }
    //上一張
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
    }

    //  第三步：按鈕控制寫出箭頭函式
    const Arrow = ({ direction, onClick }) => {
        <div style={{
            position: "absolute",
            top: "50%",
            cursor: "pointer",
            color: "#fff",
            [direction]: "20px",
        }}>
            {
                direction === "left" ? (
                    <LuArrowBigLeftDash onClick={onClick} size={50} />
                ) : (
                    <LuArrowBigRightDash onClick={onClick} size={50} />
                )
            }

        </div>
    }


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
            {/* 上一張 */}
            <Arrow direction="left" onClick={prevSlide} />
            {/* 下一張 */}
            <Arrow direction="left" onClick={nextSlide} />
        </div>
    );
}

export default App;
