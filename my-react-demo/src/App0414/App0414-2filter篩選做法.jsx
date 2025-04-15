function Component() {
    return <h1>React</h1>
}
function App() {
    //陣列的內容可以是屬性、方法、元件
    //同一陣列中，key的屬性不可重複

    //建立陣列一
    const listItem = [
        <Component key='0' />,
        <Component key='1' />

    ]
    //建立陣列二，找出某商品資料
    const listBooks = [
        { bookName: 'HTML', id: 'book1' },
        { bookName: 'CSS', id: 'book2' },
        { bookName: 'JavaScript', id: 'book3' },
        { bookName: 'React', id: 'book4' },
    ]

    //實際運用！！！過濾出陣列中，除了CSS的書本其他不要
    const filterBooks = listBooks.filter((book) => {
        //1.檢查書本名稱若不是CSS則保留
        if (book.bookName != 'CSS') {
            return true
        }

    })
    return (
        <>
            {/*使用陣列一 */}
            {listItem}
            <hr />
            {/*使用陣列二：使用MAP方法 */}
            {
                listBooks.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }
            <hr />
            {/* 實際運用！！！顯示過濾後的資料 */}
            {
                filterBooks.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }
        </>
    )
}
export default App