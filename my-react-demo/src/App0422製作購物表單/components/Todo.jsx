import React from 'react'
import { MdDelete, MdEdit } from "react-icons/md";
//製作展示列表
//方法：一使用props接收元件屬性，props本身是一個物件
// function Todo(props) {
//   return (
//     <div className='todo'>
//         <p>{props.tododata}</p>
//     </div>
//   )
// }

//方法二：將props物件解構
function Todo({ todo, delTodo,toggleCompleted }) {
    return (
        <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
            <div>
                {/* 增加修改icon */}
                <MdEdit style={{ cursor: 'pointer' }} />
                {/* 增加刪除icon */}
                <MdDelete
                    onClick={() => { delTodo(todo.id) }}
                    style={{ cursor: 'pointer', marginLeft: '5px' }} 
                    />
            </div>
        </div>
    )
}
export default Todo