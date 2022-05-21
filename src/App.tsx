import React,{useState} from 'react';
import InputField from './components/InputField/InputField';

import './App.css';

let App: React.FC = () => {
  let [todo, setTodo] = useState<string>("");
  return (
    <div className="App">
   <span className="heading">Taskify</span>
   <InputField />
    </div>
  );
}

export default App;
