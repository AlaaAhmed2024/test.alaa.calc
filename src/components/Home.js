import './home.css'
import ahly from'../alahliLogo.svg'
import alrajhi from'../alrajhiLogo.svg'
export default function Home(){

    return(
        <div>
        <h3 style={{backgroundColor:"white", marginTop:"10px", textAlign:"center"}}>Eskan Salman Home</h3>
   
        <div className="anm1">اخر تحديثات البنوك</div>
        <br></br>

        <div className="anm2 home-flex" >
            <div>
                    <p>بنك الاهلي</p>
                    <p>التحديث علي سياسيه بدون تحويل راتب لا يوجد</p>
                    <p>و النسب تم التعديل بتاريخ 12/12/1445</p>
            </div>
            <div>
                <img alt="ahly" src={ahly} className='logo-home' />
            </div>
        </div>



        <br></br>
        <div className="anm1">اخر تحديثات البنوك</div>
        <br></br>
       
        <div className="anm5 home-flex">
        <div>
            
            <p>بنك الراجحي</p>
            <p>التحديث علي سياسيه بدون تحويل راتب لا يوجد</p>
            <p>و النسب تم التعديل بتاريخ 12/12/1445</p>
         </div>

         <div>
                <img alt="ahly" src={alrajhi} className='logo-home' />
        </div>

        </div>
        <br></br>
         <div  className="po">
           <div className="anm3" ></div>
         </div>
       
        <br></br>
        </div>
    )
}