import { useState ,useEffect} from "react"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash,faUser,faPhone,faEnvelope,faHashtag,faList, faLock} from '@fortawesome/free-solid-svg-icons'
import './registr.css'
import '../Project1.css'
export default function Register(){
const [showPassword ,setShowPassword]=useState(false)
const [showConfirmPassword ,setShowConfirmPassword]=useState(false)

const [action , setAction]=useState("Sign Up")

const [forgot , setForget]=useState(false)
    const [data , setData] =useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        confirmPassword:""
    })
    
    function handleSubmit(e){
        e.preventDefault()
      

            const data2= {
      name :data.name,
        email:data.email,
         phone:data.phone,
        password:data.password,
        confirm_password:data.confirmPassword,
       
      }


        axios.post('http://localhost:3003/register',
            {
                name :data.name,
                  email:data.email,
                   phone:data.phone,
                  password:data.password,
                  confirm_password:data.confirmPassword,
                 
                }
            
           
        ).then(
            res=>{
              console.log(res)
             }
       ).catch(
            err=>{
                console.log(err)
            }
        )
 

      console.log(data)
    }


  const[sendEmail , setSendEmail]=useState("")
const btnIsDisable = data.name==''||data.phone==""||data.email==""||data.password==""||data.confirmPassword==""
const btnIsDisableSendEmail = sendEmail==''
const btnIsDisable2= data.name==''||data.password==""

const  handleInput =(event)=>{
    setData({...data , [event.target.name]:[event.target.value]})
}


const [diaplay, setDisplay]= useState("display-none")
const hangleSendEmail =()=>{
   
        setDisplay('p-red')

     
    
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




 if(forgot===true){
return(
      <div className="form-group" >
                <label style={{color:"black"}} htmlFor="email">Email</label>
                <div className="flex-password">
                <div className="icon-password" >
                    <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div style={{width:"100%"}}>
                <input  name="email" id="email" type="email" className="form-control" placeholder="Email" value={sendEmail} onChange={(e)=>setSendEmail(e.target.value)} />
            </div>

            </div>
            <div className={diaplay}>
                <p>{sendEmail==""?"email requird":""}</p>
            </div>
            <div className="submit-container"> 
            <div>
            <button className="submit gray back-btn" onClick={()=>setForget(false)} >Back</button>
            </div> 
           
            <div>
            <button className={btnIsDisableSendEmail? "disabled submit" :"submit gray back-btn"} disabled={btnIsDisableSendEmail} onClick={hangleSendEmail}>Send</button>
           </div> 
           </div> 
           <div className={diaplay}>
            <p>{" go to emali" +" ' "+ sendEmail + " ' "+"and Back inter password" }</p>
            <span style={{color:"green",fontWeight:"500" }}>{getRandomNumber(1000,9999)}</span>

           </div>
         </div>
         
)
 }else{

   
    return(
        
        <form onSubmit={handleSubmit} >
          <div className="header">
            <h3>{action}</h3>
            <div className="underline"></div>
            </div>
                <div className="form-group ">
                    <label  htmlFor="name"> Name</label>
                <div className="flex-password">

                   <div className="icon-password"  >
                       <FontAwesomeIcon icon={faUser} />
                   </div>
                   <div style={{width:"100%"}}> 
                      <input name="name" id="name" type="text" className="form-control" placeholder=" Name" value={data.name} onChange={(event)=>{setData({...data , name:event.target.value})}}  />
                    </div>    
             </div>
             </div>
           

      
   
      {(action==="Login")? <div></div>: 
      
            <div className="form-group">
            <label  htmlFor="phone">Phone</label>
            <div className="flex-password">

        <div className="icon-password" >
        <FontAwesomeIcon icon={ faPhone} />
        </div>
        <div style={{width:"100%"}}> 
            <input name="phone" id="phone" type="text" className="form-control" placeholder="Phone" value={data.phone} onChange={(event)=>{setData({...data , phone:event.target.value})}}  />
        </div>
        </div>
   </div>
      
      
      
      }

           
      {(action==="Login" )?  <div></div>: 
      

      <div className="form-group">
                <label  htmlFor="email">Email</label>
                <div className="flex-password">
                <div className="icon-password" >
                    <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div style={{width:"100%"}}>
                <input name="email" id="email" type="email" className="form-control" placeholder="Email" value={data.email} onChange={(event)=>{setData({...data , email:event.target.value})}} />
            </div>
            </div>
             </div>
      
      
      }
            
           



            <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="flex-password">
                  <div className="icon-password">
                     <FontAwesomeIcon icon={faLock} />
                   </div>
                   <div style={{width:"100%"}}>
                    <input name="password" id="password" type= {showPassword? "text" :"password"} value={data.password} className="form-control" placeholder="Password" onChange={(event)=>{setData({...data , password:event.target.value})}}  />
                    </div>
                    <div className="icon-password-show" onClick={()=>setShowPassword(!showPassword)}>
                        {
                         showPassword? <FontAwesomeIcon icon={faEye} />:<FontAwesomeIcon icon={faEyeSlash} />  
                         }
                     </div>
                     </div>
            </div>
          


              
            {(action==="Login")? <div></div>:
            
            <div className="form-group">
              
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="flex-password">
              <div className="icon-password">
                 <FontAwesomeIcon icon={faLock} />
               </div>
               <div style={{width:"100%"}}>
                <input name="confirmPassword" id="confirmPassword" type= {showConfirmPassword? "text" :"password"} value={data.confirmPassword} className="form-control" placeholder="Confirm Password" onChange={(event)=>{setData({...data , confirmPassword:event.target.value})}}  />
                </div>
                <div className="icon-password-show" onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>
                    {
                     showConfirmPassword? <FontAwesomeIcon icon={faEye} />:<FontAwesomeIcon icon={faEyeSlash} />  
                     }
                 </div>
                 </div>
        </div>

            
            }


            {(action==="Sign Up")? <div></div>: 
            
            <div className="forgot-password">Forgot password ?<span onClick={()=>{setForget(true)}}>Clik Here!</span></div>
            }
            
            <div> 
            <div style={{display:"inline-block" ,width:"100%"}}>
            <button className={btnIsDisable2? "disabled btn" :"btn-primary btn"} disabled={btnIsDisable2}  style={{width:"100%" , marginTop:"20px"}}>{action}</button>
           </div> 

           <div className="submit-container"> 
            <div>
            <button className={(action==="Login")? "submit gray": "submit" } onClick={()=>setAction("Sign Up")} >Sign Up</button>
            </div> 
           
            <div>
            <button className={(action==="Sign Up")?"submit gray" : "submit" } onClick={()=>setAction("Login")}  >Login</button>
           </div> 
           </div> 
         

        </div> 
        </form>
       
    )
}
}

















