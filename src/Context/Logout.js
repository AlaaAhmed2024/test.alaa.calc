import React, { useState } from "react"
import { createContext } from "react";

// const ShowApp2=createContext()
// function Clik(children){
// const [alaa , setAlaa]=useState(false)
// setAlaa(true) 
// return(
//       <ShowApp2.Provider value={alaa}>
//        {children}
//       </ShowApp2.Provider>  
//       )
    
// }
// ax=66
// const dp =
      
//       {
//             pass:"123456",
//             name:"alaa",
//             email:"alaaelgad",
//             ax,
//       }      


if(window.location.pathname==="/login" ){
    
     var ax= false
}else{
      ax = true
}


const ShowApp=createContext()

 function Logout({children}){
     

    return(
          <ShowApp.Provider value={ax}>
           {children}
          </ShowApp.Provider>  
          )
    };




    export{Logout,ShowApp }
 

    


