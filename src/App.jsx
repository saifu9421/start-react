import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './singer'

function App() {
   const actors = ['saif','sakib','Asif','raj','jasim','salman Shah'];

   const singers = [
        {
          id:1,
          name:"Dr.Mahfuzur Rahman",
          Age:40,
        },
        {
          id:2,
          name:"Eva Rahman",
          Age:30,
        },
        {
          id:3,
          name:"Shuvro Dev",
          Age:46,
        },
        {
          id:4,
          name:"Pritom",
          Age:28,
        },
   ];

  return (
    <>
      <h1>Vite + React</h1>
     {
        singers.map(singer => <Singer singer={singer} ></Singer>)
     }

       <Actor name={"saif"}></Actor>
      {
  actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Device name="laptop" price = "55000"></Device>
      <Device name = "mobile" price = "17000"></Device>
      <Device name ="watch" price= "3000"></Device>
      <Person></Person>
      <Student grade = "7" score ="99"></Student>
      <Student grade={12} score={85}></Student>
       <Student></Student>
      <Developer></Developer> */}
    
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
