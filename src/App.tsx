import React from 'react';
import InputField from './components/InputField/InputField';

import './App.css';

let App: React.FC = () => {
  return (
    <div className="App">
   <span className="heading">Taskify</span>
   <InputField />
    </div>
  );
}

export default App;
