import {useState} from "react"
export default function Myinput(){
const [myInput , setMyInput]=useState("")
    function handelOnChange(event){
    setMyInput(event.target.value)
    }

    return(
        <div>
            <label>my name</label>
            <input value={myInput} onChange={handelOnChange}/>
            <p>{myInput/100}</p>
        </div>
    )
}