import React, { useContext } from "react"
import { UseData } from "../App"
import Calculations from "../Calculations"
export default function Te(){

    const data =useContext(UseData)
    if(data){return(
        
        
          <div  >
             <Calculations/>
          </div>  
          
          )
        }else{

            return(
                <div>
                    
                </div>
            )
        }
    };
