import { useState } from "react";    //使用useState產生
function ChildComponent({count1}){
    return <div>{count1}</div>
}

//建立子元件(元件字首要大寫)
function MyComponent() {
//使用狀態(React叫state(useState))控制變數，因為react已經丟出去了故變成const=useState去改變才可以，裡面寫[變數,改變變數的方法]Count前要加「set]
    const [count, setCount] = useState(0)
    const headleClick = () => {
//使用useState中的方法改變count變數值
        setCount(count + 1)
    }
    return <>
        <button onClick={headleClick}>點擊次數:{count}</button>
        <ChildComponent count1={count}/>
    </>
}


//＊程式進入點，程式碼body部分寫在這邊
function App() {
    return (
        <>
{/* 呼叫子元件，不同子元件之間的狀態state是獨立的*/}
            <MyComponent />  
            <MyComponent />
            <MyComponent />
        </>
    )
}
export default App