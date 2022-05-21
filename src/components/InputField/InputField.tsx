import React from 'react'
import "./InputField.css"

export default function InputField() {
  return (
      <div className='input'>
   <input type="input" placeholder='Enter a task' className='input_box'/>
   <button className="input_submit" type="submit">Go</button>
   </div>
  )
}
