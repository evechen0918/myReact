function App() {
    //呼應方法2所以要建議函式1-1
    function sayHi3(){
        alert('Hi3');
    }

    //呼應方法2所以要建議函式1-2
    const sayHi4=()=>{
        alert('Hi4');
    }

    return (
        <>
            {/* 1.事件處理，點下去回跳出東西 */}
            <button onClick={
                //1-1方法一匿名函式寫法
                function () {
                    alert('HELLO1')
                }
            }>打招呼1</button>
            <button onClick={
                //1-2.箭頭函式
                () => {
                    alert('HELLO2')
                }
            }>打招呼2</button>
            {/* 2呼叫函式，被呼叫的函式名稱，後面不可以加上小括號()，否則會立即執行 */}
            <button onClick={sayHi3}>打招呼3</button>
            <button onClick={sayHi4}>打招呼4</button>

        </>
    )
}
export default App