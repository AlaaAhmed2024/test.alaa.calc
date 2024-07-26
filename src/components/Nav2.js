import { NavLink } from "react-router-dom";

export default function Nav(){


    return(

        <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
           <NavLink to={"/"} className="navbar-brand">Home</NavLink>
        <div className='collapse navbar-collapse'>
           <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                 <NavLink to={"/login"} className="nav-link">Login</NavLink>
              </li>
              <li className='nav-item'> 
                 <NavLink to={"/register"} className='nav-link'>Sign up</NavLink>
            
             </li>

             <li className='nav-item'> 
                 <NavLink to={"/api"} className='nav-link'>DATA</NavLink>
            
             </li>
           </ul>
 
         </div>
        
         </div>
       
       </nav>
    )
}

