
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import React, {useState} from 'react';
import AddTodo from './MyComponents/AddTodo';


function App() {
  const onDelete=(todo)=>{
    console.log("i am ondelete",todo);


    setTodos(todos.filter((e)=>{;
  return e!==todo;
}))} 
 
const addTodo =(title,desc)=>{
  console.log("i am  adding this todo",title,desc)
 let sno=todos[todos.length-1].sno+1
const myTodo={
  sno:sno,
  title:title,
  desc:desc
} 


console.log(myTodo)
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
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
     
      
      <Footer/>
    
    
       </div>
      
      
      
      

    )
  };
  

export default App;
