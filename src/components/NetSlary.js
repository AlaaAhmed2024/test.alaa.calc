import { useState } from "react"
import "../Project1.css"
import Modal from "../Model";
import "./netSalary.css"

export default function NetSalary(){
 
  const [calulationInputs,setcalulationInputs]=useState({
          total:"",
          basicSalary:"",
          job:"",
          houssing:"",
          installment:"0",
          });
 const [calulationOutputs,setCalulationOutputs]=useState({
            netSalary:"",
            netName :"",
          })

          const[showModdal,setShowModal]=useState(false)
          const [errorMassge ,setErrorMassge]=useState(null)
  
function calculation(event){
   
 if(calulationInputs.job==="1"){
  var netSalaryCalculation =calulationInputs.total - calulationInputs.basicSalary*.09 - calulationInputs.installment
  setCalulationOutputs({...calulationOutputs,
    netSalary:new Intl.NumberFormat().format(netSalaryCalculation.toFixed(0)),
netName :"الراتب الصافي"
  });

 }else if(calulationInputs.job==="2"){
    var netSalaryCalculation =calulationInputs.total - calulationInputs.basicSalary*.1 -calulationInputs.houssing*.1 - calulationInputs.installment
            
    setCalulationOutputs({...calulationOutputs,
        netSalary:new Intl.NumberFormat().format(netSalaryCalculation.toFixed(0)),
    netName :"الراتب الصافي"
      });
}else {
var netSalaryCalculation =calulationInputs.total - calulationInputs.basicSalary*.0975 - calulationInputs.installment
setCalulationOutputs({...calulationOutputs,
    netSalary:new Intl.NumberFormat().format(netSalaryCalculation.toFixed(0)),
netName :"الراتب الصافي"
  });    
  }


  event.preventDefault()

setErrorMassge(null)

const { total ,basicSalary,houssing,installment} =calulationInputs
 if(total.length < 4 || total.length >5){
      setErrorMassge("خطأ فضلا التاكد من الراتب الاجمالي")

    }else if(basicSalary.length<4 ||basicSalary.length>5){
      setErrorMassge("خطأ تاكد من الراتب الاساسي ")

    }else if(basicSalary>=total){
        setErrorMassge("خطأ تاكد من الراتب  الاجمالي او الاساسي ")
 
      }else if(houssing.length>4){
        setErrorMassge(" تاكد من بدل السكن  ")

      }else if(installment.length>4){
        setErrorMassge(" تاكد من قسط التسليف ")

       
    }
 


  setShowModal(true)



}




   const btnIsDisable = calulationInputs.total==''||calulationInputs.basicSalary==""


   function handelDivClick(){
    if(showModdal==true){
    setShowModal(false)
    }
}


    return(

        <div className="flex net-salary" style={{marginTop:"0px"}} onClick={handelDivClick}>
            <form className="flex-dir" id="loan-form" onSubmit={(event)=>{event.preventDefault()}}>
              <div style={{width:"100%" , direction:"rtl"}}>
                <label>  الوظيفه</label>
                <select value={calulationInputs.job} onChange={(event)=>{setcalulationInputs({...calulationInputs, job:event.target.value})}}>
                 <option value="1"> مدني /عسكري</option>
                 <option value="2">قطاع خاص</option>
                 <option value="3">حكومي ساب</option>
        
               </select>
               </div>

    
               <div style={{width:"100%" , direction:"rtl"}}>
                <label>الراتب الاجمالي</label>
                <input type="number" value={calulationInputs.total} onChange={(event)=>{setcalulationInputs({...calulationInputs , total:event.target.value })}}/>
                </div>


                <div style={{width:"100%" , direction:"rtl"}}>
                <label>الراتب الاساسي</label>
                <input type="number" value={calulationInputs.basicSalary} onChange={(event)=>{setcalulationInputs({...calulationInputs , basicSalary:event.target.value })}}/>
                </div>


                <div style={{width:"100%" , direction:"rtl"}}>
                <label> بدل السكن</label>
                <input type="number" value={calulationInputs.houssing} onChange={(event)=>{setcalulationInputs({...calulationInputs , houssing:event.target.value })}}/>
                </div>

                
                <div style={{width:"100%" , direction:"rtl"}}>
                <label>  بنك التسليف</label>
                <input type="number" value={calulationInputs.installment} onChange={(event)=>{setcalulationInputs({...calulationInputs , installment:event.target.value })}}/>
                </div>
      

                <div style={{width:"100%" , direction:"rtl", marginTop:"15px" }} className={(calulationOutputs.netSalary==0)? "":"bg-net"}>
                  <label style={{marginRight:"20px"}}> {calulationOutputs.netName} </label>
                <p className="net-salary-p">{calulationOutputs.netSalary}</p>
                </div>

                <div>
                <button className={btnIsDisable? "disabled" :""} disabled={btnIsDisable} onClick={calculation} id="submit-loan-btn2" style={{width:"100%"}}>calculation</button>
              </div>
              </form>
              <Modal isVisble={showModdal} errorMassage={errorMassge} />
            </div>
       
    )




}


