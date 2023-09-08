export default function Singer({singer}){
   console.log(singer)
   return (
     <div>
        <h3>
                singer:{singer.name}
                <p>
                    Age:{singer.Age}
                </p>
        </h3>
     </div>
         
   )
}