//子元件
function MyComponent(props) {  //props是一個屬性
    console.log(props)
    //使用大括號{props.a}

    //執行父元件傳送過來的c屬性函式
    props.c()//也可以寫在return 但要加上{}

    return <>
        <div>我是子元件，帶有主元件傳遞過來的屬性為「{props.a}」</div>
        <div>我是子元件，帶有主元件傳遞過來的屬性為「{props.b}」</div>
        {props.c()}
    </>
}
//子元件
//porps是物件，可以使用解構物件
function MyComponent2({a, b, c}) {
    //呼叫c方法
    c()
    return <>
        <div>第一個屬性{a}</div>
        <div>第二個屬性{b}</div>
        <div>第二個屬性{c()}</div>
    </>
}
//父元件
function App() {
    return (
        <>
            {/* 回調函式=>callback function */}
            <MyComponent
                a="我是屬性a"
                b="我是屬性b"
                c={() => { console.log("我是屬性c") }}
            />

            <MyComponent2
                a="我是屬性a"
                b="我是屬性b"
                c={() => {console.log("我是屬性c")}}
            />
        </>
    )
}
export default App
//父元件
