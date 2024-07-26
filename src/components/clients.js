import axios from "axios"
import React , { useEffect, useState } from "react"

export default function Clients(){


   const [create , setCreate]=useState([]);
     useEffect(()=>{
       const fetchAllClints =async()=>{
        try{
            const res = await axios.get("http://localhost:8800/")
            setCreate(res.data)
            console.log(res.data)
           }
             catch(err){
             console.log(err)
             }
      
        }
     fetchAllClints()
     },[])


    return(
        <>
        <h3 style={{backgroundColor:"white", marginTop:"10px", textAlign:"center" ,     marginBottom: "7px"}}>this is clients alaa</h3>
        <div className="calculation flex-container">
              <div className="calculation-flex flex-2dir input-css flex-dir" id="input-loan-form"  style={{ padding:"5px" ,width:"100%", overflow:"scroll"}} >
                <table style={{direction:"rtl"}}>
                <thead>
                <tr>
                    <th>م</th>
                    <th>اسم العميل</th>
                    <th>الجوال</th>
                    <th>البنك الحالي</th>
                    <th>الوظيفه</th>
                    <th>الراتب الصافي</th>
                    <th>الراتب الاساسي</th>
                    <th> الميلاد</th>
                    <th> التعيين</th>
                    <th>الالتزامات</th>
                    <th>الدعم</th>
                    <th>التمويل العقاري</th>
                    <th>تاريخ الاضافه</th>
                    <th>التعديل</th>
                    <th>الحذف</th>

                </tr>
                </thead>
                <tbody>

              
	

  	
               
                             <tr >
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                    
	
	
       
{/* 	
                     { create.map((users)=>(
                             <tr key={users.id}>
                                <td>{users.id}</td>
                                <td>{users.netSalary}</td>
                                <td>{users.basicSalary}</td>
                                <td>{users.phone}</td>
                                <td>{users.ProfitIntBank}</td>
                            </tr>
                        ))
                      } */}
                </tbody>
                
            </table>
          
     </div>

       
       




        
      </div>
        </>
    )
}