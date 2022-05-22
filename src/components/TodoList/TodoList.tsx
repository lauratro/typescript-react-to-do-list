import React from "react"
import "./TodoList.css"
import {Todo} from "./../../model"
import SingleTodo from "./../SingleTodo/SingleTodo"
interface Props{
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
let TodoList: React.FC<Props> = ({todos,setTodos})=>{
    console.log(todos)
return <div className="todos">
    <ul>
        {todos.map(todo=>(
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos ={setTodos} />
        ))}
    </ul>

</div>
}
export default TodoList;