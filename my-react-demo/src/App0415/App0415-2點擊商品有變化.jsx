import { useState } from 'react';
//  第一步：將照片導入
import coffee1 from './image/coffee1.jpeg';
import coffee2 from './image/coffee2.jpeg';
import coffee3 from './image/coffee3.jpg';
function App() {
    //第二步：寫出react的反應，使用useState才以利後續更動 const=useState(0)>這是記憶在第幾張，目前第一張。()就是空值
    const [currentImg, setCurrentImg] = useState()  //setCurrentImg方法，去改變currentImg這個變數
    //第三步：使用陣列列出有多少圖片，記得將照片導入寫在最上面
    const arrPhotos = [coffee1, coffee2, coffee3];
    return (
        <>
            <div>
                {/* 第四步：將列出的照片使用map方法map(照片,索引) */}
                {
                    arrPhotos.map((photo, index) => {       //使用map一定要有key
                        return (
                            <img
                                key={index} src={photo} alt='' width={100}  //onClick當點擊時更換
                                onMouseOver={() => setCurrentImg(index)} //onMouseOver當滑鼠碰到時，產生一個事件e=>透過setCurrentImg這個方法，取得目前陣列中的index然後會回傳到urrentImg
                                style={{ cursor: "pointer" }} //產生按鈕形狀是手形工具
                            />
                        )
                    })
                }
            </div>
            {/* 圖片放大區 */}
            <div>
                {/* currentImg是讀取setCurrentImg(index) */}
                <img src={arrPhotos[currentImg]} alt="" width={300} />
            </div>
            {/* 圖片縮小區 */}
            <div>
                <img src={arrPhotos[currentImg]} alt="" width={50} />
            </div>
        </>
    )
}
export default App