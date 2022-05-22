import React from "react"
import {Todo} from "./../../model"
interface Props{
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
let TodoList: React.FC<Props> = ({todos,setTodos})=>{
    console.log(todos)
return <div>
    <ul>
        {todos.map(t=>(
            <li key={t.id}>{t.todo}</li>
        ))}
    </ul>

</div>
}
export default TodoList;