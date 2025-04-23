import React, { useState } from 'react'
import CreateForm from './CreateForm'
import Todo from './Todo'

function TodoWrapper() {
  const [todos, setTodos] = useState([
    { content: '停車費', id: Math.random(), isCompleted: false, isEdit: false },
    { content: '對發票', id: Math.random(), isCompleted: false, isEdit: false }
  ]) //因為有很多todo(輸入的東西)=todos

  //建立加入新的輸入todo內容，是一個函式
  const addTodo = (newcontent) => {
    setTodos([...todos, { content: newcontent, id: Math.random(), isCompleted: false, isEdit: false }])  //加上...＝保留原本資料
  }

  //建立刪除todo函式(isCompleted)
  //第一步：傳入被刪除id
  const delTodo = (id) => {
    setTodos(todos.filter((todo) => {// 第二步：使用filter保留不被刪除的id
      return todo.id !== id  //!==不等於，如果不等於，就保留下來
    }))
  }
  //建立三元計算式，是或不是，「條件式？{true的程式}：false的程式>>>! 是not的意思
  const toggleCompleted = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    }))
  }

  //建立編輯todo函式(isEdit)
  //第一步：傳入被編輯id
  const toggleIsEdit = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
    }))
  }
  //步驟二：修改後會異動完成(content和isEdit會更改)
  //content>新的修改內容
  //isEdit>改為false(更改時會是true)
  const editTodo = (id, newcontent) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? { ...todo, content:newcontent, isEdit:false} : todo
    }))
  }


  //會顯示在createform中，每個的元件
  return (
    <div className='wrapper'>
      <h1>Eveの待辦事項</h1>
      {/* 藍色addTodo是CreateForm的屬性 */}
      <CreateForm addTodo={addTodo} />
      {
        todos.map((todo) => {
          return <Todo
            todo={todo}
            key={todo.id}
            delTodo={delTodo}
            toggleCompleted={toggleCompleted}
            toggleIsEdit={toggleIsEdit}//修改內容
            editTodo={editTodo}//修改後內容要傳出
          />   //tododata是Todo1的屬性，正常會寫todo跟元件一樣，todo3是從map來的
        })
      }
    </div>
  )
}

export default TodoWrapper