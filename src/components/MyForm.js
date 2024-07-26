import {useState} from "react"

export default function MyForm(){



// const [inputName , setInputName]=useState("")
// const [inputEmail , setInputEmail]=useState("")
const [formInputs , setFormInput] = useState({name :"" , email:"" , isOk:false , inputSelect:""})
console.log(formInputs)

function handelChecked(event){
 
    setFormInput({...formInputs,isOk:event.target.checked})

};

    return(
  <form onSubmit={(event)=>{event.preventDefault()}}  >
    <label>name</label>
    {/* <input value={inputName} onChange={(event)=>{setInputName(event.target.value)}}/> */}
    {/* <input value={formInputs.name} onChange={(event)=>{setFormInput({name:event.target.value , email:formInputs.email})}}/> */}
    <input value={formInputs.name} onChange={(event)=>{setFormInput({...formInputs , name:event.target.value})}}/>
    <hr></hr>

    <label>Email</label>
    {/* <input value={inputEmail} onChange={(event)=>{setInputEmail(event.target.value)}}/> */}
    {/* <input value={formInputs.email} onChange={(event)=>{setFormInput({email:event.target.value , name :formInputs.name})}}/> */}
    <input value={formInputs.email} onChange={(event)=>{setFormInput({...formInputs,email:event.target.value })}}/>
    <hr></hr>
     <label>are you ok</label>
     <input type="checkbox"  checked={formInputs.isOk}  onChange={handelChecked}  />

    <hr></hr>

<label>select : </label>
<select value={formInputs.inputSelect} onChange={(event)=>{setFormInput({...arguments, inputSelect:event.target.value})}} >
    < option>case1</option>
    < option>case2</option>
    < option>case3</option>

</select>

    <hr></hr>


    <hr></hr>

    <button type="">Submit</button>
  </form>
    )
};