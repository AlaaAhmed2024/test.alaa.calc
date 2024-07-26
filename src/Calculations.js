
import Sidebar from './components/Sidebar';
import Project1 from './Project1';
import Nave from './components/Nave';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Clients from './components/clients';
import Add from './components/add';
import Profit from './components/profit';
import Plus from './components/Plus';
import NetSalary from './components/NetSlary';
import "./Project1.css"
import { useState , useContext} from 'react';
import Login from './components/Login';
import Register from './components/register';
import { UseData } from "./App"
import'./App.css'

 function Calculations(){
   
    const data =useContext(UseData)
    if(data)
      {
          
        return(
    
            <BrowserRouter>
             <div>
               <Sidebar>
                  <Nave/>
                  
                  <Routes>
                    <Route path='/start' Component={Home} />
                    <Route path='/alaa2' Component={Register} />
                    <Route path='/about' Component={About}/>
                    <Route path='/login' Component={Project1 } />
                    <Route path='/clients' Component={Clients}/>
                    <Route path='/add' Component={Add}/>
                    <Route path='/profit' Component={Profit}/>
                    <Route path='/plus' Component={Plus}/>
                    <Route path='/netsalary' Component={NetSalary}/>
                </Routes>
              </Sidebar>
             </div>
            </BrowserRouter>
   
          
   )
        }else{
          var pathName =window.location.pathname
            return(
              <BrowserRouter>
                 <div className="App" style={{marginTop:"10px", marginBottom:"10px"}}>
             
                     <Routes>
                        <Route path={pathName} Component={Project1}/>
                     </Routes>
              
                </div>
              </BrowserRouter>
            );
            
        }
    };







  

export default Calculations;



