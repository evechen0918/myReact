import { Link } from "react-router-dom"

function Narbar() {
    return (
        <div>
            <ul>
                {/* 正常寫法
                <li><a href="">首頁</a></li>
                <li><a href="">關於我</a></li>
                <li><a href="">最新消息</a></li>
                 */}

                {/* React寫法，to到根目錄，要這樣寫*/}
                <li>
                    <Link to="/">首頁</Link>
                </li>
                <li>
                    <Link to="/about">關於我</Link>
                </li>
                <li>
                    <Link to="/news">最新消息</Link>
                </li>
            </ul>
        </div>
    )
}
export default Narbar