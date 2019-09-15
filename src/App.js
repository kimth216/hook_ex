import React ,{Component, useState}from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const updateEmail = e =>{
    const {target : {value}} = e;
    console.log('updateEmail : ',value );
    setEmail(value);
  };

  return (
    <>
      {count}
      <button onClick={ () => setCount(count + 1)}> + </button>
      <button onClick={ () => setCount(count - 1)}> - </button>
      <input placeholder ="E-mail" value={email} onChange={updateEmail}/>
    </>
  )
};

export default App;
