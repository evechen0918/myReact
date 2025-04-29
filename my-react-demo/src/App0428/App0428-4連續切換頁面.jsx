import { useState } from "react";

export default function PageSwitcher() {
  const [now, setNow] = useState(1);

  const changePage = (move) => {
    let newNow = now + move;
    if (newNow < 1) newNow = 1;
    if (newNow > 3) newNow = 3;
    setNow(newNow);
  };
  return (
    <div className="page">
      {/* 頁面內容 */}
      {now === 1 && <div>第一頁</div>}
      {now === 2 && <div>第二頁</div>}
      {now === 3 && <div>第三頁</div>}

      {/* 按鈕 */}
      <div className="btn">
        {now > 1 && (
          <button
            onClick={() => changePage(-1)}
            className="btnNext"
          >
            上一頁
          </button>
        )}
        {now < 3 && (
          <button
            onClick={() => changePage(1)}
            className="btnPre"
          >
            下一頁
          </button>
        )}
      </div>
    </div>
  );
}