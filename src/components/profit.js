

import "../Project1.css"


    
export default function Profit(){
    
   //مصفوفه نسب الفوائد اولا المدعوم
var durationRealEstates =[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]                      // المده بالسنوات
var arr1=[4.00,4.00,4.06,4.12,4.18,4.24,4.30,4.36,4.43,4.49,4.56,4.62,4.62,4.62,4.62,4.62,4.62]   //نسب الفوائد للمدعوم
var arr11 =[3.78,3.78,3.84,3.9,3.95,4.01,4.07,4.13,4.19,4.25,4.31,4.37,4.37,4.37,4.37,4.37,4.37] //ضمانات
//مصفوفه نسب الفوائد ثانيا غير المدعوم
 var durationRealEstates2 =[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
var arr2=[4.55,4.40,4.46,4.52,4.58,4.65,4.70,4.76,4.81,4.86,4.92,4.98,5.08,5.13,5.17,5.23,5.28,5.75,5.75,5.75,5.75,5.75]     // الغير مدعوم راتب اقل من 10 الف
var arr3=[4.05,3.90,3.96,4.02,4.08,4.15,4.20,4.26,4.31,4.36,4.42,4.48,4.58,4.63,4.67,4.73,4.78,5.15,5.15,5.15,5.15,5.15]     //الغير مدعوم راتب فوق 10 الف 


for (let i = 0; i<arr1.length; i++) {
    var p1=arr1[i] 
    console.log(p1)

    
}


    
        return(
            <div className=" grid-container" style={{gap:"10px"}}>
              
              <div className="calculation-flex flex-2dir input-css flex-dir" id="input-loan-form"  style={{marginTop:"10px" , marginRight:"5px" ,}} >
          
                <table style={{direction:"rtl"}}>
                <thead>
                    <tr>
                       <th style={{width:"100%" , textAlign:"center"}}>بنك الراجحي</th>
                  
                    </tr>
                    <tr style={{backgroundColor:"teal" , color:"white"}}>
                     
                        <th >السنوات</th>
                        <th>بالاشهر</th>
                        <th>المدعوم </th>
                        <th>غير مدعوم  </th>
                       
                      
    
                    </tr>
                </thead>
                <tbody>

              
	
	
	
	            
                     { durationRealEstates.map((item) =><tr>
                      
                      <td>{item}</td>
                      <td>{item*12}</td>
                      <td>{9999}</td>
                      <td>{9999}</td>
                      
                      </tr>)}
                    

                                                                  
                     
                
            
                </tbody>
                
            </table>
          
     </div>

    <div className="calculation-flex flex-2dir input-css flex-dir" id="input-loan-form"  style={{marginTop:"10px" , marginRight:"5px" }} >
                <table style={{direction:"rtl"}}>
                <thead>
                   <tr>
                       <th style={{width:"100%" , textAlign:"center"}}>بنك الراجحي</th>
                  
                    </tr>                  
                    <tr style={{backgroundColor:"teal" , color:"white"}}>
                       <th >م</th>
                        <th>السنوات</th>
                        <th>بالاشهر</th>
                        <th>المدعوم </th>
                        <th>غير مدعوم  </th>
                       
                      
    
                    </tr>
                </thead>
                <tbody>

                { durationRealEstates.map((item) =><tr>
                      
                      <td>{item}</td>
                      <td>{item*12}</td>
                      <td>{9999}</td>
                      <td>{9999}</td>
                      
                      </tr>)}
	
	
	
                </tbody>
                
            </table>
          
     </div>
     <div className="calculation-flex flex-2dir input-css flex-dir" id="input-loan-form"  style={{marginTop:"10px" , marginRight:"5px" }} >
                <table style={{direction:"rtl"}}>
                <thead>
                     <tr>
                       <th style={{width:"100%" , textAlign:"center"}}>بنك الراجحي</th>
                  
                    </tr>                  
                    <tr style={{backgroundColor:"teal" , color:"white"}}>
                       <th>م</th>
                        <th>السنوات</th>
                        <th>بالاشهر</th>
                        <th>المدعوم </th>
                        <th>غير مدعوم  </th>
                       
                      
    
                    </tr>
                </thead>
                <tbody>

         	
	
                { durationRealEstates.map((item) =><tr>
                      
                      <td>{item}</td>
                      <td>{item*12}</td>
                      <td>{9999}</td>
                      <td>{9999}</td>
                      
                      </tr>)}
	
	
	
             
                </tbody>
                
            </table>
          
     </div>
   

     <div className="calculation-flex flex-2dir input-css flex-dir" id="input-loan-form"  style={{marginTop:"15px" , marginRight:"5px" ,}} >
  
                <table style={{direction:"rtl"}}>
                <thead>
                   <tr>
                       <th style={{width:"100%" , textAlign:"center"}}>بنك الراجحي</th>
                  
                    </tr>                  
                    <tr style={{backgroundColor:"teal" , color:"white"}}>
                       <th >م</th>
                        <th>السنوات</th>
                        <th>بالاشهر</th>
                        <th>المدعوم </th>
                        <th>غير مدعوم  </th>
                       
                      
    
                    </tr>
                </thead>
                <tbody>

                { durationRealEstates.map((item) =><tr>
                      
                      <td>{item}</td>
                      <td>{item*12}</td>
                      <td>{9999}</td>
                      <td>{9999}</td>
                      
                      </tr>)}
	
	
	
                </tbody>
                
            </table>
          
     </div>
 

     <div className="calculation-flex flex-2dir input-css flex-dir" id="input-loan-form"  style={{marginTop:"15px" , marginRight:"5px" ,}} >
                <table style={{direction:"rtl"}}>
                <thead>
                   <tr>
                       <th style={{width:"100%" , textAlign:"center"}}>بنك الراجحي</th>
                  
                    </tr>                  
                    <tr style={{backgroundColor:"teal" , color:"white"}}>
                       <th >م</th>
                        <th>السنوات</th>
                        <th>بالاشهر</th>
                        <th>المدعوم </th>
                        <th>غير مدعوم  </th>
                       
                      
    
                    </tr>
                </thead>
                <tbody>

                { durationRealEstates.map((item) =><tr>
                      
                      <td>{item}</td>
                      <td>{item*12}</td>
                      <td>{9999}</td>
                      <td>{9999}</td>
                      
                      </tr>)}
	
	
	
                </tbody>
                
            </table>
          
     </div>

     <div className="calculation-flex flex-2dir input-css flex-dir" id="input-loan-form"  style={{marginTop:"15px" , marginRight:"5px" ,}} >
                <table style={{direction:"rtl"}}>
                <thead>
                   <tr>
                       <th style={{width:"100%" , textAlign:"center"}}>بنك الراجحي</th>
                  
                    </tr>                  
                    <tr style={{backgroundColor:"teal" , color:"white"}}>
                       <th >م</th>
                        <th>السنوات</th>
                        <th>بالاشهر</th>
                        <th>المدعوم </th>
                        <th>غير مدعوم  </th>
                       
                      
    
                    </tr>
                </thead>
                <tbody>

                { durationRealEstates.map((item) =><tr>
                      
                      <td>{item}</td>
                      <td>{item*12}</td>
                      <td>{9999}</td>
                      <td>{9999}</td>
                      
                      </tr>)}
	
	
	
                </tbody>
                
            </table>
          
     </div>
    
    </div>
        )
    }





   