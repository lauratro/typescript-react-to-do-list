import React,{useState} from 'react';
import InputField from './components/InputField/InputField';
import {Todo} from "./model"


import './App.css';

let App: React.FC = () => {
  let [todo, setTodo] = useState<string>("");
  let [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent):void=>{
e.preventDefault()
setTodos([...todos,{id: Date.now(),todo:todo, isDone:false}])

  }
  return (
    <div className="App">
   <span className="heading">Taskify</span>
   <InputField todo={todo} setTodo={setTodo} handleAdd ={handleAdd }/>
    </div>
  );
}

export default App;
