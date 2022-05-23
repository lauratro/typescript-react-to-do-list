import React,{useState} from 'react';
import InputField from './components/InputField/InputField';
import {Todo} from "./model"
import TodoList from './components/TodoList/TodoList';


import './App.css';

let App: React.FC = () => {
  let [todo, setTodo] = useState<string>("");
  let [todos, setTodos] = useState<Todo[]>([])
  let [completedTodos, setCompletedTodos]=useState<Todo[]>([])
  const handleAdd = (e:React.FormEvent):void=>{
e.preventDefault()
if(todo){
setTodos([...todos,{id: Date.now(),todo:todo, isDone:false}])
setTodo("")

}

  }
 
  return (
    <div className="App">
   <span className="heading">Taskify</span>
   <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
<TodoList todos ={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
    </div>
  );
}

export default App;
