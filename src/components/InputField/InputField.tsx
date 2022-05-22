import React from 'react'
import "./InputField.css"
interface Props{
todo:string,
setTodo:React.Dispatch<React.SetStateAction<string>>,
handleAdd:(e:React.FormEvent)=>void,
}
export default function InputField({todo,setTodo, handleAdd}:Props) {
  return (
      <div className='input'onSubmit={handleAdd}>
   <input type="input"
   value={todo}
   onChange={(e)=>setTodo(e.target.value)}
   placeholder='Enter a task' className='input_box'/>
   <button className="input_submit" type="submit">Go</button>
   </div>
  )
}
