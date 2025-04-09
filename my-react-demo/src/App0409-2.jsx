import { useState } from "react"
//建立元件(字首名稱大寫)
function Card({ person }) {
    //解構資料
    const { name, age } = person
    return (
        <div className="card">
            <div className="card-body">
                {/* Hi, React */}
                Hi,{name}今年{age}歲
            </div>

        </div>
    )
}

function App() {
    //取出特定值，作為變數
    //const person = {
    //    name: 'Eve',
    //    age: '12',
    // }

    //1.取出值，一般寫法
    //const name=person.name;
    //const age=person.age;
    //console.log(name,age)

    //2-1.物件解構
    //const { name, age } = person;
    //console.log(name, age)

    //2-2.物件解構
    const [person, setPerson] = useState({
        name: 'Eve',
        age: '12'
    }

    )

    return (
        <>
            {/* 第一個person：元件屬性 */}
            {/* 第二個person：變數 */}
            <Card person={person}></Card>
            <Card person={person} />
        </>
    )
}
export default App




const data = {
    s1: {
        id: 's001',
        subject: 'HTML',
        score: '100',
    },
    s2: {
        id: 's002',
        subject: 'HTML',
        score: '99',
    },
    s3: {
        id: 's003',
        subject: 'HTML',
        score: '98',
    }
}

//解構s1，展開s2,s3
const { s1, ...other } = data
console.log(s1)
console.log(other)

//解構物件中(s2)的物件(id,subject,score)
const { id, subject, score } = s1
console.log(id,subject,score)