import React from 'react'
import "./InputField.css"

export default function InputField() {
  return (
      <div>
   <input type="input" placeholder='Enter a task' className='input_box'/>
   <button className="input_submit" type="submit">Go</button>
   </div>
  )
}
