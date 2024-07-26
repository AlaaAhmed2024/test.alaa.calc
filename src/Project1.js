import "./Project1.css"
import Modal from "./Model"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash,faUser,faPhone,faEnvelope,faHashtag,faList, faLock} from '@fortawesome/free-solid-svg-icons'
import video from './hvid.f147a847.webm'
import loginlogo from './loginLogo.png'
export default function Project1(){

const [formInputs,setFormInput]=useState({inputName:"",inputPhone:"", inputAge:"",inputSelect:"",inputCheck:false,email:""})
 const[showModdal,setShowModal]=useState(false)
 const [errorMassge ,setErrorMassge]=useState(null)

 const [password ,setPassword]=useState("")
 const [showPassword ,setShowPassword]=useState(false)


function handelChecked(event){
     setFormInput({...formInputs,inputCheck:event.target.checked})
};


const dp =
      
      {
            pass:"123456",
            name:"alaa",
            email:"alaaelgad"
      }



  


function handelCheckDisable(event){
    event.preventDefault()
    setErrorMassge(null)
    
    const { inputPhone ,inputName ,email } =formInputs
     if(password.length < 6 ){
          setErrorMassge("خطاالرقم السري لا يقل عن 6 احرف")
         
        }else if(inputPhone.length!=10){
            setErrorMassge(" خطأ تاكد من رقم الجوال")
       
        }else if(password!=dp.pass){
          setErrorMassge(" خطأ تاكد من رقم السري")
         
      }else if(inputName!=dp.name){
        setErrorMassge(" خطأ تاكد من الاسم")
       
    }else if(email!=dp.email){
      setErrorMassge(" خطأ تاكد من الايميل")
     
  }
      setShowModal(true)
 
     
      if( dp.pass==password &&dp.name==formInputs.inputName && dp.email==formInputs.email){
      var pat="/home"
      window.location.pathname=pat


      }else{
        var pat="/login"
  
      }  
      console.log(pat)

};

const btnIsDisable = formInputs.inputName==''||formInputs.inputPhone==""||password==""

function handelDivClick(){
    if(showModdal==true){
    setShowModal(false)
    }
}


    return(
        <div className="flex " style={{marginTop:"50px"}} onClick={handelDivClick}>
              <video width="auto" height="auto" className="vedio" autoPlay loop src={video} >Your browser does not support the video tag.</video>
                 <div className="video-overlay"></div>
                 <div className='form-login '>
                 <div className="card css-login">
               <div className="ineer-container">
               <div className="form-logo">
                  <div className="form-logo-ineer ">
                    <img src={loginlogo} style={{width:"70%"}} alt="logo form"/>
                  </div>

                 <div className="form-logo">
                    <div className="text-login">
                        <label className="css-login-lable ">رجاء تسجيل الدخول</label>
                        </div>
                        </div>
               </div >

            <div className="form-logo">
            <div className="input-form-login">
                 <form className="flex-dir" id="loan-form" onSubmit={(event)=>{event.preventDefault()}}>
                    <div className="circle">
                    <FontAwesomeIcon icon={faUser} className="photo-user" />
                    </div>
                
                  <hr></hr>
               
                <label>Name</label>
                <div className="flex-password">

                <div className="icon-password" >
                   <FontAwesomeIcon icon={faUser} />
                   </div>

                  <div style={{width:"100%"}}>
                     <input value={formInputs.inputName} onChange={(event)=>{setFormInput({...formInputs , inputName:event.target.value})}}/>
                   </div>
           
                 </div>
                <label>Phone </label>
                <div className="flex-password">
                <div className="icon-password" >
                      <FontAwesomeIcon icon={ faPhone} />
                    </div>
                    <div style={{width:"100%"}}>
                       <input value={formInputs.inputPhone} onChange={(event)=>{setFormInput({...formInputs , inputPhone:event.target.value})}}/>
                    </div>
              
                 </div>

                 <label>email </label>
                <div className="flex-password">
                <div className="icon-password" >
                    <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div style={{width:"100%"}}>
                       <input type="email" value={formInputs.email} onChange={(event)=>{setFormInput({...formInputs , email:event.target.value})}}/>
                    </div>

                 </div>

               <label htmlFor="password">password</label>
                <div className="flex-password">
                   <div className="icon-password">
                     <FontAwesomeIcon icon={faLock} />
                    </div>
                     <div style={{width:"100%"}}>
                        <input type= {showPassword? "text" :"password"}  value={password} placeholder="password" id='password' onChange={(e)=>setPassword(e.target.value)} />
                     </div>

                     <div className="icon-password-show" onClick={()=>setShowPassword(!showPassword)}>
                        {
                         showPassword? <FontAwesomeIcon icon={faEye} />:<FontAwesomeIcon icon={faEyeSlash} />  
                         }
                     </div>
                     </div>
              
         <div> 
               <div style={{display:"inline-block" ,width:"100%"}}>
               <button className={btnIsDisable? "disabled" :""} disabled={btnIsDisable} onClick={handelCheckDisable} id="submit-loan-btn" style={{width:"100%" , marginRight:"0"}}>الدخول</button>
               </div> 

          </div>
            </form>
           


            <Modal isVisble={showModdal} errorMassage={errorMassge} />
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}