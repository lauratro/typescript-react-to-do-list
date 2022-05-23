import React from "react"
import "./TodoList.css"
import {Todo} from "./../../model"
import SingleTodo from "./../SingleTodo/SingleTodo"
import { Droppable } from "react-beautiful-dnd"
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
    <Droppable droppableId="TodosList">
{(provided)=>(
    <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
   <span className="todos__heading">
       Active Tasks
   </span>
   {todos.map((todo,index)=>(
            <SingleTodo index={index} todo={todo} key={todo.id} todos={todos} setTodos ={setTodos} />
        ))}
 </div>
)}

 
 </Droppable>
 <Droppable droppableId="CompletedTodosList">
     {(provided)=>(
 <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}> 
 <span className="todos__heading">
      Completed task
   </span>
   {todos.map((todo,index)=>(
            <SingleTodo index={index} todo={todo} key={todo.id} todos={completedTodos} setTodos ={setCompletedTodos} />
        ))}

</div>
     )}
 
</Droppable>
</div>)
}
export default TodoList;