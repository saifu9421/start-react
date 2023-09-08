//  export default  function Todo({task,isDone}){
  
//     return (
//         <li>Task:{task}</li>
//     )
// }

//   condotional rrendraing no 1
// export default  function Todo({task,isDone}){
  
//   if(isDone === true){
//     return <li>Finished:{task}</li>
//   }else{
//     return <li>Work one:{task}</li>

//   }
// }

// conditional rendering option 2

 export default  function Todo({task,isDone}){
  
  if(isDone){
    return  <li>Finished:{task}</li>
  }
  return <li>Work one:{task}</li>
}
