  import {useState} from "react"
  
 

export default function MyBottone(){
   const [name , setName]=useState("alaa")
   function ButtonClick(){
    if(name==="alaa"){
       setName("ahmed")
    }else{
       setName("alaa")
}
   }

    return(
        <div>
            <button onClick={ButtonClick}>click</button>
            <h1>{name}</h1>
        </div>
    )
};

