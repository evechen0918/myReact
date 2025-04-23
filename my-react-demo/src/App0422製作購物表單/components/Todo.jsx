import React from 'react'
import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from './EditForm';
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
function Todo({ todo, delTodo, toggleCompleted, toggleIsEdit,editTodo }) {
    return (
        todo.isEdit ? <EditForm todo={todo} editTodo={editTodo}/> :
            <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
                <div>
                    {/* 增加修改icon */}
                    <MdEdit
                        onClick={() => { toggleIsEdit(todo.id) }}
                        style={{ cursor: 'pointer' }} />
                    {/* 增加刪除icon */}
                    <MdDelete
                        onClick={() => { delTodo(todo.id) }}
                        style={{ cursor: 'pointer', marginLeft: '5px' }} //滑鼠移過去，會有小手符號顯示
                    />
                </div>
            </div>
    )
}
export default Todo