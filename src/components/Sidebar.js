import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faHouse,faCalculator,faRightToBracket,faUsers,faChartColumn,faMoneyBill,faPlus,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useState,useContext } from "react"
import im from "../logo3.png"
import Modal from "../Model"

import "../Project1.css"








export default function Sidebar({children}){
 
    

    const [isOpen , setIsOpen]=useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }

    const [vis,setvis]= useState(false)
    const [mes,setMes]= useState(null)
 function alaa(){
   
    setvis(true)
    setMes("تم تسجيل الخروج")
    setTimeout(() => {
        // var x= sessionStorage.getItem(itemName);
        // sessionStorage.removeItem(formInputs.inputName, password );
        window.location.reload()
    }, 1500);
 
    
    
    
 }

const menuItem=[
    {
        path:"/start",
        name:"المعلومات",
        icon:<FontAwesomeIcon icon={faHouse} />,
    },

    {
        path:"/about",
        name:"الحسبة",
        icon:<FontAwesomeIcon icon={faCalculator} />,
    },

    {
        path:"/login",
        name:"الدخول",
        icon:<FontAwesomeIcon icon={faRightToBracket} />,
    },

{
        path:"/clients",
        name:"العملاء",
        icon:<FontAwesomeIcon icon={faUsers} />,
    },

{
        path:"/profit",
        name:"الفوائد",
        icon:<FontAwesomeIcon icon={faChartColumn} />,
    },

{
        path:"/plus",
        name:"قروض",
        icon:<FontAwesomeIcon icon={faPlus} />,
    },

{
        path:"/netsalary",
        name:"الراتب",
        icon:<FontAwesomeIcon icon={faMoneyBill} />,
    },


    {
        path:"/alaa2",
        name:"الدخول 2",
        icon:<FontAwesomeIcon icon={faMoneyBill} />,
    },


  


]

// function handelDivClick(){
//     if(setvis==true){
//     setvis(false)
//     }
// }  



    return(
  
        <div className="container-sidebar flex"  >
           <div style={{with: isOpen? "300px" : "50px"}} className="sidebar" >
              <div className="top_section" >
                 
                  <img alt='' src={im} className="logo-right" style={{display: isOpen? "block" : "none" , width:"80px" , height:"40px"}} />
                  <div style={{marginRight: isOpen? "20px" : "0px"}} className="bars">
                   {<FontAwesomeIcon icon={faBars} onClick={toggle} />}
                  </div>
              </div>
              
              
              
              {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active_sidebar">
                     <div className="icon">{item.icon}</div>
                     <div style={{display: isOpen? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
              }
           

           
                    <NavLink to="/"  className="link-log" activeclassName="active_sidebar" style={{top: "80px" ,position: "relative"}} onClick={alaa}>
                     <div className="icon">{<FontAwesomeIcon icon={faRightFromBracket} />}</div>
                     <div style={{display: isOpen? "block" : "none"}} className="link_text" >الخروج</div>
                    </NavLink>
              
       
    
                  


           </div>

           <main className="container" style={{marginRight: isOpen? "150px" : "50px"}}>
           <Modal isVisble={vis} errorMassage={mes} />
            {children}
            
            </main>
        </div>
    )
}