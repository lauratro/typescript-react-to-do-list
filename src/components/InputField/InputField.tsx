import React from 'react'
import "./InputField.css"
interface Props{
todo:string,
setTodo:React.Dispatch<React.SetStateAction<string>>
}
export default function InputField({todo,setTodo}:Props) {
  return (
      <div className='input'>
   <input type="input" placeholder='Enter a task' className='input_box'/>
   <button className="input_submit" type="submit">Go</button>
   </div>
  )
}
