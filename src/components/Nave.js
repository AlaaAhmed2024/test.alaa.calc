import {NavLink } from "react-router-dom";
import "./home.css"
import im from '../logo.png'
export default function Nave(){



    return(
      <div className="">
         <nav className="fixed-top" style={{height:"50px"}}>
            <NavLink className="navbar-brand"  to="/start" style={{position: "fixed",left: "10px",top: "25px"}}>
               <img alt='' src={im} className="loge-left" />
           </NavLink>


             
       <div className='ddd' style={{marginRight:"200px"}}>
           <ul className='navbar-nav ml-auto'>
             <li className='nav-item'>
                  <NavLink exact to="/start" style={{padding:"10px" }}> المعلومات</NavLink>
             </li>

              <li className='nav-item'>
                  <NavLink to="/about"  style={{padding:"10px"}}>الحسبة</NavLink>
             </li>

             <li className='nav-item'> 
                  <NavLink to="/login"  style={{padding:"10px"}}>الدخول</NavLink>
             </li>

             <li className='nav-item'> 
                 <NavLink to="/clients"  style={{padding:"10px"}}>العملاء</NavLink>
             </li>

             <li className='nav-item'> 
                 <NavLink to="/profit"  style={{padding:"10px"}}>الفوائد</NavLink>
             </li>

             <li className='nav-item'> 
                 <NavLink to="/plus"  style={{padding:"10px"}}>قروض</NavLink>
             </li>

             <li className='nav-item'> 
                   <NavLink to="/netsalary"  style={{padding:"10px"}}>الراتب </NavLink>
             </li>
         </ul>
        </div>
       
        
        </nav>
       
       </div>
    )
}