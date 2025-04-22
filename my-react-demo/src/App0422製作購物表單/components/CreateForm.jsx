import { useState } from "react"
//  建立輸入資料的變數，預設為空值'' 

function CreateForm({addTodo}) {
  const [content, setContent] = useState('');
  const handleSubmit=(e)=>{ 
    e.preventDefault();//e.preventDefault取消網頁預設行為，不然會抓不到資料
    addTodo(content);//增加todo內容
    setContent('')//清空輸入列資料，讓原本在輸入格的內容再抓到資料後消失
    
  }
  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='輸入待辦事項'
        value={content}
        onChange={(e)=>{   //當改變onChange時，觸發event/e事件時，會有一個回傳值
          setContent(e.target.value) //但因為const是一個常數不會變動，所以當內容異動時，需透過setContent這個方法，將e.target.value回傳給content
        }}   
      />
      <button type="submit">加入</button>
    </form>
  )
}

export default CreateForm