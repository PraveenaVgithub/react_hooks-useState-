import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

const App= ()=>{
  const [num,setupdate] = useState(0);
  const incNum=()=>{ setupdate(num+1);};
  return(
    <>
    <div className='flexy'>
    <h1>{num}</h1>
    <button className='butto' onClick={incNum}>Click Me</button>
    </div>
    </>
  );
}

export default App;
