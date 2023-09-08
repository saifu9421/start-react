import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Device name="laptop" price = "55000"></Device>
      <Device name = "mobile" price = "17000"></Device>
      <Device name ="watch" price= "3000"></Device>
      <Person></Person>
      <Student grade = "7" score ="99"></Student>
      <Student grade={12} score={85}></Student>
       <Student></Student>
      <Developer></Developer> */}
      <Todo task="Learn  react" isDone={true}></Todo>
      <Todo task="Explore core Concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true} ></Todo>
      <Todo task="Explore core Concept"></Todo>
    </>
  )
}
   function Device(props){
     console.log(props);
    return <h2>This Device:{props.name} price:{props.price}</h2>
   };

  function Person(){
    const age =  25;
      const money =  20;
      const person = {
        name: 'saif',
            age :12,
      };

      return <h3>

        I am{person.name} a person with age:{age+money}
      </h3>
  }

const {grade , score} = {grade: '7', score: '99'};

  function Student({grade=1,score = 0}){
     console.log(grade,score);
       
    return (
     <div className='student'>
        <h3>
          This is a student 
        </h3>
        <p>
        class:{grade}

        </p>
        <p>score:{score}</p>
    </div>
    )
  }
  function Developer(){
     const developerStyle = {
         margin:'20px',
         padding:"20px",
        border:"2px solid purple",
           borderRadius:'10px',
     };

    return (
    <div style={
      {
        margin:'20px',
        padding:"20px",
       border:"2px solid purple",
          borderRadius:'10px',
    }
    }>
      <h5>
       Devo Devo 
      </h5>
      <p>Coding: </p>
    </div>

    )
  }
export default App
