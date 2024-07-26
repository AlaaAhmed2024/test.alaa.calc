import { useState } from "react"
import "../Project1.css"
import Modal from "../Model"


export default function Plus(){
    const [calulationInputs,setcalulationInputs]=useState({
      netSalary:"",
      currentBank:"",
      type:"",
      job:"",
      installment1 :"",
  
    
  


      editDurationPersonal:"",
      editPercentageFirst:"",
      editProfitRatePersonal:"",
      editPersonalInstallment:"",
      
      birthMonth:"",
      currentMonth:"",
      birthYear:"",
      currentYear:"",

      });
     
      const [calulationOutputs,setCalulationOutputs]=useState({
       
        personalFinance:"",
        firstInstallment:"",
        netProfit:"",
        profitRatePersonal:"",
        age:"",
        durationPersonal :"",
        precent:"",
        total:""
        })


        const[showModdal,setShowModal]=useState(false)
        const [errorMassge ,setErrorMassge]=useState(null)

 function calculation(event){
//بدايه حسابات الشخصي 
  if(calulationInputs.type==="1"){
//حساب  العمر


          var monthClint = calulationInputs.currentMonth -calulationInputs.birthMonth
          var yearClint = calulationInputs.currentYear - calulationInputs.birthYear
          var ageClint = ((monthClint+yearClint*12)/12).toFixed(2);
//الاعمار التقاعديه 
var array1= [75,60,60,44,46,48,50,52,44,46,48,50,52]      //التقاعد الفعلي
var array2 =["متقاعد","مدني","خاص","جندي","عريف","وكيل رقيب","رقيب","رئيس رقباء","ملازم","نقيب","رائد","عقيد","عميد"];    
                 
var numberJob=array2.indexOf(calulationInputs.job);              
var ageBeforeRetirement =array1.at(numberJob)  
// حساب المده المتبقيه الي التقاعد الفعلي
var durationBefore=(ageBeforeRetirement -ageClint)*12; 
//حساب اقصي مده للتمويل
if(calulationInputs.netSalary==0){
    var maxxDurationBefore=0;         

}else if(calulationInputs.editDurationPersonal==""){
    var maxxDurationBefore=Math.min(durationBefore,60)
}else{
    var maxxDurationBefore=Math.min(durationBefore,60,calulationInputs.editDurationPersonal)
}


//نسب الفوائد  
var arrprsonalSalary=[2999,3999,4999,5999,6999,7999,8999,9999,11999,14999,19999,24999,29999,30000]
var arrprcentPrsonal=[7.53,7.47,7.41,5.23,5.17,5.05,5.11,4.99,3.62,3.56,3.50,3.44,3.13,3.07]

//حساب  
if(calulationInputs.netSalary==0  ){
    var prcentPrsonal=0;
}else if(calulationInputs.netSalary<=arrprsonalSalary.at(0) ){
        prcentPrsonal=arrprcentPrsonal.at(0);
}else if (calulationInputs.netSalary>arrprsonalSalary.at(0)&&calulationInputs.netSalary<=arrprsonalSalary.at(1) ){
    prcentPrsonal=arrprcentPrsonal.at(1);  
}else if (calulationInputs.netSalary>arrprsonalSalary.at(1)&&calulationInputs.netSalary<=arrprsonalSalary.at(2) ){
    prcentPrsonal=arrprcentPrsonal.at(2);  
}else if (calulationInputs.netSalary>arrprsonalSalary.at(2)&&calulationInputs.netSalary<=arrprsonalSalary.at(3) ){
    prcentPrsonal=arrprcentPrsonal.at(3);  
}else if (calulationInputs.netSalary>arrprsonalSalary.at(3)&&calulationInputs.netSalary<=arrprsonalSalary.at(4) ){
    prcentPrsonal=arrprcentPrsonal.at(4);  
}else if (calulationInputs.netSalary>arrprsonalSalary.at(4)&&calulationInputs.netSalary<=arrprsonalSalary.at(5) ){
    prcentPrsonal=arrprcentPrsonal.at(5);  
}else if (calulationInputs.netSalary>arrprsonalSalary.at(5)&&calulationInputs.netSalary<=arrprsonalSalary.at(6) ){
    prcentPrsonal=arrprcentPrsonal.at(6);  
}else if (calulationInputs.netSalary>arrprsonalSalary.at(6)&&calulationInputs.netSalary<=arrprsonalSalary.at(7) ){
    prcentPrsonal=arrprcentPrsonal.at(7);   
}else if (calulationInputs.netSalary>arrprsonalSalary.at(7)&&calulationInputs.netSalary<=arrprsonalSalary.at(8) ){
    prcentPrsonal=arrprcentPrsonal.at(8); 
}else if (calulationInputs.netSalary>arrprsonalSalary.at(8)&&calulationInputs.netSalary<=arrprsonalSalary.at(9) ){
    prcentPrsonal=arrprcentPrsonal.at(9);
}else if (calulationInputs.netSalary>arrprsonalSalary.at(9)&&calulationInputs.netSalary<=arrprsonalSalary.at(10) ){
    prcentPrsonal=arrprcentPrsonal.at(10);  
}else if (calulationInputs.netSalary>arrprsonalSalary.at(10)&&calulationInputs.netSalary<=arrprsonalSalary.at(11) ){
    prcentPrsonal=arrprcentPrsonal.at(11);
}else if (calulationInputs.netSalary>arrprsonalSalary.at(11)&&calulationInputs.netSalary<=arrprsonalSalary.at(12) ){
    prcentPrsonal=arrprcentPrsonal.at(12);  
}else if (calulationInputs.netSalary>arrprsonalSalary.at(13) ){
    prcentPrsonal=arrprcentPrsonal.at(13);  
}else{
    prcentPrsonal=5
}


if(calulationInputs.job=="مدني"||calulationInputs.job=="متقاعد"){
   var prcentPrsonaFinal=prcentPrsonal
}else if(calulationInputs.job=="خاص"){
    var prcentPrsonaFinal=prcentPrsonal+0.6 
}else{
    var prcentPrsonaFinal=prcentPrsonal+0.75  
}





if(calulationInputs.netSalary==0){
    var profitadd=0; 
}else if(calulationInputs.editProfitRatePersonal!=""){
var profitadd= calulationInputs.editProfitRatePersonal;

}else{
    var profitadd=prcentPrsonaFinal; 
}


 // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد 
 if(calulationInputs.netSalary==0){
    var precentAfterEdit1=0;
 }else if(calulationInputs.editPercentageFirst==""&&calulationInputs.job==array2.at(0)){
    var precentAfterEdit1=25;
}else if(calulationInputs.editPercentageFirst==""){
        var precentAfterEdit1=33;

}else{
    var precentAfterEdit1=calulationInputs.editPercentageFirst
}


//التمويل الشخصي اولا حساب القسط 
if( calulationInputs.editPersonalInstallment==""){

      var personInstallment=precentAfterEdit1*calulationInputs.netSalary/100;    
 
}else{
    var personInstallment=calulationInputs.editPersonalInstallment;  
}

//التمويل الشخصي ثالثا حساب مبلغ التمويل 
    var PersonalFinance1=(personInstallment*maxxDurationBefore)/(1+0.01*profitadd*(maxxDurationBefore/12));    

// التمويل الشخصي رابعا حساب فوائد الشخصي
var profitPersonalFinance=(personInstallment*maxxDurationBefore)-PersonalFinance1
var total1=(PersonalFinance1+profitPersonalFinance) ;
    


//نهايه حسابات بنك الشخصي






   

setCalulationOutputs({...calulationOutputs,
  age:ageClint,
  durationPersonal:maxxDurationBefore,
  profitRatePersonal:profitadd,
  precent:precentAfterEdit1,
  firstInstallment:personInstallment,
  personalFinance:new Intl.NumberFormat().format(PersonalFinance1.toFixed(0)),
  netProfit:new Intl.NumberFormat().format(profitPersonalFinance.toFixed(0)),
  total:new Intl.NumberFormat().format(total1.toFixed(0)),

//تغير الكتابه

//   nameAmountHousingSupport:outNameHosingSuppory,
});

















//==================بدايه امكان =========================//
  }else if(calulationInputs.type==="2"){
    //حساب  العمر
    
    
              var monthClint = calulationInputs.currentMonth -calulationInputs.birthMonth
              var yearClint = calulationInputs.currentYear - calulationInputs.birthYear
              var ageClint = ((monthClint+yearClint*12)/12).toFixed(2);
    //الاعمار التقاعديه 
    var array1= [75,60,60,44,46,48,50,52,44,46,48,50,52]      //التقاعد الفعلي
    var array2 =["متقاعد","مدني","خاص","جندي","عريف","وكيل رقيب","رقيب","رئيس رقباء","ملازم","نقيب","رائد","عقيد","عميد"];    
                     
    var numberJob=array2.indexOf(calulationInputs.job);              
    var ageBeforeRetirement =array1.at(numberJob)  
    // حساب المده المتبقيه الي التقاعد الفعلي
    var durationBefore=(ageBeforeRetirement -ageClint)*12; 

var totalInstallment=(calulationInputs.installment1);
var precentTotalInstallment1=100*totalInstallment/(calulationInputs.netSalary);

if(precentTotalInstallment1>=45){
    var precentTotalInstallment=45  
}else{
    var precentTotalInstallment= precentTotalInstallment1
}


    //حساب اقصي مده للتمويل
if(calulationInputs.netSalary==0||precentTotalInstallment>=45){
    var maxxDurationBefore=0;         

}else if(calulationInputs.editDurationPersonal==""){
    var maxxDurationBefore=Math.min(durationBefore,60)
}else{
    var maxxDurationBefore=Math.min(durationBefore,60,calulationInputs.editDurationPersonal)
}



 
    
    

    //حساب  
    if(calulationInputs.netSalary==0  ){
        var profitadd=0;
     }else if(calulationInputs.editProfitRatePersonal!=""){
        var profitadd= calulationInputs.editProfitRatePersonal;
        
    }else if(calulationInputs.currentBank=="2"&&calulationInputs.netSalary<=10000) {
            var profitadd=12.25; 
     }else if(calulationInputs.currentBank=="2"&&calulationInputs.netSalary<=14999) {
            var profitadd=10.75; 
        }else if(calulationInputs.currentBank=="2"&&calulationInputs.netSalary<=25000) {
            var profitadd=7.99; 
        }else if(calulationInputs.currentBank=="2"&&calulationInputs.netSalary>25000) {
            var profitadd=6.49; 
        }else if(calulationInputs.currentBank!="2"&&calulationInputs.netSalary<=10000) {
            var profitadd=12.75; 
        }else if(calulationInputs.currentBank!="2"&&calulationInputs.netSalary<=14999) {
            var profitadd=11.25; 
        }else if(calulationInputs.currentBank!="2"&&calulationInputs.netSalary<=25000) {
            var profitadd=8.75; 
        }else  {
            var profitadd=7.75; 
        }
    
    
    
    


        
        
        
        
        
        
        
        

        
          



     // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد 
     if(calulationInputs.netSalary==0){
        var precentAfterEdit1=0;
     }else if(calulationInputs.editPercentageFirst==""&&calulationInputs.job==array2.at(0)){
        var precentAfterEdit1=Math.min(11.67,45-precentTotalInstallment);
    }else if(calulationInputs.editPercentageFirst==""){
            var precentAfterEdit1=Math.min(11.67,45-precentTotalInstallment);
    
    }else{
        var precentAfterEdit1=calulationInputs.editPercentageFirst
    }
    
    

 
              
    //التمويل الشخصي اولا حساب القسط 

    if( calulationInputs.editPersonalInstallment==""){
    
          var personInstallment=precentAfterEdit1*calulationInputs.netSalary/100;    
     
    }else{
        var personInstallment=calulationInputs.editPersonalInstallment;  
    }
    
    //التمويل الشخصي ثالثا حساب مبلغ التمويل 
        var PersonalFinance1=(personInstallment*maxxDurationBefore)/(1+0.01*profitadd*(maxxDurationBefore/12));    
    
    // التمويل الشخصي رابعا حساب فوائد الشخصي
    var profitPersonalFinance=(personInstallment*maxxDurationBefore)-PersonalFinance1
    var total1=(PersonalFinance1+profitPersonalFinance) ;
        
    
    
    //نهايه حسابات بنك الشخصي
    
    
    
    
    
    
       
    
    setCalulationOutputs({...calulationOutputs,
        age:ageClint,
        durationPersonal:maxxDurationBefore,
        profitRatePersonal:profitadd,
        precent:precentAfterEdit1,
        firstInstallment:personInstallment,
        personalFinance:new Intl.NumberFormat().format(PersonalFinance1.toFixed(0)),
        netProfit:new Intl.NumberFormat().format(profitPersonalFinance.toFixed(0)),
        total:new Intl.NumberFormat().format(total1.toFixed(0)),
      
    //تغير الكتابه
    
    //   nameAmountHousingSupport:outNameHosingSuppory,
    });
    
    
    
    //==================بدايه امكان =========================//
  }else if(calulationInputs.type==="3"||calulationInputs.type==="5"){
    //حساب  العمر
    
    
              var monthClint = calulationInputs.currentMonth -calulationInputs.birthMonth
              var yearClint = calulationInputs.currentYear - calulationInputs.birthYear
              var ageClint = ((monthClint+yearClint*12)/12).toFixed(2);
    //الاعمار التقاعديه 
    var array1= [75,60,60,44,46,48,50,52,44,46,48,50,52]      //التقاعد الفعلي
    var array2 =["متقاعد","مدني","خاص","جندي","عريف","وكيل رقيب","رقيب","رئيس رقباء","ملازم","نقيب","رائد","عقيد","عميد"];    
                     
    var numberJob=array2.indexOf(calulationInputs.job);              
    var ageBeforeRetirement =array1.at(numberJob)  
    // حساب المده المتبقيه الي التقاعد الفعلي
    var durationBefore=(ageBeforeRetirement -ageClint)*12; 

    var totalInstallment=(calulationInputs.installment1);
if(precentTotalInstallment1>=45){
    var precentTotalInstallment=45  
}else{
    var precentTotalInstallment= precentTotalInstallment1
}


    //حساب اقصي مده للتمويل
if(calulationInputs.netSalary==0||precentTotalInstallment>=45){
    var maxxDurationBefore=0;         

}else if(calulationInputs.editDurationPersonal==""){
    var maxxDurationBefore=Math.min(durationBefore,60)
}else{
    var maxxDurationBefore=Math.min(durationBefore,60,calulationInputs.editDurationPersonal)
}



 
    
    

    if(calulationInputs.netSalary==0  ){
        var profitadd=0;
     }else if(calulationInputs.editProfitRatePersonal!=""){
        var profitadd= calulationInputs.editProfitRatePersonal;
        
    }else if(calulationInputs.job=="متقاعد") {
        var profitadd=8; 
    }else  {
        var profitadd=17; 
        
    }
    
    
    
    


        
        
        
        
        
        
        
        

        
          



     // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد 
     if(calulationInputs.netSalary==0){
        var precentAfterEdit1=0;
     }else if(calulationInputs.editPercentageFirst==""&&calulationInputs.job==array2.at(0)){
        var precentAfterEdit1=Math.min(45-precentTotalInstallment);
    }else if(calulationInputs.editPercentageFirst==""){
            var precentAfterEdit1=Math.min(45-precentTotalInstallment);
    
    }else{
        var precentAfterEdit1=calulationInputs.editPercentageFirst
    }
    
    

 
              
    //التمويل الشخصي اولا حساب القسط 

    if( calulationInputs.editPersonalInstallment==""){
    
          var personInstallment=precentAfterEdit1*calulationInputs.netSalary/100;    
     
    }else{
        var personInstallment=calulationInputs.editPersonalInstallment;  
    }
    
    //التمويل الشخصي ثالثا حساب مبلغ التمويل 
        var PersonalFinance1=(personInstallment*maxxDurationBefore)/(1+0.01*profitadd*(maxxDurationBefore/12));    
    
    // التمويل الشخصي رابعا حساب فوائد الشخصي
    var profitPersonalFinance=(personInstallment*maxxDurationBefore)-PersonalFinance1
    var total1=(PersonalFinance1+profitPersonalFinance) ;
        
    
    
    //نهايه حسابات بنك الشخصي
    
    
    
    
    
    
       
    
    setCalulationOutputs({...calulationOutputs,
        age:ageClint,
        durationPersonal:maxxDurationBefore,
        profitRatePersonal:profitadd,
        precent:precentAfterEdit1,
        firstInstallment:personInstallment,
        personalFinance:new Intl.NumberFormat().format(PersonalFinance1.toFixed(0)),
        netProfit:new Intl.NumberFormat().format(profitPersonalFinance.toFixed(0)),
        total:new Intl.NumberFormat().format(total1.toFixed(0)),
      
    
    //تغير الكتابه
    
    //   nameAmountHousingSupport:outNameHosingSuppory,
    });
    
//الفرنسي
}else if(calulationInputs.type==="6"){
    //حساب  العمر
    
    
              var monthClint = calulationInputs.currentMonth -calulationInputs.birthMonth
              var yearClint = calulationInputs.currentYear - calulationInputs.birthYear
              var ageClint = ((monthClint+yearClint*12)/12).toFixed(2);
    //الاعمار التقاعديه 
    var array1= [75,60,60,44,46,48,50,52,44,46,48,50,52]      //التقاعد الفعلي
    var array2 =["متقاعد","مدني","خاص","جندي","عريف","وكيل رقيب","رقيب","رئيس رقباء","ملازم","نقيب","رائد","عقيد","عميد"];    
                     
    var numberJob=array2.indexOf(calulationInputs.job);              
    var ageBeforeRetirement =array1.at(numberJob)  
    // حساب المده المتبقيه الي التقاعد الفعلي
    var durationBefore=(ageBeforeRetirement -ageClint)*12; 

    var totalInstallment=(calulationInputs.installment1);
var precentTotalInstallment1=100*totalInstallment/(calulationInputs.netSalary);

if(precentTotalInstallment1>=45){
    var precentTotalInstallment=45  
}else{
    var precentTotalInstallment= precentTotalInstallment1
}


    //حساب اقصي مده للتمويل
if(calulationInputs.netSalary==0||precentTotalInstallment>=45){
    var maxxDurationBefore=0;         

}else if(calulationInputs.editDurationPersonal==""){
    var maxxDurationBefore=Math.min(durationBefore,60)
}else{
    var maxxDurationBefore=Math.min(durationBefore,60,calulationInputs.editDurationPersonal)
}



 
    
    

    if(calulationInputs.netSalary==0  ){
        var profitadd=0;
     }else if(calulationInputs.editProfitRatePersonal!=""){
        var profitadd= calulationInputs.editProfitRatePersonal;
        
    }else  {
        var profitadd=4.2; 
    }
        
    
    
    
    
    


        
        
        
        
        
        
        
        

        
          



     // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد 
     if(calulationInputs.netSalary==0){
        var precentAfterEdit1=0;
     }else if(calulationInputs.editPercentageFirst==""&&calulationInputs.job==array2.at(0)){
        var precentAfterEdit1=Math.min(45-precentTotalInstallment);
    }else if(calulationInputs.editPercentageFirst==""){
            var precentAfterEdit1=Math.min(45-precentTotalInstallment);
    
    }else{
        var precentAfterEdit1=calulationInputs.editPercentageFirst
    }
    
    

 
              
    //التمويل الشخصي اولا حساب القسط 

    if( calulationInputs.editPersonalInstallment==""){
    
          var personInstallment=precentAfterEdit1*calulationInputs.netSalary/100;    
     
    }else{
        var personInstallment=calulationInputs.editPersonalInstallment;  
    }
    
    //التمويل الشخصي ثالثا حساب مبلغ التمويل 
        var PersonalFinance1=(personInstallment*maxxDurationBefore)/(1+0.01*profitadd*(maxxDurationBefore/12));    
    
    // التمويل الشخصي رابعا حساب فوائد الشخصي
    var profitPersonalFinance=(personInstallment*maxxDurationBefore)-PersonalFinance1
    var total1=(PersonalFinance1+profitPersonalFinance) ;
        
    
    
    //نهايه حسابات بنك الشخصي
    
    
    
    
    
    
       
    
    setCalulationOutputs({...calulationOutputs,
        age:ageClint,
        durationPersonal:maxxDurationBefore,
        profitRatePersonal:profitadd,
        precent:precentAfterEdit1,
        firstInstallment:personInstallment,
        personalFinance:new Intl.NumberFormat().format(PersonalFinance1.toFixed(0)),
        netProfit:new Intl.NumberFormat().format(profitPersonalFinance.toFixed(0)),
        total:new Intl.NumberFormat().format(total1.toFixed(0)),
      
    
    //تغير الكتابه
    
    //   nameAmountHousingSupport:outNameHosingSuppory,
    });
    

    
//ساب
}else if(calulationInputs.type==="7"){
    //حساب  العمر
    
    
              var monthClint = calulationInputs.currentMonth -calulationInputs.birthMonth
              var yearClint = calulationInputs.currentYear - calulationInputs.birthYear
              var ageClint = ((monthClint+yearClint*12)/12).toFixed(2);
    //الاعمار التقاعديه 
    var array1= [75,60,60,44,46,48,50,52,44,46,48,50,52]      //التقاعد الفعلي
    var array2 =["متقاعد","مدني","خاص","جندي","عريف","وكيل رقيب","رقيب","رئيس رقباء","ملازم","نقيب","رائد","عقيد","عميد"];    
                     
    var numberJob=array2.indexOf(calulationInputs.job);              
    var ageBeforeRetirement =array1.at(numberJob)  
    // حساب المده المتبقيه الي التقاعد الفعلي
    var durationBefore=(ageBeforeRetirement -ageClint)*12; 

    var totalInstallment=(calulationInputs.installment1);
var precentTotalInstallment1=100*totalInstallment/(calulationInputs.netSalary);

if(precentTotalInstallment1>=45){
    var precentTotalInstallment=45  
}else{
    var precentTotalInstallment= precentTotalInstallment1
}


    //حساب اقصي مده للتمويل
if(calulationInputs.netSalary==0||precentTotalInstallment>=45){
    var maxxDurationBefore=0;         

}else if(calulationInputs.editDurationPersonal==""){
    var maxxDurationBefore=Math.min(durationBefore,60)
}else{
    var maxxDurationBefore=Math.min(durationBefore,60,calulationInputs.editDurationPersonal)
}



 
    
    

    if(calulationInputs.netSalary==0  ){
        var profitadd=0;
     }else if(calulationInputs.editProfitRatePersonal!=""){
        var profitadd= calulationInputs.editProfitRatePersonal;
        
    }else  {
        var profitadd=12.75; 
    }
        
    
    
    
    
    


        
        
        
        
        
        
        
        

        
          



     // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد 
     if(calulationInputs.netSalary==0){
        var precentAfterEdit1=0;
     }else if(calulationInputs.editPercentageFirst==""&&calulationInputs.job==array2.at(0)){
        var precentAfterEdit1=Math.min(45-precentTotalInstallment);
    }else if(calulationInputs.editPercentageFirst==""){
            var precentAfterEdit1=Math.min(45-precentTotalInstallment);
    
    }else{
        var precentAfterEdit1=calulationInputs.editPercentageFirst
    }
    
    

 
              
    //التمويل الشخصي اولا حساب القسط 

    if( calulationInputs.editPersonalInstallment==""){
    
          var personInstallment=precentAfterEdit1*calulationInputs.netSalary/100;    
     
    }else{
        var personInstallment=calulationInputs.editPersonalInstallment;  
    }
    
    //التمويل الشخصي ثالثا حساب مبلغ التمويل 
        var PersonalFinance1=(personInstallment*maxxDurationBefore)/(1+0.01*profitadd*(maxxDurationBefore/12));    
    
    // التمويل الشخصي رابعا حساب فوائد الشخصي
    var profitPersonalFinance=(personInstallment*maxxDurationBefore)-PersonalFinance1
    var total1=(PersonalFinance1+profitPersonalFinance) ;
        
    
    
    //نهايه حسابات بنك الشخصي
    
    
    
    
    
    
       
    
    setCalulationOutputs({...calulationOutputs,
        age:ageClint,
        durationPersonal:maxxDurationBefore,
        profitRatePersonal:profitadd,
        precent:precentAfterEdit1,
        firstInstallment:personInstallment,
        personalFinance:new Intl.NumberFormat().format(PersonalFinance1.toFixed(0)),
        netProfit:new Intl.NumberFormat().format(profitPersonalFinance.toFixed(0)),
        total:new Intl.NumberFormat().format(total1.toFixed(0)),
      
    
    //تغير الكتابه
    
    //   nameAmountHousingSupport:outNameHosingSuppory,
    });



    
//دوتشية
}else if(calulationInputs.type==="4"){
    //حساب  العمر
    
    
              var monthClint = calulationInputs.currentMonth -calulationInputs.birthMonth
              var yearClint = calulationInputs.currentYear - calulationInputs.birthYear
              var ageClint = ((monthClint+yearClint*12)/12).toFixed(2);
    //الاعمار التقاعديه 
    var array1= [75,60,60,44,46,48,50,52,44,46,48,50,52]      //التقاعد الفعلي
    var array2 =["متقاعد","مدني","خاص","جندي","عريف","وكيل رقيب","رقيب","رئيس رقباء","ملازم","نقيب","رائد","عقيد","عميد"];    
                     
    var numberJob=array2.indexOf(calulationInputs.job);              
    var ageBeforeRetirement =array1.at(numberJob)  
    // حساب المده المتبقيه الي التقاعد الفعلي
    var durationBefore=(ageBeforeRetirement -ageClint)*12; 

    var totalInstallment=(calulationInputs.installment1);
var precentTotalInstallment1=100*totalInstallment/(calulationInputs.netSalary);

if(calulationInputs.netSalary<=3000){
    var prcent = 40;
    }else if(calulationInputs.netSalary>3000&& calulationInputs.netSalary<=15000){
        var prcent = 45;
    
    }else{
        var prcent = 55;
    }
if(precentTotalInstallment1>=prcent){
    var precentTotalInstallment=prcent  
}else{
    var precentTotalInstallment= precentTotalInstallment1
}


    //حساب اقصي مده للتمويل
if(calulationInputs.netSalary==0||precentTotalInstallment>=prcent){
    var maxxDurationBefore=0;         

}else if(calulationInputs.editDurationPersonal==""){
    var maxxDurationBefore=Math.min(durationBefore,60)
}else{
    var maxxDurationBefore=Math.min(durationBefore,60,calulationInputs.editDurationPersonal)
}



 
    
    

    if(calulationInputs.netSalary==0  ){
        var profitadd=0;
     }else if(calulationInputs.editProfitRatePersonal!=""){
        var profitadd= calulationInputs.editProfitRatePersonal;
        
    }else if(calulationInputs.netSalary<=3000) {
        var profitadd=30.25; 
        
    }else if(calulationInputs.netSalary>=3000&&calulationInputs.netSalary<=6999) {
        var profitadd=19.15; 
        
    }else if(calulationInputs.netSalary>=7000&&calulationInputs.netSalary<=14999) {
        var profitadd=13.5;  
    }else  {
        var profitadd=10.70; 
    }
        
 
  
    
    
    
    
    


        
        
        
        
        
        
        
        

        
          



     // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد 
     if(calulationInputs.netSalary==0){
        var precentAfterEdit1=0;
     }else if(calulationInputs.editPercentageFirst==""&&calulationInputs.job==array2.at(0)){
        var precentAfterEdit1=Math.min(prcent-precentTotalInstallment);
    }else if(calulationInputs.editPercentageFirst==""){
            var precentAfterEdit1=Math.min(prcent-precentTotalInstallment);
    
    }else{
        var precentAfterEdit1=calulationInputs.editPercentageFirst
    }
    
    

 
              
    //التمويل الشخصي اولا حساب القسط 

    if( calulationInputs.editPersonalInstallment==""){
    
          var personInstallment=precentAfterEdit1*calulationInputs.netSalary/100;    
     
    }else{
        var personInstallment=calulationInputs.editPersonalInstallment;  
    }
    
    //التمويل الشخصي ثالثا حساب مبلغ التمويل 
        var PersonalFinance1=(personInstallment*maxxDurationBefore)/(1+0.01*profitadd*(maxxDurationBefore/12));    
    
    // التمويل الشخصي رابعا حساب فوائد الشخصي
    var profitPersonalFinance=(personInstallment*maxxDurationBefore)-PersonalFinance1
    var total1=(PersonalFinance1+profitPersonalFinance) ;
        
    
    
    //نهايه حسابات بنك الشخصي
    
    
    
    
    
    
       
    
    setCalulationOutputs({...calulationOutputs,
        age:ageClint,
        durationPersonal:maxxDurationBefore,
        profitRatePersonal:profitadd,
        precent:precentAfterEdit1,
        firstInstallment:personInstallment,
        personalFinance:new Intl.NumberFormat().format(PersonalFinance1.toFixed(0)),
        netProfit:new Intl.NumberFormat().format(profitPersonalFinance.toFixed(0)),
        total:new Intl.NumberFormat().format(total1.toFixed(0)),
      
    //تغير الكتابه
    
    //   nameAmountHousingSupport:outNameHosingSuppory,
    });
  



    //الاخري
 }else {


    //حساب  العمر
    
    
              var monthClint = calulationInputs.currentMonth -calulationInputs.birthMonth
              var yearClint = calulationInputs.currentYear - calulationInputs.birthYear
              var ageClint = ((monthClint+yearClint*12)/12).toFixed(2);
    //الاعمار التقاعديه 
    var array1= [75,60,60,44,46,48,50,52,44,46,48,50,52]      //التقاعد الفعلي
    var array2 =["متقاعد","مدني","خاص","جندي","عريف","وكيل رقيب","رقيب","رئيس رقباء","ملازم","نقيب","رائد","عقيد","عميد"];    
                     
    var numberJob=array2.indexOf(calulationInputs.job);              
    var ageBeforeRetirement =array1.at(numberJob)  
    // حساب المده المتبقيه الي التقاعد الفعلي
    var durationBefore=(ageBeforeRetirement -ageClint)*12; 
    var totalInstallment=(calulationInputs.installment1);
var precentTotalInstallment1=100*totalInstallment/(calulationInputs.netSalary);

if(precentTotalInstallment1>=45){
    var precentTotalInstallment=45  
}else{
    var precentTotalInstallment= precentTotalInstallment1
}


    //حساب اقصي مده للتمويل
if(calulationInputs.netSalary==0||precentTotalInstallment>=45){
    var maxxDurationBefore=0;         

}else if(calulationInputs.editDurationPersonal==""){
    var maxxDurationBefore=Math.min(durationBefore,60)
}else{
    var maxxDurationBefore=Math.min(durationBefore,60,calulationInputs.editDurationPersonal)
}



 
    
    

    if(calulationInputs.netSalary==0  ){
        var profitadd=0;
     }else if(calulationInputs.editProfitRatePersonal!=""){
        var profitadd= calulationInputs.editProfitRatePersonal;
        
    }else  {
        var profitadd=4.2; 
    }
        
    
    
    
    
    


        
        
        
        
        
        
        
        

        
          



     // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد 
     if(calulationInputs.netSalary==0){
        var precentAfterEdit1=0;
     }else if(calulationInputs.editPercentageFirst==""&&calulationInputs.job==array2.at(0)){
        var precentAfterEdit1=Math.min(45-precentTotalInstallment);
    }else if(calulationInputs.editPercentageFirst==""){
            var precentAfterEdit1=Math.min(45-precentTotalInstallment);
    
    }else{
        var precentAfterEdit1=calulationInputs.editPercentageFirst
    }
    
    

 
              
    //التمويل الشخصي اولا حساب القسط 

    if( calulationInputs.editPersonalInstallment==""){
    
          var personInstallment=(precentAfterEdit1*calulationInputs.netSalary)/100;    
     
    }else{
        var personInstallment=calulationInputs.editPersonalInstallment;  
    }
    
    //التمويل الشخصي ثالثا حساب مبلغ التمويل 
        var PersonalFinance1=(personInstallment*maxxDurationBefore)/(1+0.01*profitadd*(maxxDurationBefore/12));    
    
    // التمويل الشخصي رابعا حساب فوائد الشخصي
    var profitPersonalFinance=(personInstallment*maxxDurationBefore)-PersonalFinance1
    var total1=(PersonalFinance1+profitPersonalFinance) ;
        
    
    
    //نهايه حسابات بنك الشخصي
    
    
    
    
    
    
       
    
    setCalulationOutputs({...calulationOutputs,
        age:ageClint,
        durationPersonal:maxxDurationBefore,
        profitRatePersonal:profitadd,
        precent:precentAfterEdit1,
        firstInstallment:personInstallment,
        personalFinance:new Intl.NumberFormat().format(PersonalFinance1.toFixed(0)),
        netProfit:new Intl.NumberFormat().format(profitPersonalFinance.toFixed(0)),
        total:new Intl.NumberFormat().format(total1.toFixed(0)),
      
    
    //تغير الكتابه
    
    //   nameAmountHousingSupport:outNameHosingSuppory,
    });




}

event.preventDefault()

setErrorMassge(null)

const { netSalary ,birthMonth,currentMonth,birthYear,currentYear,installment1} =calulationInputs
 if(netSalary.length < 4 || netSalary.length >5){
      setErrorMassge("خطأ فضلا التاكد من الراتب الصافي")


    }else if(birthYear<1366 ||birthYear>1428){
        setErrorMassge("خطأ تاكد من سنة الميلاد من 1366 الي 1428 ")
       }else if(birthMonth<1 ||birthMonth>12){
         setErrorMassge(" خطأ تاكد من شهر الميلاد من 1 الي 12 ")



 }else if(currentYear<1444 ||currentYear>1447){
   setErrorMassge("خطأ تاكد من تاريخ السنه الحاليه ")
 }else if(currentMonth<1 ||currentMonth>12){
   setErrorMassge("خطأ تاكد من تاريخ الشهر الحالي ")



}else if(installment1.length>5){
    setErrorMassge(" فضلا تاكد من مجموع الاقساط الحاليه ")
  }
 


  setShowModal(true)
 



}



















    function handelChecked(event){
        setcalulationInputs({...calulationInputs,inputCheck:event.target.checked})
   };
   

   
   const btnIsDisable = calulationInputs.netSalary==''|| calulationInputs.birthMonth==""|| calulationInputs.birthYear==""|| calulationInputs.currentMonth==""|| calulationInputs.currentYear==""||calulationInputs.basicSalary==""

   
   function handelDivClick(){
       if(showModdal==true){
       setShowModal(false)
       }
   }
   
console.log(calulationOutputs.personalFinance)


    return(
      
      
        <div className="calculation " onClick={handelDivClick}>
         <Modal isVisble={showModdal} errorMassage={errorMassge} />
        <div className=" input-css" id="calculation-input-loan-form">
            <form className="flex-dir"   onSubmit={(event)=>{event.preventDefault()}}>
            <h3 style={{textAlign:"center" ,margin: "0px",padding: "8px", backgroundColor:"teal"}}>البيانات</h3>
            <hr></hr>

            <div style={{width:"100%" , direction:"rtl"}}>
              <label className="w-38">البنك الحالي</label>
               <select className="w-60" value={calulationInputs.currentBank} onChange={(event)=>{setcalulationInputs({...calulationInputs, currentBank:event.target.value})}}>
                 <option value="alahli">الاهلي</option>
                 <option value="2">الراجحي</option>
                 <option value="albilad"> البلاد</option>
                 <option value="sab">ساب</option>
                 <option value="alinma">الانماء</option>
                 <option value="riyad">  الرياض</option>
                 <option value="alfransi"> الفرنسي</option>
                 <option value="aljazira"> الجزيرة</option>
                 <option value="any">الاخري</option>
               </select>
               </div>


               <div style={{width:"100%" , direction:"rtl"}}>
                <label className="w-38">نوع القرض</label>
               <select className="w-60" value={calulationInputs.type} onChange={(event)=>{setcalulationInputs({...calulationInputs, type:event.target.value})}}>
               <option value="1">شخصي</option>
                 <option value="2">امكان</option>
                 <option value="3"> نايفات</option>
                 <option value="4">دوتيشيه</option>
                 <option value="5">تسهيل</option>
                 <option value="6"> الفرنسي</option>
                 <option value="7"> ساب</option>
                 <option value="8">الاخري</option>
               </select>
               </div>

               <div style={{width:"100%" , direction:"rtl"}}>
                <label className="w-38">الــوظيفـــة</label>
               <select className="w-60" value={calulationInputs.job} onChange={(event)=>{setcalulationInputs({...calulationInputs, job:event.target.value})}}>
                       <option value="متقاعد">متقاعد</option>
                       <option value="مدني">مدني</option>
                       <option value="خاص">خاص</option>
                       <option value="جندي">جندي</option>
                       <option value="عريف">عريف</option>
                       <option value="وكيل رقيب">وكيل رقيب</option>
                       <option value="رقيب"> رقيب</option>
                       <option value="رئيس رقباء">رئيس رقباء</option>
                       <option value="ملازم">ملازم</option>
                       <option value="نقيب">نقيب</option>
                       <option value="رائد">رائد</option>
                       <option value="عقيد">عقيد</option>
                       <option value="عميد">عميد</option>
               </select>
               </div>

                
               <div style={{width:"100%" , direction:"rtl"}}>
                <label className="w-38">الراتب الصافي</label>
                <input className="w-60" type="number" value={calulationInputs.netSalary} onChange={(event)=>{setcalulationInputs({...calulationInputs , netSalary:event.target.value })}}/>
              </div>


              <div style={{width:"100%" , direction:"rtl"}}>
                <label className="w-38">تاريخ الميلاد</label>
                <input className="w-28" placeholder=" شهر  " type="number" style={{width:"25%"}} value={calulationInputs.birthMonth} onChange={(event)=>{setcalulationInputs({...calulationInputs , birthMonth:event.target.value})}}/>
                <input className="w-28" placeholder=" شنه "  type="number" style={{width:"35%" , marginRight:"7px"}} value={calulationInputs.birthYear} onChange={(event)=>{setcalulationInputs({...calulationInputs , birthYear:event.target.value})}}/>
              </div>


              <div style={{width:"100%" , direction:"rtl"}}>
                <label className="w-38">تاريخ اليوم</label>
                <input className="w-28" placeholder=" شهر" type="number" style={{width:"25%"}} value={calulationInputs.currentMonth} onChange={(event)=>{setcalulationInputs({...calulationInputs , currentMonth:event.target.value})}}/>
                <input className="w-28" placeholder=" سنه" type="number" style={{width:"35%" , marginRight:"7px"}} value={calulationInputs.currentYear} onChange={(event)=>{setcalulationInputs({...calulationInputs , currentYear:event.target.value})}}/>
              </div>

              {/* <div style={{width:"100%" , direction:"rtl"}}>
              <label>تاريخ اليوم</label>
              <input type="date" value={calulationInputs.netSalary} onChange={(event)=>{setcalulationInputs({...calulationInputs , netSalary:event.target.value})}}/>
              </div> */}









               







                <div style={{width:"100%" , direction:"rtl", marginTop:"20px"}} >
                <label style={{marginTop:"10px"}}> اضافه للعملاء</label>
                <input type="checkbox" checked={calulationInputs.inputCheck}  onChange={handelChecked} style={{width:"60%" , height:"28px"}}/>
                </div>
                <div style={{width:"100%" , direction:"rtl"}}>
  
               </div>
            </form>

            
        </div>



      <div  id="calculation-input-loan-form">
    

      {/* <div style={{overflowX:"auto"}}> */}
      <div className="edit" >
        <h3 style={{textAlign:"center" ,margin: "0px",padding: "8px", backgroundColor:"teal"}}>الالتزامات</h3>
        <hr></hr>
        <div>
        <input placeholder="اجمالي الاقساط الحاليه" style={{width:"100%" ,marginLeft:"1%"}} value={calulationInputs.installment1} onChange={(event)=>{setcalulationInputs({...calulationInputs , installment1:event.target.value})}}></input>
   
        </div>


        <h3 style={{textAlign:"center" ,margin: "0px",padding: "8px", backgroundColor:"teal" , marginTop:"12px" , marginBottom:"12px"}}>البيانات</h3>
        <div style={{ display:"flex" , justifyContent:"space-between" }}>
        <label style={{minWidth:"47%" ,marginLeft:"2%"}}> نسبة الاستقطاع  </label>
        <input style={{width:"47%" , marginRight:"2%" }} value={calulationInputs.editPercentageFirst} onChange={(event)=>{setcalulationInputs({...calulationInputs , editPercentageFirst:event.target.value})}}></input>
        </div>





        <div style={{ display:"flex" , justifyContent:"space-between" }}>
        <label style={{minWidth:"47%" ,marginLeft:"2%" ,marginTop:"8px" }}>مده التمويل </label>
        <input style={{width:"47%" , marginRight:"2%" , marginTop:"8px"}} value={calulationInputs.editDurationPersonal} onChange={(event)=>{setcalulationInputs({...calulationInputs , editDurationPersonal:event.target.value})}}></input>
        </div>


        <div style={{ display:"flex" , justifyContent:"space-between" }}>
        <label style={{minWidth:"47%" ,marginLeft:"2%" ,marginTop:"8px" }}>نسبه الفوائد  </label>
        <input style={{width:"47%" , marginRight:"2%" , marginTop:"8px"}}value={calulationInputs.editProfitRatePersonal} onChange={(event)=>{setcalulationInputs({...calulationInputs , editProfitRatePersonal:event.target.value})}}></input>
        </div>

        <div style={{ display:"flex" , justifyContent:"space-between" }}>
        <label style={{minWidth:"47%" ,marginLeft:"2%" ,marginTop:"8px" }}>القسط للقرض  </label>
        <input style={{width:"47%" , marginRight:"2%" , marginTop:"8px"}} value={calulationInputs.editPersonalInstallment} onChange={(event)=>{setcalulationInputs({...calulationInputs , editPersonalInstallment:event.target.value})}}></input>
        </div>





        <div>
        <button className={btnIsDisable? "disabled" :""} disabled={btnIsDisable} onClick={calculation} id="submit-loan-btn2" style={{width:"100%"}}>calculation</button>
        </div>

      </div> 
      </div>

      <div  id="calculation-input-loan-form">  
        <div style={{}}>
        <h3 style={{textAlign:"center" ,margin: "0px",padding: "8px", backgroundColor:"teal"}}>البيانات</h3>
        <hr></hr>
            <table>
   
                <tr>
                    <td>مبلغ التمويل</td>
                    <td>{calulationOutputs.personalFinance}</td>
                    
                </tr>

     
                <tr>
                    <td>القسط للقرض</td>
                    <td>{calulationOutputs.firstInstallment}</td>
                  
                </tr>

                <tr>
                    <td>  مدة التمويل</td>
                    <td>{calulationOutputs.durationPersonal}</td>
                  
                </tr>

                <tr>
                    <td>نسبه الاستقطاع </td>
                    <td>{calulationOutputs.precent}</td>
                </tr>
                


                <tr>
                    <td>نسبه الفوائد </td>
                    <td>{calulationOutputs.profitRatePersonal}</td>
                </tr>
                <tr>
                    <td>مبلغ الفوائد </td>
                    <td>{calulationOutputs.netProfit}</td>
                </tr>

                <tr>
                    <td>الاجمالي مع الفوائد</td>
                    <td>{calulationOutputs.total}</td>
             
                </tr>
                <tr>
                    <td>عمر العميل</td>
                    <td>{calulationOutputs.age}</td>
                </tr>


               
    

 

		      </table>
         </div>
      </div> 



        
       
    </div>
    
    )
};









