
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import React, {useState} from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("i am ondelete",todo);
 
setTodos(todos.filter((e)=>{
  return e!==todo;
}))
 
 
 
  }

  
  const [todos,setTodos]=useState([
    {
      sno:1,
      title:"Wake up",
      desc:"go to kitchen and make hot water"

  },
  {
    sn2:2,
    title:"Make  some breakfast",
    desc:"eat and workout"

  },
  {
    sn3:3,
    title:"grab your guitar",
    desc:"practise 1 hr "
  },
  {
    sn4:4,
    title:"open laptop",
    desc:"practise coding for 2 hours"

  }

  ])
    return (
      <div>
    
      <Header title="My Todos List" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    
    
       </div>
      
      
      
      

    )
  };
  

export default App;
