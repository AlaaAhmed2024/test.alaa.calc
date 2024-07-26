import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
export default function Add(){

const [add , setAdd]=useState({
 netSalary :"" ,
 basicSalary:"",
 phone:""  
});


const navigate= useNavigate();
function handleSumit(event){
    event.preventDefault();
 axios.post("http://localhost:8800/add" ,add)
 .then((res)=>{
navigate("/clients");
console.log(res)
 })
 .catch((err)=>{
    console.log(err) 
 })
}



    return(
        <div className="flex" style={{marginTop:"60px"}} >
    
            <form className="flex-dir" id="loan-form" onSubmit={handleSumit}>
            <input style={{marginTop:"7px"}}  type='number' name="nam"  required onChange={(e)=>setAdd({...add,netSalary :e.target.value})} placeholder="netSalary"/>
                <input style={{marginTop:"7px"}}  type='number' name="num" required onChange={(e)=>setAdd({...add,basicSalary :e.target.value})} placeholder="basicSalary"/>
                <input  style={{marginTop:"7px"}} type='number' name="numb" required onChange={(e)=>setAdd({...add,phone :e.target.value})} placeholder="phone"/>
                <input  style={{marginTop:"7px"}} type="submit"  value="send" name="send"/>
            </form>
        </div>
    )
}