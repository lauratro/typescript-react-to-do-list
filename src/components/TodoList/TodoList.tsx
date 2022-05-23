import React from "react"
import "./TodoList.css"
import {Todo} from "./../../model"
import SingleTodo from "./../SingleTodo/SingleTodo"
interface Props{
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos:Todo[],
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
let TodoList: React.FC<Props> = ({todos,setTodos,completedTodos,setCompletedTodos})=>{
    console.log(todos)
return(
<div className="container">
 <div className="todos">
   <span className="todos__heading">
       Active Tasks
   </span>
   {todos.map(todo=>(
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos ={setTodos} />
        ))}
 </div>
 <div className="todos remove"> 
 <span className="todos__heading">
      Completed task
   </span>
   {todos.map(todo=>(
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos ={setTodos} />
        ))}

</div> 
</div>)
}
export default TodoList;