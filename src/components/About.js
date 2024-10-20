import { useState } from "react"
import "../Project1.css"
import Modal from "../Model"
import NetSalary from "./NetSlary";


export default function About(){
    const [calulationInputs,setcalulationInputs]=useState({
      netSalary:"",
      basicSalary:"",
      currentBank:"",
      realEstateBank:"",
      housingSupport:"",
      newPersonalFinance:"",
      job:"",
      financingType:"",
      durationIn:"",
      typeException:"",

      installment1 :"",
      installment2 :"",
      installment3 :"",
      installment4 :"",
      duration1 :"",
      duration2 :"",
      duration3 :"",
      duration4 :"",
     

      editDurationPersonal:"",
      editTotalDuration:"",

      editPercentageFirst:"",
      editPercentageBeforeRetirement:"",
      editPercentageAfterRetirement:"",
      
      editProfitRateRealEstate:"",
      editProfitRatePersonal:"",

      
      editPersonalInstallment:"",
      editAmountHousingSupport:"",
      editAmountHousingSupportBaqa:"",


      birthMonth:"",
      currentMonth:"",
      startWorkMonth :"",

      birthYear:"",
      currentYear:"",
      startWorkYear :"",


      inputSelect:"",
      inputCheck:false,
      name:"",
      phone:"",
      
      privateSectorEmployee:"",

      });
     
      const [calulationOutputs,setCalulationOutputs]=useState({
        realEstateFinance:"",
        personalFinance:"",
        amountHousingSupport:"",
        total:"",

        firstInstallment:"",
        installmentBeforeRetirement:"",
        installmentAfterRetirement:"",

        durationBeforeRetirement:"",
        durationAfterRetirement:"",
        totalDuration:"",
        
        totalProfit:"",
        netProfit:"",
        profitPersonal:"",
        salaryAfterRetirement:"",
        profitRateRealEstate:"",
        profitRatePersonal:"",
        age:"",
        work:"",

       percentageBeforeRetirement:"",
       percentageAfterRetirement:"",

       installmentPersonal :"",
       durationPersonal :"",
        

       nameAmountHousingSupport:"قسط الدعم",


        // inputSelect:"",
        // inputCheck:false
        })


        const[showModdal,setShowModal]=useState(false)
        const [errorMassge ,setErrorMassge]=useState(null)

 function calculation(event){

  if(calulationInputs.realEstateBank==="alrajhi"){
    //  مصفوفه الدعم ع حسب الراتب
   var arrayHousingSupportSalary=[3999,4999,5999,6999,7999,8999,9999,10000,10001]
   var arrayHousingSupport=[1350,1206,1073,955,850,757,673,599,416]



//حساب قسط الدعم
if(calulationInputs.netSalary==0 &&calulationInputs.housingSupport=="monthly" ){
  var housingSupport=0;
}else if(calulationInputs.netSalary!=0 &&calulationInputs.housingSupport=="monthly"&&calulationInputs.editAmountHousingSupport!=""){
   housingSupport=calulationInputs.editAmountHousingSupport;
}else if(calulationInputs.netSalary<=arrayHousingSupportSalary.at(0)&& calulationInputs.housingSupport=="monthly" ){
    housingSupport=arrayHousingSupport.at(0);

}else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(0)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(1)&& calulationInputs.housingSupport=="monthly" ){
   housingSupport=arrayHousingSupport.at(1);  
}else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(1)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(2)&& calulationInputs.housingSupport=="monthly" ){
   housingSupport=arrayHousingSupport.at(2);  
}else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(2)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(3)&& calulationInputs.housingSupport=="monthly" ){
  housingSupport=arrayHousingSupport.at(3);  
}else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(3)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(4)&& calulationInputs.housingSupport=="monthly" ){
   housingSupport=arrayHousingSupport.at(4);  
}else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(4)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(5)&& calulationInputs.housingSupport=="monthly" ){
   housingSupport=arrayHousingSupport.at(5);  
}else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(5)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(6)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(6);  
}else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(6)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(7)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(7);   
}else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(8)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(8);  
}else{
    housingSupport=0
}




   //حساب العمر و مده الخدمة
var monthWork = calulationInputs.currentMonth -calulationInputs.startWorkMonth
var yearWork = calulationInputs.currentYear - calulationInputs.startWorkYear
var durationWork = ((monthWork+yearWork*12)/12).toFixed(2);
var monthClint = calulationInputs.currentMonth -calulationInputs.birthMonth
var yearClint = calulationInputs.currentYear - calulationInputs.birthYear
var ageClint = ((monthClint+yearClint*12)/12).toFixed(2);

   //الاعمار التقاعديه 
var array1= [77,60,60,44,46,48,50,52,44,46,48,50,52]     
var array2 =["متقاعد","مدني","خاص","جندي","عريف","وكيل رقيب","رقيب","رئيس رقباء","ملازم","نقيب","رائد","عقيد","عميد"];    
var array3= [0,77,77,70,70,70,70,70,77,77,77,77,77]                      
var numberJob=array2.indexOf(calulationInputs.job);              
var ageBeforeRetirement =array1.at(numberJob)  



//  لحساب اقصي مده بعد التقاعد لنهايه التمويل
if(calulationInputs.financingType=="normal"){              
  var agePercentageAfterRetirement=0;
  
}else{
 agePercentageAfterRetirement=array3.at(numberJob) 
}

//اقصي مده للتمويل مدعوم وغير مدعوم وباقه
if(calulationInputs.housingSupport=="monthly"||calulationInputs.housingSupport=="baqa"){
  var maxDuration=300;
}else{
      maxDuration =360;
}
// حساب المده المتبقيه الي التقاعد الفعلي
var durationBefore=(ageBeforeRetirement -ageClint)*12;    
if(calulationInputs.netSalary==0){
 
  var maxxDurationBefore=0;         
}else if(calulationInputs.editTotalDuration==""){
  maxxDurationBefore=Math.min(durationBefore,maxDuration);
}else{
  maxxDurationBefore=Math.min(calulationInputs.editTotalDuration,durationBefore,maxDuration);
}

//  لحساب اقصي مده بعد التقاعد لنهايه التمويل
if(calulationInputs.financingType=="normal"){               
  var durationAfter=0;
}else{
    durationAfter = (agePercentageAfterRetirement-ageBeforeRetirement)*12; 
}                   

//  لحساب اقصي مده بعد التقاعد لنهايه التمويل
if(calulationInputs.financingType=="afterRetirement" &&calulationInputs.job=="متقاعد"||calulationInputs.netSalary==0 ){              
  var maxxDurationAfter=0;
}else if(calulationInputs.editTotalDuration==""){
var maxxDurationAfter = Math.min(durationAfter,maxDuration-maxxDurationBefore);               
}else{
  var maxxDurationAfter = Math.min(durationAfter,maxDuration-maxxDurationBefore,calulationInputs.editTotalDuration-maxxDurationBefore);    
}




//اجمالي مده التمويل
var totalDuration = maxxDurationAfter + maxxDurationBefore;                
console.log(totalDuration)

 

//مصفوفه نسب الفوائد اولا المدعوم
var durationRealEstates =[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]                      // المده بالسنوات
var arr1=[4.00,4.00,4.06,4.12,4.18,4.24,4.30,4.36,4.43,4.49,4.56,4.62,4.62,4.62,4.62,4.62,4.62]   //نسب الفوائد للمدعوم
var arr11 =[3.78,3.78,3.84,3.9,3.95,4.01,4.07,4.13,4.19,4.25,4.31,4.37,4.37,4.37,4.37,4.37,4.37] //ضمانات
//مصفوفه نسب الفوائد ثانيا غير المدعوم
 var durationRealEstates2 =[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
var arr2=[4.55,4.40,4.46,4.52,4.58,4.65,4.70,4.76,4.81,4.86,4.92,4.98,5.08,5.13,5.17,5.23,5.28,5.75,5.75,5.75,5.75,5.75]     // الغير مدعوم راتب اقل من 10 الف
var arr3=[4.05,3.90,3.96,4.02,4.08,4.15,4.20,4.26,4.31,4.36,4.42,4.48,4.58,4.63,4.67,4.73,4.78,5.15,5.15,5.15,5.15,5.15]     //الغير مدعوم راتب فوق 10 الف 

// تقريب مده التمويل الي الاعلي سنه 
 var totalDurationUP =Math.ceil(totalDuration/12)  



if( calulationInputs.typeException=="damanat"){
  var vl=durationRealEstates.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
  var profitRatioRealEstates1 =arr11.at(vl)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
}else if( calulationInputs.typeException=="damanatAndexception" &&calulationInputs.netSalary<15000 ){
      var vl=durationRealEstates.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates1 =(arr11.at(vl)-.2)                 // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
  }else if( calulationInputs.typeException=="damanatAndexception" &&calulationInputs.netSalary>=15000 ){
      var vl=durationRealEstates.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates1 =(arr11.at(vl)-.4)                  // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
     
}else{
  var vl=durationRealEstates.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
  var profitRatioRealEstates1 =arr1.at(vl)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
}


var v2=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
var profitRatioRealEstates2 =arr2.at(v2)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

var v3=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
var profitRatioRealEstates3 =arr3.at(v3)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

if(calulationInputs.netSalary==0){
  var profitRatioRealEstates=0; 
}else if(calulationInputs.editProfitRateRealEstate!=""){
var profitRatioRealEstates= calulationInputs.editProfitRateRealEstate;

}else if(calulationInputs.housingSupport=="monthly"){
  var profitRatioRealEstates=profitRatioRealEstates1;

}else if( calulationInputs.housingSupport=="baqa"){
  var profitRatioRealEstates=profitRatioRealEstates1;


}else if(calulationInputs.netSalary<=10000 && calulationInputs.housingSupport=="no" ){
  var profitRatioRealEstates=profitRatioRealEstates2;
}else{
  var profitRatioRealEstates=profitRatioRealEstates3; 
}


//المخرجات رابعا اظهار بعض المعلومات نسب الفوائد و الاستقطاع 
if(calulationInputs.typeException=="exception"&&calulationInputs.netSalary<15000){
  var profitRatioRealEstates1=(profitRatioRealEstates-.2);

}else if(calulationInputs.typeException=="exception"&&calulationInputs.netSalary>15000){
  var profitRatioRealEstates1=(profitRatioRealEstates-.4);

}else{
  var profitRatioRealEstates1=profitRatioRealEstates;
}



//   حساب مبلغ قسط الدعم اللي مش حقيقي  لتعديل مبلغ التمويل العقاري
if(housingSupport==0){                   
  var housingSupportNotReal=0
}else if(totalDuration<=240 ){                   
  var housingSupportNotReal=housingSupport
}else if(totalDuration>240 ){
  var housingSupportNotReal=(housingSupport*240)/(totalDuration)
}else{
  var housingSupportNotReal=0
}

//حساب الراتب التقاعدي
if(calulationInputs.job==array2.at(1) ){
  var salaryAfter=(calulationInputs.basicSalary*(12*durationWork+durationBefore))/480;

}else if(calulationInputs.job==array2.at(2)){
  var salaryAfter=(calulationInputs.basicSalary*(calulationInputs.durationIn+durationBefore))/480;
}else if(calulationInputs.job==array2.at(0)){
 var salaryAfter=0;    

}else{
  var salaryAfter =(calulationInputs.basicSalary*(12*durationWork+durationBefore))/420;
}


 // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد 
 if(calulationInputs.editPercentageBeforeRetirement==""){
  var precentBeforeEdit1=100;
}else{
  var precentBeforeEdit1=calulationInputs.editPercentageBeforeRetirement
}

// يدويا تعديل نسبه الاستقطاع طبقا لمدخلات بعد التقاعد 
if(calulationInputs.editPercentageAfterRetirement==""){
  var precentAfterEdit1=100;
}else{
  var precentAfterEdit1=calulationInputs.editPercentageAfterRetirement
}

//اقص نسبه استقطاع قبل و بعد التقاعد للمدعوم و غير المدعوم و ايضا قيمه الباقه
if(calulationInputs.netSalary==0){
  var b= 0;
  var precentBefore =0;
  var precentAfter =0;

}else if(calulationInputs.netSalary==0 && calulationInputs.housingSupport=="monthly" ){
  var b= 0;
  var precentBefore = Math.min(65,precentBeforeEdit1)
  var precentAfter = Math.min(65,precentAfterEdit1)

}else if(calulationInputs.netSalary!=0 && calulationInputs.housingSupport=="monthly" ){
  var b= 0;
  var precentBefore = Math.min(65,precentBeforeEdit1)
   var precentAfter = Math.min(65,precentAfterEdit1)

}else if(calulationInputs.netSalary>=10000 && calulationInputs.housingSupport=="baqa"&& calulationInputs.editAmountHousingSupportBaqa!="" ){
    var b= calulationInputs.editAmountHousingSupportBaqa;
    if(calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter>=15000){
      var precentBefore =Math.min(65,precentBeforeEdit1) 
      var precentAfter = Math.min(65,precentAfterEdit1)
      }else if (calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter<=15000){
         var precentBefore =Math.min(65,precentBeforeEdit1) 
         var precentAfter = Math.min(65,precentAfterEdit1)
      }else {
         var precentBefore =Math.min(65,precentBeforeEdit1) 
         var precentAfter = Math.min(65,precentAfterEdit1)
      }
   
}else if(calulationInputs.netSalary>=10000 && calulationInputs.housingSupport=="baqa" ){
   var b= 100000;
   if(calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter>=15000){
   var precentBefore =Math.min(65,precentBeforeEdit1) 
   var precentAfter = Math.min(65,precentAfterEdit1)
   }else if (calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter<=15000){
      var precentBefore =Math.min(65,precentBeforeEdit1) 
      var precentAfter = Math.min(65,precentAfterEdit1)
   }else {
      var precentBefore =Math.min(65,precentBeforeEdit1) 
      var precentAfter = Math.min(65,precentAfterEdit1)
   }
 }else if(calulationInputs.netSalary<10000 && calulationInputs.housingSupport=="baqa" && calulationInputs.editAmountHousingSupportBaqa!=""){
    var b = calulationInputs.editAmountHousingSupportBaqa;
    var precentBefore = Math.min(65,precentBeforeEdit1)
    var precentAfter = Math.min(65,precentAfterEdit1)
  

}else if(calulationInputs.netSalary<10000 && calulationInputs.housingSupport=="baqa" ){
  var b = 150000;
  var precentBefore = Math.min(65,precentBeforeEdit1)
  var precentAfter = Math.min(65,precentAfterEdit1)

}else if(calulationInputs.netSalary>=15000 &&salaryAfter>=15000 && calulationInputs.housingSupport=="no"){
 var b =0;
 var precentBefore = Math.min(65,precentBeforeEdit1)
 var precentAfter = Math.min(65,precentAfterEdit1)
 
}else if(calulationInputs.netSalary>=15000 && salaryAfter<15000 && calulationInputs.housingSupport=="no"){
  var b =0;
  var precentBefore = Math.min(65,precentBeforeEdit1)
  var precentAfter = Math.min(55,precentAfterEdit1) 

}else{
  var b =0 ;
  var precentBefore = Math.min(55,precentBeforeEdit1)
  var precentAfter = Math.min(55,precentAfterEdit1)
};



//التمويل الشخصي اولا حساب القسط 
if(calulationInputs.newPersonalFinance=="yesNewPrsonal"&& calulationInputs.editPersonalInstallment==""){

    if(calulationInputs.job==array2.at(0)){
      var personInstallment=.25*calulationInputs.netSalary;    
 
     }else{
     var personInstallment=.33*calulationInputs.netSalary; 

     } 
}else if(calulationInputs.newPersonalFinance=="yesNewPrsonal")  {
    var personInstallment=calulationInputs.editPersonalInstallment;

}else{
    var personInstallment=0;  
}

//التمويل الشخصي ثانيا حساب المدة
if(calulationInputs.newPersonalFinance=="yesNewPrsonal" && calulationInputs.netSalary!=0 && calulationInputs.editDurationPersonal=="" ){
    var durationPerson=Math.min(60,durationBefore);     //بالشهر
}else if(calulationInputs.newPersonalFinance=="yesNewPrsonal" && calulationInputs.netSalary!=0 && calulationInputs.editDurationPersonal!="" ){
    var durationPerson=Math.min(60,durationBefore,calulationInputs.editDurationPersonal);
}else{
    var durationPerson=0; 
}

//التمويل الشخصي ثالثا حساب مبلغ التمويل 

//نسب الفوائد
if(calculation.job=="مدني"||calulationInputs.job=="متقاعد"){
  var prcentPrsonaFinal=5;
}else if(calulationInputs.job=="خاص"){
   var prcentPrsonaFinal=5+0.6 
}else{
   var prcentPrsonaFinal=5+0.75  
}





if(calulationInputs.netSalary==0){
   var profitadd=0; 
}else if(calulationInputs.editProfitRatePersonal!=""){
var profitadd= calulationInputs.editProfitRatePersonal*1;

}else{
   var profitadd=prcentPrsonaFinal; 
}








if(calulationInputs.newPersonalFinance=="yesNewPrsonal"){
  var PersonalFinance=(personInstallment*durationPerson)/(1+0.01*profitadd*(durationPerson/12)); 
    // التمويل الشخصي رابعا حساب فوائد الشخصي
  var profitPersonalFinance=(personInstallment*durationPerson)-PersonalFinance
}else{
  var PersonalFinance=0; 
  var profitPersonalFinance=0;
}





//مبلغ الالتزامات الحاليه 
var liabilities=calulationInputs.installment1*calulationInputs.duration1 +calulationInputs.installment2*calulationInputs.duration2+calulationInputs.installment3*calulationInputs.duration3+calulationInputs.installment4*calulationInputs.duration4+PersonalFinance+profitPersonalFinance; 
var sl5=personInstallment

// التمويل العقاري
// التمويل العقاري اولا حساب القسط الحقيقي
var installment =precentBefore*(1*calulationInputs.netSalary +1* housingSupport)/100 -calulationInputs.installment1-calulationInputs.installment2-calulationInputs.installment3-calulationInputs.installment4-sl5 ;
var installmentBefore =precentAfter*(1*calulationInputs.netSalary +1* housingSupport)/100;

if(calulationInputs.financingType=="normal"){               
    var installmentAfter=0;
}else if(calulationInputs.financingType=="afterRetirement" && maxxDurationBefore==0){            
    var installmentAfter=0;
}else if(calulationInputs.financingType=="afterRetirement" && calulationInputs.job=="متقاعد"){
    var installmentAfter=0;
}else{
var installmentAfter=precentAfter*(1*salaryAfter +1* housingSupport)/100;
}

//التمويل العقاري ثانيا حساب القسط الوهمي 
var installmentNotReal =precentBefore*(1*calulationInputs.netSalary  + 1*housingSupportNotReal)/100 ;
var installmentBeforeNotReal =precentBefore*(1*calulationInputs.netSalary +1*housingSupportNotReal)/100;
var installmentAfterNotReal=precentAfter*(1*salaryAfter +1* housingSupportNotReal)/100;





// التمويل العقاري ثالثا حساب مبلغ التمويل 
if(calulationInputs.typeException=="exception"&&calulationInputs.netSalary<15000){
    var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
    var netRealEstateFinance=totalRealEstateFinance/(1+((profitRatioRealEstates-0.2)*.01*(totalDuration/12)));

}else if(calulationInputs.typeException=="exception"&&calulationInputs.netSalary>15000){
    var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
    var netRealEstateFinance=totalRealEstateFinance/(1+((profitRatioRealEstates-.4)*.01*(totalDuration/12)));



}else{
    var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
    var netRealEstateFinance=totalRealEstateFinance/(1+(profitRatioRealEstates*.01*(totalDuration/12)));
}


//التمويل العقاري خامسا حساب فوائد للتمويل
var totalProfitEstateFinance=totalRealEstateFinance-netRealEstateFinance;
var netProfitEstateFinance=totalProfitEstateFinance-(housingSupport*Math.min(240,totalDuration));

// التمويل العقاري سادسا حساب  اجمالي المده للتمويل
var total=(netRealEstateFinance)+(PersonalFinance)+b






















if(calulationInputs.housingSupport=="baqa"){
  var outNameHosingSuppory="باقة الدعم"
  var amountHousingSupport=b
}else if (calulationInputs.housingSupport=="no"){
  var outNameHosingSuppory="الدعم السكني"
  var amountHousingSupport=0
}else{
  var outNameHosingSuppory ="قسط الدعم"
  var amountHousingSupport =housingSupport
}


setCalulationOutputs({...calulationOutputs,
  age:ageClint,
  work:durationWork,

 durationBeforeRetirement:maxxDurationBefore.toFixed(0),
  durationAfterRetirement:maxxDurationAfter.toFixed(0),
  totalDuration:totalDurationUP.toFixed(2),

  profitRateRealEstate:profitRatioRealEstates1,
  salaryAfterRetirement:new Intl.NumberFormat().format(salaryAfter.toFixed(0)), 
  percentageBeforeRetirement:precentBefore.toFixed(2),
  percentageAfterRetirement:precentAfter.toFixed(2),

  profitRatePersonal:profitadd,
  personalFinance:new Intl.NumberFormat().format(PersonalFinance.toFixed(0)),
  profitPersonal:new Intl.NumberFormat().format(profitPersonalFinance.toFixed(0)),
  amountHousingSupport:new Intl.NumberFormat().format(amountHousingSupport),

  realEstateFinance:new Intl.NumberFormat().format(netRealEstateFinance.toFixed(0)),
  total:new Intl.NumberFormat().format(total),
  firstInstallment:new Intl.NumberFormat().format(installment.toFixed(0)),
  installmentBeforeRetirement:new Intl.NumberFormat().format(installmentBefore.toFixed(0)),
  installmentAfterRetirement:new Intl.NumberFormat().format(installmentAfter.toFixed(0)),
  totalProfit:new Intl.NumberFormat().format(totalProfitEstateFinance.toFixed(0)),
  netProfit:new Intl.NumberFormat().format(netProfitEstateFinance.toFixed(0)),

  installmentPersonal :personInstallment,
  durationPersonal :durationPerson,
//تغير الكتابه

  nameAmountHousingSupport:outNameHosingSuppory,
});

















//==================بدايه الاهلي =========================//
  }else if(calulationInputs.realEstateBank==="alahli"){

    //  مصفوفه الدعم ع حسب الراتب
    var arrayHousingSupportSalary=[5000,5250,5500,5750,6000,6250,6500,6750,7000,7250,7500,7750,8000,8250,8500,8750,9000,9250,9500,9750,10000,10250,10500,10750,11000,11250,11500,12000,12500,13000,13500,14000,14500,15000]
    var arrayHousingSupport=[1069,1038,1009,979,951,924,898,871,846,823,799,775,754,731,710,690,670,651,633,614,596,579,563,546,531,515,501,473,445,420,416,416,416,416]
 
 
 
 //حساب قسط الدعم
 if(calulationInputs.netSalary==0 &&calulationInputs.housingSupport=="monthly" ){
   var housingSupport=0;
 }else if(calulationInputs.netSalary!=0 &&calulationInputs.housingSupport=="monthly"&&calulationInputs.editAmountHousingSupport!=""){
    housingSupport=calulationInputs.editAmountHousingSupport;
 }else if(calulationInputs.netSalary<=arrayHousingSupportSalary.at(0)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(0);
 
 }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(0)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(1)&& calulationInputs.housingSupport=="monthly" ){
    housingSupport=arrayHousingSupport.at(1);  
 }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(1)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(2)&& calulationInputs.housingSupport=="monthly" ){
    housingSupport=arrayHousingSupport.at(2);  
 }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(2)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(3)&& calulationInputs.housingSupport=="monthly" ){
   housingSupport=arrayHousingSupport.at(3);  
 }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(3)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(4)&& calulationInputs.housingSupport=="monthly" ){
    housingSupport=arrayHousingSupport.at(4);  
 }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(4)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(5)&& calulationInputs.housingSupport=="monthly" ){
    housingSupport=arrayHousingSupport.at(5);  
 }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(5)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(6)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(6);  
 }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(6)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(7)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(7); 
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(7)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(8)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(8);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(8)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(9)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(9);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(9)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(10)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(10);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(10)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(11)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(11);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(11)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(12)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(12);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(12)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(13)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(13);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(13)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(14)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(14);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(14)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(15)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(15);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(15)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(16)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(16);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(16)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(17)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(17);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(17)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(18)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(18);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(18)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(19)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(19);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(19)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(20)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(20);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(20)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(21)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(21);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(21)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(22)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(22);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(22)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(23)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(23);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(23)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(24)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(24);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(24)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(25)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(25);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(25)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(26)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(26);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(26)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(27)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(27);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(27)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(28)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(28);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(28)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(29)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(29);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(29)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(30)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(30);   
    }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(30)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(31)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(31);   
 }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(31)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(32)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(32);     
 }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(32)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(33);  
 }else{
     housingSupport=0
 }
 
 
    //حساب العمر و مده الخدمة
 var monthWork = calulationInputs.currentMonth -calulationInputs.startWorkMonth
 var yearWork = calulationInputs.currentYear - calulationInputs.startWorkYear
 var durationWork1 = ((monthWork+yearWork*12)/12);
 var durationWork = (durationWork1*354.334/365).toFixed(2);

 var monthClint = calulationInputs.currentMonth -calulationInputs.birthMonth
 var yearClint = calulationInputs.currentYear - calulationInputs.birthYear
 var ageClint1 = ((monthClint+yearClint*12)/12).toFixed(2);
 var ageClint =(ageClint1*354.334/365).toFixed(2);
 
    //الاعمار التقاعديه 
 var array1= [75,60,60,44,46,48,50,52,44,46,48,50,52]     
 var array2 =["متقاعد","مدني","خاص","جندي","عريف","وكيل رقيب","رقيب","رئيس رقباء","ملازم","نقيب","رائد","عقيد","عميد"];    
 var array3= [0,75,75,70,70,70,75,75,75,75,75,75,75]                      
 var numberJob=array2.indexOf(calulationInputs.job);              
 var ageBeforeRetirement =array1.at(numberJob)  
 

 
 //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
 if(calulationInputs.financingType=="normal"){              
   var agePercentageAfterRetirement=0;
   
 }else{
  agePercentageAfterRetirement=array3.at(numberJob) 
 }
 
 //اقصي مده للتمويل مدعوم وغير مدعوم وباقه
 if(calulationInputs.housingSupport=="monthly"||calulationInputs.housingSupport=="baqa"){
   var maxDuration=300;
 }else{
       maxDuration =360;
 }
 // حساب المده المتبقيه الي التقاعد الفعلي
 var durationBefore=(ageBeforeRetirement -ageClint)*12; 
 var durationBefore1=(ageBeforeRetirement -ageClint1)*12;      
 if(calulationInputs.netSalary==0){
  
   var maxxDurationBefore=0;         
 }else if(calulationInputs.editTotalDuration==""){
   maxxDurationBefore=Math.min(durationBefore,maxDuration);
 }else{
   maxxDurationBefore=Math.min(calulationInputs.editTotalDuration,durationBefore,maxDuration);
 }
 
 //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
 if(calulationInputs.financingType=="normal"){               
   var durationAfter=0;
 }else{
     durationAfter = (agePercentageAfterRetirement-ageBeforeRetirement)*12; 
 }                   
 
 //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
 if(calulationInputs.financingType=="afterRetirement" &&calulationInputs.job=="متقاعد"||calulationInputs.netSalary==0 ){              
   var maxxDurationAfter=0;
 }else if(calulationInputs.editTotalDuration==""){
 var maxxDurationAfter = Math.min(180,durationAfter,maxDuration-maxxDurationBefore);               
 }else{
   var maxxDurationAfter = Math.min(180,durationAfter,maxDuration-maxxDurationBefore,calulationInputs.editTotalDuration-maxxDurationBefore);    
 }
 
 
 
 
 //اجمالي مده التمويل
 var totalDuration = maxxDurationAfter + maxxDurationBefore;                
 console.log(totalDuration)
 
  
 
 //مصفوفه نسب الفوائد اولا المدعوم
 var durationRealEstates =[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]                      // المده بالسنوات
 var arr1=[4.11,4.11,4.17,4.22,4.28,4.34,4.41,4.47,4.53,4.6,4.67,4.73,4.73,4.73,4.73,4.73,4.73]   //نسب الفوائد للمدعوم

 //مصفوفه نسب الفوائد ثانيا غير المدعوم
  var durationRealEstates2 =[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
 var arr2=[4.31,4.37,4.4,4.42,4.48,4.54,4.61,4.67,4.73,4.78,4.87,4.93,5,5.07,5.14,5.21,5.28,5.35,5.42,5.49,5.56,5.63]      // الغير مدعوم راتب اقل من 10 الف
 var arr3=[4.61,4.67,4.7,4.72,4.78,4.84,4.91,4.97,5.03,5.08,5.17,5.23,5.3,5.37,5.44,5.51,5.58,5.65,5.72,5.79,5.86,5.93]     //الغير مدعوم راتب فوق 10 الف 
 
 // تقريب مده التمويل الي الاعلي سنه 
  var totalDurationUP =Math.ceil(totalDuration/12)  
 
 
 

   var vl=durationRealEstates.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
   var profitRatioRealEstates1 =arr1.at(vl)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

 
 
 var v2=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
 var profitRatioRealEstates2 =arr2.at(v2)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
 
 var v3=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
 var profitRatioRealEstates3 =arr3.at(v3)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
 







 if(calulationInputs.netSalary==0){
   var profitRatioRealEstates=0; 
 }else if(calulationInputs.editProfitRateRealEstate!=""){
 var profitRatioRealEstates= calulationInputs.editProfitRateRealEstate;
 
 }else if(calulationInputs.housingSupport=="monthly"||calulationInputs.housingSupport=="baqa"){
   var profitRatioRealEstates=profitRatioRealEstates1;
 
 }else if(calulationInputs.housingSupport=="no"&&calulationInputs.currentBank=="alahli"){
   var profitRatioRealEstates=profitRatioRealEstates1;
 
 }else{
   var profitRatioRealEstates=profitRatioRealEstates3; 
 }

 //   حساب مبلغ قسط الدعم اللي مش حقيقي  لتعديل مبلغ التمويل العقاري
 if(housingSupport==0){                   
   var housingSupportNotReal=0
 }else if(totalDuration<=240 ){                   
   var housingSupportNotReal=housingSupport
 }else if(totalDuration>240 ){
   var housingSupportNotReal=(housingSupport*240)/(totalDuration)
 }else{
   var housingSupportNotReal=0
 }
 



 if(calulationInputs.job==array2.at(0)){
  var salaryAfter=0;  
}else if (calulationInputs.job==array2.at(1)&&maxxDurationBefore>=60){
var salaryAfter=.8*(calulationInputs.netSalary);
}else if (calulationInputs.job==array2.at(1)&&maxxDurationBefore<60){
var salaryAfter=.7*(calulationInputs.netSalary);

}else if (calulationInputs.job==array2.at(2)&&maxxDurationBefore>=60){
  var salaryAfter=.8*(calulationInputs.netSalary);
}else if (calulationInputs.job==array2.at(2)&&maxxDurationBefore<60){
  var salaryAfter=.7*(calulationInputs.netSalary);

}else if (calulationInputs.job==array2.at(3)&&maxxDurationBefore>=60){
  var salaryAfter=.7*(calulationInputs.netSalary);
}else if (calulationInputs.job==array2.at(3)&&maxxDurationBefore<60){
  var salaryAfter=.6*(calulationInputs.netSalary);
}else if (calulationInputs.job==array2.at(4)&&maxxDurationBefore>=60){
  var salaryAfter=.7*(calulationInputs.netSalary);
}else if (calulationInputs.job==array2.at(4)&&maxxDurationBefore<60){
  var salaryAfter=.6*(calulationInputs.netSalary);
}else if (calulationInputs.job==array2.at(5)&&maxxDurationBefore>=60){
  var salaryAfter=.7*(calulationInputs.netSalary);
}else if (calulationInputs.job==array2.at(5)&&maxxDurationBefore<60){
  var salaryAfter=.6*(calulationInputs.netSalary);

}else if(maxxDurationBefore>=60){
  var salaryAfter=.8*(calulationInputs.netSalary);
}else {
  var salaryAfter=.7*(calulationInputs.netSalary); 
}


 
  // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد 
  if(calulationInputs.editPercentageBeforeRetirement==""){
   var precentBeforeEdit1=100;
 }else{
   var precentBeforeEdit1=calulationInputs.editPercentageBeforeRetirement
 }
 
 // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات بعد التقاعد 
 if(calulationInputs.editPercentageAfterRetirement==""){
   var precentAfterEdit1=100;
 }else{
   var precentAfterEdit1=calulationInputs.editPercentageAfterRetirement
 }
 
 //اقص نسبه استقطاع قبل و بعد التقاعد للمدعوم و غير المدعوم و ايضا قيمه الباقه
 if(calulationInputs.netSalary==0){
   var b= 0;
   var precentBefore =0;
   var precentAfter =0;
 
 }else if(calulationInputs.netSalary==0 && calulationInputs.housingSupport=="monthly" ){
   var b= 0;
   var precentBefore = Math.min(65,precentBeforeEdit1)
   var precentAfter = Math.min(65,precentAfterEdit1)
 
 }else if(calulationInputs.netSalary!=0 && calulationInputs.housingSupport=="monthly" ){
   var b= 0;
   var precentBefore = Math.min(65,precentBeforeEdit1)
    var precentAfter = Math.min(65,precentAfterEdit1)
 
 }else if(calulationInputs.netSalary>=10000 && calulationInputs.housingSupport=="baqa"&& calulationInputs.editAmountHousingSupportBaqa!="" ){
     var b= calulationInputs.editAmountHousingSupportBaqa;
     if(calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter>=15000){
       var precentBefore =Math.min(65,precentBeforeEdit1) 
       var precentAfter = Math.min(65,precentAfterEdit1)
       }else if (calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter<=15000){
          var precentBefore =Math.min(65,precentBeforeEdit1) 
          var precentAfter = Math.min(65,precentAfterEdit1)
       }else {
          var precentBefore =Math.min(65,precentBeforeEdit1) 
          var precentAfter = Math.min(65,precentAfterEdit1)
       }
    
 }else if(calulationInputs.netSalary>=10000 && calulationInputs.housingSupport=="baqa" ){
    var b= 100000;
    if(calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter>=15000){
    var precentBefore =Math.min(65,precentBeforeEdit1) 
    var precentAfter = Math.min(65,precentAfterEdit1)
    }else if (calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter<=15000){
       var precentBefore =Math.min(65,precentBeforeEdit1) 
       var precentAfter = Math.min(65,precentAfterEdit1)
    }else {
       var precentBefore =Math.min(65,precentBeforeEdit1) 
       var precentAfter = Math.min(65,precentAfterEdit1)
    }
  }else if(calulationInputs.netSalary<10000 && calulationInputs.housingSupport=="baqa" && calulationInputs.editAmountHousingSupportBaqa!=""){
     var b = calulationInputs.editAmountHousingSupportBaqa;
     var precentBefore = Math.min(65,precentBeforeEdit1)
     var precentAfter = Math.min(65,precentAfterEdit1)
   
 
 }else if(calulationInputs.netSalary<10000 && calulationInputs.housingSupport=="baqa" ){
   var b = 150000;
   var precentBefore = Math.min(65,precentBeforeEdit1)
   var precentAfter = Math.min(65,precentAfterEdit1)
 
 }else if(calulationInputs.netSalary>=15000 &&salaryAfter>=15000 && calulationInputs.housingSupport=="no"){
  var b =0;
  var precentBefore = Math.min(65,precentBeforeEdit1)
  var precentAfter = Math.min(65,precentAfterEdit1)
  
 }else if(calulationInputs.netSalary>=15000 && salaryAfter<15000 && calulationInputs.housingSupport=="no"){
   var b =0;
   var precentBefore = Math.min(65,precentBeforeEdit1)
   var precentAfter = Math.min(55,precentAfterEdit1) 
 
 }else{
   var b =0 ;
   var precentBefore = Math.min(55,precentBeforeEdit1)
   var precentAfter = Math.min(55,precentAfterEdit1)
 };
 
 
 
 //التمويل الشخصي اولا حساب القسط 
 if(calulationInputs.newPersonalFinance=="yesNewPrsonal"&& calulationInputs.editPersonalInstallment==""){
 
     if(calulationInputs.job==array2.at(0)){
       var personInstallment=.25*calulationInputs.netSalary;    
  
      }else{
      var personInstallment=.33*calulationInputs.netSalary; 
 
      } 
 }else if(calulationInputs.newPersonalFinance=="yesNewPrsonal")  {
     var personInstallment=calulationInputs.editPersonalInstallment;
 
 }else{
     var personInstallment=0;  
 }
 
 //التمويل الشخصي ثانيا حساب المدة
 if(calulationInputs.newPersonalFinance=="yesNewPrsonal" && calulationInputs.netSalary!=0 && calulationInputs.editDurationPersonal=="" ){
     var durationPerson=Math.min(60,durationBefore1);     //بالشهر
 }else if(calulationInputs.newPersonalFinance=="yesNewPrsonal" && calulationInputs.netSalary!=0 && calulationInputs.editDurationPersonal!="" ){
     var durationPerson=Math.min(60,durationBefore1,calulationInputs.editDurationPersonal);
 }else{
     var durationPerson=0; 
 }
 
 //التمويل الشخصي ثالثا حساب مبلغ التمويل 
 
 //نسب الفوائد
 if(calculation.job=="مدني"||calulationInputs.job=="متقاعد"){
   var prcentPrsonaFinal=5;
 }else if(calulationInputs.job=="خاص"){
    var prcentPrsonaFinal=5+0.6 ;
 }else{
    var prcentPrsonaFinal=5+0.75  ;
 }

 if(calulationInputs.netSalary==0){
    var profitadd=0; 
 }else if(calulationInputs.editProfitRatePersonal!=""){
 var profitadd= calulationInputs.editProfitRatePersonal*1;
 
 }else{
    var profitadd=prcentPrsonaFinal; 
 }
 
 
 
 
 
 
 
 
 if(calulationInputs.newPersonalFinance=="yesNewPrsonal"){
   var PersonalFinance=(personInstallment*durationPerson)/(1+0.01*profitadd*(durationPerson/12)); 
     // التمويل الشخصي رابعا حساب فوائد الشخصي
   var profitPersonalFinance=(personInstallment*durationPerson)-PersonalFinance
 }else{
   var PersonalFinance=0; 
   var profitPersonalFinance=0;
 }
 
 





 
 
 //مبلغ الالتزامات الحاليه 
 if(calulationInputs.newPersonalFinance=="yesNewPrsonal"){
 var liabilities=maxxDurationBefore*(calulationInputs.installment1+calulationInputs.installment2+calulationInputs.installment3+calulationInputs.installment4)+PersonalFinance+profitPersonalFinance; 
 var sl5=personInstallment
 }else{
  var liabilities=calulationInputs.installment1 *calulationInputs.duration1+ maxxDurationBefore*(calulationInputs.installment2+calulationInputs.installment3+calulationInputs.installment4); 
  var sl5=0

 }
 // التمويل العقاري
 // التمويل العقاري اولا حساب القسط الحقيقي

if( calulationInputs.newPersonalFinance=="yesNewPrsonal"){
  var zxx=calulationInputs.installment1+calulationInputs.installment2+calulationInputs.installment3+calulationInputs.installment4
 

}else {
    var zxx=calulationInputs.installment2+calulationInputs.installment3+calulationInputs.installment4 ;
    var sl5=0;
 
}


//التمويل العقاري ثانيا حساب القسط الوهمي 





 var installment =precentBefore*(1*calulationInputs.netSalary +1* housingSupport)/100 -calulationInputs.installment1-calulationInputs.installment2-calulationInputs.installment3-calulationInputs.installment4-sl5 ;
 var installmentBefore =precentAfter*(1*calulationInputs.netSalary +1* housingSupport)/100-zxx;
 
 if(calulationInputs.financingType=="normal"){               
     var installmentAfter=0;
 }else if(calulationInputs.financingType=="afterRetirement" && maxxDurationBefore==0){            
     var installmentAfter=0;
 }else if(calulationInputs.financingType=="afterRetirement" && calulationInputs.job=="متقاعد"){
     var installmentAfter=0;
 }else{
 var installmentAfter=precentAfter*(1*salaryAfter +2* housingSupport)/100;
 }
 
 //التمويل العقاري ثانيا حساب القسط الوهمي 
 var installmentNotReal =precentBefore*(1*calulationInputs.netSalary  + 1*housingSupportNotReal)/100 ;
 var installmentBeforeNotReal =precentBefore*(1*calulationInputs.netSalary +1*housingSupportNotReal)/100;
 var installmentAfterNotReal=precentAfter*(1*salaryAfter +2* housingSupportNotReal)/100;
 
 
 
 
 
 // التمويل العقاري ثالثا حساب مبلغ التمويل 
 if(calulationInputs.typeException=="exception"&&calulationInputs.netSalary<15000){
     var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
     var netRealEstateFinance=totalRealEstateFinance/(1+((profitRatioRealEstates-0.2)*.01*(totalDuration/12)));
 
 }else if(calulationInputs.typeException=="exception"&&calulationInputs.netSalary>15000){
     var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
     var netRealEstateFinance=totalRealEstateFinance/(1+((profitRatioRealEstates-.4)*.01*(totalDuration/12)));
 
 
 
 }else{
     var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
     var netRealEstateFinance=totalRealEstateFinance/(1+(profitRatioRealEstates*.01*(totalDuration/12)));
 }
 
 
 //التمويل العقاري خامسا حساب فوائد للتمويل
 var totalProfitEstateFinance=totalRealEstateFinance-netRealEstateFinance;
 var netProfitEstateFinance=totalProfitEstateFinance-(housingSupport*Math.min(240,totalDuration));
 
 // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
 var total=(netRealEstateFinance)+(PersonalFinance)+b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 if(calulationInputs.housingSupport=="baqa"){
   var outNameHosingSuppory="باقة الدعم"
   var amountHousingSupport=b
 }else if (calulationInputs.housingSupport=="no"){
   var outNameHosingSuppory="الدعم السكني"
   var amountHousingSupport=0
 }else{
   var outNameHosingSuppory ="قسط الدعم"
   var amountHousingSupport =housingSupport
 }
 
 
 setCalulationOutputs({...calulationOutputs,
   age:ageClint,
   work:durationWork,
 
  durationBeforeRetirement:maxxDurationBefore.toFixed(0),
   durationAfterRetirement:maxxDurationAfter.toFixed(0),
   totalDuration:totalDurationUP.toFixed(2),
 
   profitRateRealEstate:profitRatioRealEstates1,
   salaryAfterRetirement:new Intl.NumberFormat().format(salaryAfter.toFixed(0)), 
   percentageBeforeRetirement:precentBefore.toFixed(2),
   percentageAfterRetirement:precentAfter.toFixed(2),
 
   profitRatePersonal:profitadd,
   personalFinance:new Intl.NumberFormat().format(PersonalFinance.toFixed(0)),
   profitPersonal:new Intl.NumberFormat().format(profitPersonalFinance.toFixed(0)),
   amountHousingSupport:new Intl.NumberFormat().format(amountHousingSupport),
 
   realEstateFinance:new Intl.NumberFormat().format(netRealEstateFinance.toFixed(0)),
   total:new Intl.NumberFormat().format(total),
   firstInstallment:new Intl.NumberFormat().format(installment.toFixed(0)),
   installmentBeforeRetirement:new Intl.NumberFormat().format(installmentBefore.toFixed(0)),
   installmentAfterRetirement:new Intl.NumberFormat().format(installmentAfter.toFixed(0)),
   totalProfit:new Intl.NumberFormat().format(totalProfitEstateFinance.toFixed(0)),
   netProfit:new Intl.NumberFormat().format(netProfitEstateFinance.toFixed(0)),
 
   installmentPersonal :personInstallment,
   durationPersonal :durationPerson,
 //تغير الكتابه
 
   nameAmountHousingSupport:outNameHosingSuppory,
 });
 





    //==================بدايه البلاد  =========================//
  }else if(calulationInputs.realEstateBank==="albilad"){

  
      //  مصفوفه الدعم ع حسب الراتب
     var arrayHousingSupportSalary=[3999,4999,5999,6999,7999,8999,9999,10000,10001]
     var arrayHousingSupport=[1350,1206,1073,955,850,757,673,599,416]
  
  
  
  //حساب قسط الدعم
  if(calulationInputs.netSalary==0 &&calulationInputs.housingSupport=="monthly" ){
    var housingSupport=0;
  }else if(calulationInputs.netSalary!=0 &&calulationInputs.housingSupport=="monthly"&&calulationInputs.editAmountHousingSupport!=""){
     housingSupport=calulationInputs.editAmountHousingSupport;
  }else if(calulationInputs.netSalary<=arrayHousingSupportSalary.at(0)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(0);
  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(0)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(1)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(1);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(1)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(2)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(2);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(2)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(3)&& calulationInputs.housingSupport=="monthly" ){
    housingSupport=arrayHousingSupport.at(3);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(3)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(4)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(4);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(4)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(5)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(5);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(5)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(6)&& calulationInputs.housingSupport=="monthly" ){
       housingSupport=arrayHousingSupport.at(6);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(6)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(7)&& calulationInputs.housingSupport=="monthly" ){
       housingSupport=arrayHousingSupport.at(7);   
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(8)&& calulationInputs.housingSupport=="monthly" ){
       housingSupport=arrayHousingSupport.at(8);  
  }else{
      housingSupport=0
  }
  
  
  
  
     //حساب العمر و مده الخدمة
  var monthWork = calulationInputs.currentMonth -calulationInputs.startWorkMonth
  var yearWork = calulationInputs.currentYear - calulationInputs.startWorkYear
  var durationWork = ((monthWork+yearWork*12)/12).toFixed(2);
  var monthClint = calulationInputs.currentMonth -calulationInputs.birthMonth
  var yearClint = calulationInputs.currentYear - calulationInputs.birthYear
  var ageClint = ((monthClint+yearClint*12)/12).toFixed(2);
  

//الاعمار التقاعديه 
if(calulationInputs.housingSupport=="monthly"||calulationInputs.housingSupport=="baqa"){    //متقاعد
  var ct =70;  
}else{
    var ct = 65;
}

     //الاعمار التقاعديه 
  var array1= [ct,60,60,44,46,48,50,52,44,46,48,50,52] 
  var arPlus2= [ct,60,60,44,46,50,52,54,46,48,50,52,54]     
  var array2 =["متقاعد","مدني","خاص","جندي","عريف","وكيل رقيب","رقيب","رئيس رقباء","ملازم","نقيب","رائد","عقيد","عميد"];    
  var array3= [0,70,70,70,70,70,70,70,70,70,70,70,70]                     
  var numberJob=array2.indexOf(calulationInputs.job);              
  var ageBeforeRetirement =array1.at(numberJob)  
  var ageBeforeRetirementPlus=arPlus2.at(numberJob)
  
  
  
  //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
  if(calulationInputs.financingType=="normal"){              
    var agePercentageAfterRetirement=0;
    
  }else{
   agePercentageAfterRetirement=array3.at(numberJob) 
  }
  
  //اقصي مده للتمويل مدعوم وغير مدعوم وباقه
  if(calulationInputs.housingSupport=="monthly"||calulationInputs.housingSupport=="baqa"){
    var maxDuration=300;
  }else{
        maxDuration =300;
  }
  // حساب المده المتبقيه الي التقاعد الفعلي

if(calulationInputs.financingType=="normal" && calulationInputs.housingSupport=="monthly"){
  var durationBefore=(ageBeforeRetirementPlus -ageClint)*12; 
  }else {
    var durationBefore=(ageBeforeRetirement -ageClint)*12; 
  }
  
   
  if(calulationInputs.netSalary==0){
   
    var maxxDurationBefore=0;         
  }else if(calulationInputs.editTotalDuration==""){
    maxxDurationBefore=Math.min(durationBefore,maxDuration);
  }else{
    maxxDurationBefore=Math.min(calulationInputs.editTotalDuration,durationBefore,maxDuration);
  }
  
  //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
  if(calulationInputs.financingType=="normal"){               
    var durationAfter=0;
  }else{
      durationAfter = (agePercentageAfterRetirement-ageBeforeRetirement)*12; 
  }                   
  
  //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
  if(calulationInputs.financingType=="afterRetirement" &&calulationInputs.job=="متقاعد"||calulationInputs.netSalary==0 ){              
    var maxxDurationAfter=0;
  }else if(calulationInputs.editTotalDuration==""){
  var maxxDurationAfter = Math.min(durationAfter,maxDuration-maxxDurationBefore);               
  }else{
    var maxxDurationAfter = Math.min(durationAfter,maxDuration-maxxDurationBefore,calulationInputs.editTotalDuration-maxxDurationBefore);    
  }
  
  
  
  
  //اجمالي مده التمويل
  var totalDuration = maxxDurationAfter + maxxDurationBefore;                
  console.log(totalDuration)
  
   
  
  //مصفوفه نسب الفوائد اولا المدعوم
  var durationRealEstates =[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]                      // المده بالسنوات
  var arr1=[4.3,4.3,4.33,4.35,4.36,4.38,4.4,4.43,4.45,4.46,4.48,4.5,4.6,4.6,4.6,4.6,4.6]   //نسب الفوائد للمدعوم

  //مصفوفه نسب الفوائد ثانيا غير المدعوم
   var durationRealEstates2 =[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  var arr2=[4.4,4.4,4.42,4.45,4.47,4.49,4.5,4.52,4.55,4.57,4.59,4.6,4.62,4.65,4.67,4.69,4.7]     //الغير مدعوم  البنك  
  var arr3=[4.45,4.45,4.47,4.49,4.5,4.52,4.55,4.57,4.6,4.62,4.64,4.65,4.67,4.69,4.72,4.74,4.75]      //الغير مدعوم خارج البنك  
  
  // تقريب مده التمويل الي الاعلي سنه 
   var totalDurationUP =Math.ceil(totalDuration/12)  
  

   

 
    var vl=durationRealEstates.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
    var profitRatioRealEstates1 =arr1.at(vl)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
  var v2=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
  var profitRatioRealEstates2 =arr2.at(v2)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
  
  var v3=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
  var profitRatioRealEstates3 =arr3.at(v3)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
  









  if(calulationInputs.netSalary==0){
    var profitRatioRealEstates=0; 
  }else if(calulationInputs.editProfitRateRealEstate!=""){
  var profitRatioRealEstates= calulationInputs.editProfitRateRealEstate;
  
  }else if(calulationInputs.housingSupport=="monthly"){
    var profitRatioRealEstates=profitRatioRealEstates1;
  
  }else if( calulationInputs.housingSupport=="baqa"){
    var profitRatioRealEstates=profitRatioRealEstates1;
  

  }else if(calulationInputs.currentBank== "albilad" && calulationInputs.housingSupport=="no" ){
    var profitRatioRealEstates=profitRatioRealEstates2;
  }else{
    var profitRatioRealEstates=profitRatioRealEstates3; 
  }
  
  

    var profitRatioRealEstates1=profitRatioRealEstates;

  
  
  
  //   حساب مبلغ قسط الدعم اللي مش حقيقي  لتعديل مبلغ التمويل العقاري
  if(housingSupport==0){                   
    var housingSupportNotReal=0
  }else if(totalDuration<=240 ){                   
    var housingSupportNotReal=housingSupport
  }else if(totalDuration>240 ){
    var housingSupportNotReal=(housingSupport*240)/(totalDuration)
  }else{
    var housingSupportNotReal=0
  }
  
  //حساب الراتب التقاعدي
  if(calulationInputs.job==array2.at(1) ){
    var salaryAfter=(calulationInputs.basicSalary*(12*durationWork+durationBefore))/480;
  
  }else if(calulationInputs.job==array2.at(2)){
    var salaryAfter=(calulationInputs.basicSalary*(calulationInputs.durationIn+durationBefore))/480;
  }else if(calulationInputs.job==array2.at(0)){
   var salaryAfter=0;    
  
  }else{
    var salaryAfter =(calulationInputs.basicSalary*(12*durationWork+durationBefore))/420;
  }
  
  
   // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد 
   if(calulationInputs.editPercentageBeforeRetirement==""){
    var precentBeforeEdit1=100;
  }else{
    var precentBeforeEdit1=calulationInputs.editPercentageBeforeRetirement
  }
  
  // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات بعد التقاعد 
  if(calulationInputs.editPercentageAfterRetirement==""){
    var precentAfterEdit1=100;
  }else{
    var precentAfterEdit1=calulationInputs.editPercentageAfterRetirement
  }
  
  //اقص نسبه استقطاع قبل و بعد التقاعد للمدعوم و غير المدعوم و ايضا قيمه الباقه
  if(calulationInputs.netSalary==0){
    var b= 0;
    var precentBefore =0;
    var precentAfter =0;
  
  }else if(calulationInputs.netSalary==0 && calulationInputs.housingSupport=="monthly" ){
    var b= 0;
    var precentBefore = Math.min(65,precentBeforeEdit1)
    var precentAfter = Math.min(65,precentAfterEdit1)
  
  }else if(calulationInputs.netSalary!=0 && calulationInputs.housingSupport=="monthly" ){
    var b= 0;
    var precentBefore = Math.min(65,precentBeforeEdit1)
     var precentAfter = Math.min(65,precentAfterEdit1)
  
  }else if(calulationInputs.netSalary>=10000 && calulationInputs.housingSupport=="baqa"&& calulationInputs.editAmountHousingSupportBaqa!="" ){
      var b= calulationInputs.editAmountHousingSupportBaqa;
      if(calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter>=15000){
        var precentBefore =Math.min(65,precentBeforeEdit1) 
        var precentAfter = Math.min(65,precentAfterEdit1)
        }else if (calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter<=15000){
           var precentBefore =Math.min(65,precentBeforeEdit1) 
           var precentAfter = Math.min(55,precentAfterEdit1)
        }else {
           var precentBefore =Math.min(55,precentBeforeEdit1) 
           var precentAfter = Math.min(55,precentAfterEdit1)
        }
     
  }else if(calulationInputs.netSalary>=10000 && calulationInputs.housingSupport=="baqa" ){
     var b= 100000;
     if(calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter>=15000){
     var precentBefore =Math.min(65,precentBeforeEdit1) 
     var precentAfter = Math.min(65,precentAfterEdit1)
     }else if (calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter<=15000){
        var precentBefore =Math.min(65,precentBeforeEdit1) 
        var precentAfter = Math.min(55,precentAfterEdit1)
     }else {
        var precentBefore =Math.min(55,precentBeforeEdit1) 
        var precentAfter = Math.min(55,precentAfterEdit1)
     }
   }else if(calulationInputs.netSalary<10000 && calulationInputs.housingSupport=="baqa" && calulationInputs.editAmountHousingSupportBaqa!=""){
      var b = calulationInputs.editAmountHousingSupportBaqa;
      var precentBefore = Math.min(55,precentBeforeEdit1)
      var precentAfter = Math.min(55,precentAfterEdit1)
    
  
  }else if(calulationInputs.netSalary<10000 && calulationInputs.housingSupport=="baqa" ){
    var b = 150000;
    var precentBefore = Math.min(55,precentBeforeEdit1)
    var precentAfter = Math.min(55,precentAfterEdit1)
  
  }else if(calulationInputs.netSalary>=15000 &&salaryAfter>=15000 && calulationInputs.housingSupport=="no"){
   var b =0;
   var precentBefore = Math.min(65,precentBeforeEdit1)
   var precentAfter = Math.min(65,precentAfterEdit1)
   
  }else if(calulationInputs.netSalary>=15000 && salaryAfter<15000 && calulationInputs.housingSupport=="no"){
    var b =0;
    var precentBefore = Math.min(65,precentBeforeEdit1)
    var precentAfter = Math.min(55,precentAfterEdit1) 
  
  }else{
    var b =0 ;
    var precentBefore = Math.min(55,precentBeforeEdit1)
    var precentAfter = Math.min(55,precentAfterEdit1)
  };
  
  
  
  //التمويل الشخصي اولا حساب القسط 
  if(calulationInputs.newPersonalFinance=="yesNewPrsonal"&& calulationInputs.editPersonalInstallment==""){
  
      if(calulationInputs.job==array2.at(0)){
        var personInstallment=.25*calulationInputs.netSalary;    
   
       }else{
       var personInstallment=.33*calulationInputs.netSalary; 
  
       } 
  }else if(calulationInputs.newPersonalFinance=="yesNewPrsonal")  {
      var personInstallment=calulationInputs.editPersonalInstallment;
  
  }else{
      var personInstallment=0;  
  }
  
  //التمويل الشخصي ثانيا حساب المدة
  if(calulationInputs.newPersonalFinance=="yesNewPrsonal" && calulationInputs.netSalary!=0 && calulationInputs.editDurationPersonal=="" ){
      var durationPerson=Math.min(60,durationBefore);     //بالشهر
  }else if(calulationInputs.newPersonalFinance=="yesNewPrsonal" && calulationInputs.netSalary!=0 && calulationInputs.editDurationPersonal!="" ){
      var durationPerson=Math.min(60,durationBefore,calulationInputs.editDurationPersonal);
  }else{
      var durationPerson=0; 
  }
  
  //التمويل الشخصي ثالثا حساب مبلغ التمويل 
  
  //نسب الفوائد
  if(calculation.job=="مدني"||calulationInputs.job=="متقاعد"){
    var prcentPrsonaFinal=5;
  }else if(calulationInputs.job=="خاص"){
     var prcentPrsonaFinal=5+0.6 
  }else{
     var prcentPrsonaFinal=5+0.75  
  }
  
  
  
  
  
  if(calulationInputs.netSalary==0){
     var profitadd=0; 
  }else if(calulationInputs.editProfitRatePersonal!=""){
  var profitadd= calulationInputs.editProfitRatePersonal*1;
  
  }else{
     var profitadd=prcentPrsonaFinal; 
  }
  
  
  
  
  
  
  
  
  if(calulationInputs.newPersonalFinance=="yesNewPrsonal"){
    var PersonalFinance=(personInstallment*durationPerson)/(1+0.01*profitadd*(durationPerson/12)); 
      // التمويل الشخصي رابعا حساب فوائد الشخصي
    var profitPersonalFinance=(personInstallment*durationPerson)-PersonalFinance
  }else{
    var PersonalFinance=0; 
    var profitPersonalFinance=0;
  }
  
  
  
  
  
  //مبلغ الالتزامات الحاليه 
  var liabilities=calulationInputs.installment1*calulationInputs.duration1 +calulationInputs.installment2*calulationInputs.duration2+calulationInputs.installment3*calulationInputs.duration3+calulationInputs.installment4*calulationInputs.duration4+PersonalFinance+profitPersonalFinance; 
  var sl5=personInstallment
  
  // التمويل العقاري
  // التمويل العقاري اولا حساب القسط الحقيقي
  var installment =precentBefore*(1*calulationInputs.netSalary +1* housingSupport)/100 -calulationInputs.installment1-calulationInputs.installment2-calulationInputs.installment3-calulationInputs.installment4-sl5 ;
  var installmentBefore =precentAfter*(1*calulationInputs.netSalary +1* housingSupport)/100;
  
  if(calulationInputs.financingType=="normal"){               
      var installmentAfter=0;
  }else if(calulationInputs.financingType=="afterRetirement" && maxxDurationBefore==0){            
      var installmentAfter=0;
  }else if(calulationInputs.financingType=="afterRetirement" && calulationInputs.job=="متقاعد"){
      var installmentAfter=0;
  }else{
  var installmentAfter=precentAfter*(1*salaryAfter +0)/100;
  }
  
  //التمويل العقاري ثانيا حساب القسط الوهمي 
  var installmentNotReal =precentBefore*(1*calulationInputs.netSalary  + 1*housingSupportNotReal)/100 ;
  var installmentBeforeNotReal =precentBefore*(1*calulationInputs.netSalary +1*housingSupportNotReal)/100;
  var installmentAfterNotReal=precentAfter*(1*salaryAfter +1* 0)/100;
  
  
  
  
  
  // التمويل العقاري ثالثا حساب مبلغ التمويل 
  if(calulationInputs.typeException=="exception"&&calulationInputs.netSalary<15000){
      var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
      var netRealEstateFinance=totalRealEstateFinance/(1+((profitRatioRealEstates-0.2)*.01*(totalDuration/12)));
  
  }else if(calulationInputs.typeException=="exception"&&calulationInputs.netSalary>15000){
      var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
      var netRealEstateFinance=totalRealEstateFinance/(1+((profitRatioRealEstates-.4)*.01*(totalDuration/12)));
  
  
  
  }else{
      var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
      var netRealEstateFinance=totalRealEstateFinance/(1+(profitRatioRealEstates*.01*(totalDuration/12)));
  }
  
  
  //التمويل العقاري خامسا حساب فوائد للتمويل
  var totalProfitEstateFinance=totalRealEstateFinance-netRealEstateFinance;
  var netProfitEstateFinance=totalProfitEstateFinance-(housingSupport*Math.min(240,totalDuration));
  
  // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
  var total=(netRealEstateFinance)+(PersonalFinance)+b
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if(calulationInputs.housingSupport=="baqa"){
    var outNameHosingSuppory="باقة الدعم"
    var amountHousingSupport=b
  }else if (calulationInputs.housingSupport=="no"){
    var outNameHosingSuppory="الدعم السكني"
    var amountHousingSupport=0
  }else{
    var outNameHosingSuppory ="قسط الدعم"
    var amountHousingSupport =housingSupport
  }
  
  
  setCalulationOutputs({...calulationOutputs,
    age:ageClint,
    work:durationWork,
  
   durationBeforeRetirement:maxxDurationBefore.toFixed(0),
    durationAfterRetirement:maxxDurationAfter.toFixed(0),
    totalDuration:totalDurationUP.toFixed(2),
  
    profitRateRealEstate:profitRatioRealEstates1,
    salaryAfterRetirement:new Intl.NumberFormat().format(salaryAfter.toFixed(0)), 
    percentageBeforeRetirement:precentBefore.toFixed(2),
    percentageAfterRetirement:precentAfter.toFixed(2),
  
    profitRatePersonal:profitadd,
    personalFinance:new Intl.NumberFormat().format(PersonalFinance.toFixed(0)),
    profitPersonal:new Intl.NumberFormat().format(profitPersonalFinance.toFixed(0)),
    amountHousingSupport:new Intl.NumberFormat().format(amountHousingSupport),
  
    realEstateFinance:new Intl.NumberFormat().format(netRealEstateFinance.toFixed(0)),
    total:new Intl.NumberFormat().format(total),
    firstInstallment:new Intl.NumberFormat().format(installment.toFixed(0)),
    installmentBeforeRetirement:new Intl.NumberFormat().format(installmentBefore.toFixed(0)),
    installmentAfterRetirement:new Intl.NumberFormat().format(installmentAfter.toFixed(0)),
    totalProfit:new Intl.NumberFormat().format(totalProfitEstateFinance.toFixed(0)),
    netProfit:new Intl.NumberFormat().format(netProfitEstateFinance.toFixed(0)),
  
    installmentPersonal :personInstallment,
    durationPersonal :durationPerson,
  //تغير الكتابه
  
    nameAmountHousingSupport:outNameHosingSuppory,
  });
  

    //==================بدايه ساب =========================//
  }else if(calulationInputs.realEstateBank==="sab"){


      //  مصفوفه الدعم ع حسب الراتب
     var arrayHousingSupportSalary=[3999,4999,5999,6999,7999,8999,9999,10000,10001]
     var arrayHousingSupport=[1350,1206,1073,955,850,757,673,599,416]
  
  
  
  //حساب قسط الدعم
  if(calulationInputs.netSalary==0 &&calulationInputs.housingSupport=="monthly" ){
    var housingSupport=0;
  }else if(calulationInputs.netSalary!=0 &&calulationInputs.housingSupport=="monthly"&&calulationInputs.editAmountHousingSupport!=""){
     housingSupport=calulationInputs.editAmountHousingSupport;
  }else if(calulationInputs.netSalary<=arrayHousingSupportSalary.at(0)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(0);
  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(0)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(1)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(1);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(1)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(2)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(2);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(2)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(3)&& calulationInputs.housingSupport=="monthly" ){
    housingSupport=arrayHousingSupport.at(3);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(3)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(4)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(4);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(4)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(5)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(5);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(5)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(6)&& calulationInputs.housingSupport=="monthly" ){
       housingSupport=arrayHousingSupport.at(6);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(6)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(7)&& calulationInputs.housingSupport=="monthly" ){
       housingSupport=arrayHousingSupport.at(7);   
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(8)&& calulationInputs.housingSupport=="monthly" ){
       housingSupport=arrayHousingSupport.at(8);  
  }else{
      housingSupport=0
  }
  
  
  
  
     //حساب العمر و مده الخدمة
  var monthWork = calulationInputs.currentMonth -calulationInputs.startWorkMonth
  var yearWork = calulationInputs.currentYear - calulationInputs.startWorkYear
  var durationWork = ((monthWork+yearWork*12)/12).toFixed(2);
  var monthClint = calulationInputs.currentMonth -calulationInputs.birthMonth
  var yearClint = calulationInputs.currentYear - calulationInputs.birthYear
  var ageClint = ((monthClint+yearClint*12)/12).toFixed(2);
  
     //الاعمار التقاعديه 
  var array1= [77,60,60,44,46,48,50,52,44,46,48,50,52]     
  var array2 =["متقاعد","مدني","خاص","جندي","عريف","وكيل رقيب","رقيب","رئيس رقباء","ملازم","نقيب","رائد","عقيد","عميد"];    
  var array3= [0,77,77,77,77,77,77,77,77,77,77,77,77]                       
  var numberJob=array2.indexOf(calulationInputs.job);              
  var ageBeforeRetirement =array1.at(numberJob)  
  
  
  
  //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
  if(calulationInputs.financingType=="normal"){              
    var agePercentageAfterRetirement=0;
    
  }else{
   agePercentageAfterRetirement=array3.at(numberJob) 
  }
  

  //اقصي مده للتمويل مدعوم وغير مدعوم وباقه
  if(calulationInputs.housingSupport=="monthly"){
    var maxDuration=240;
  } else if(calulationInputs.housingSupport=="baqa"){
    var maxDuration=300;
  }else{
        maxDuration =360;
  }
  // حساب المده المتبقيه الي التقاعد الفعلي
  var durationBefore=(ageBeforeRetirement -ageClint)*12;    
  if(calulationInputs.netSalary==0){
   
    var maxxDurationBefore=0;         
  }else if(calulationInputs.editTotalDuration==""){
    maxxDurationBefore=Math.min(durationBefore,maxDuration);
  }else{
    maxxDurationBefore=Math.min(calulationInputs.editTotalDuration,durationBefore,maxDuration);
  }
  
  //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
  if(calulationInputs.financingType=="normal"){               
    var durationAfter=0;
  }else{
      durationAfter = (agePercentageAfterRetirement-ageBeforeRetirement)*12; 
  }                   
  
  //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
  if(calulationInputs.financingType=="afterRetirement" &&calulationInputs.job=="متقاعد"||calulationInputs.netSalary==0 ){              
    var maxxDurationAfter=0;
  }else if(calulationInputs.editTotalDuration==""){
  var maxxDurationAfter = Math.min(durationAfter,maxDuration-maxxDurationBefore);               
  }else{
    var maxxDurationAfter = Math.min(durationAfter,maxDuration-maxxDurationBefore,calulationInputs.editTotalDuration-maxxDurationBefore);    
  }
  
  
  
  
  //اجمالي مده التمويل
  var totalDuration = maxxDurationAfter + maxxDurationBefore;                
  console.log(totalDuration)
  
   
  
  //مصفوفه نسب الفوائد اولا المدعوم
  var durationRealEstates =[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]                     // المده بالسنوات
  var arr1=[3.62,3.62,3.64,3.67,3.7,3.71,3.72,3.75,3.8,3.85,3.9,3.95,3.99,4.03,4.05,4.06,4.25]   //نسب الفوائد للمدعوم
 
  //مصفوفه نسب الفوائد ثانيا غير المدعوم
   var durationRealEstates2 =[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
  var arr2=[3.62,3.62,3.64,3.67,3.7,3.71,3.72,3.75,3.8,3.85,3.9,3.95,3.99,4.03,4.05,4.06,4.25,4.3,4.33,4.35,4.38,4.4]     // الغير مدعوم راتب اقل من 10 الف
  var arr3=[3.62,3.62,3.64,3.67,3.7,3.71,3.72,3.75,3.8,3.85,3.9,3.95,3.99,4.03,4.05,4.06,4.25,4.3,4.33,4.35,4.38,4.4]     //الغير مدعوم راتب فوق 10 الف 
  
  // تقريب مده التمويل الي الاعلي سنه 
   var totalDurationUP =Math.ceil(totalDuration/12)  
  
  
  

    var vl=durationRealEstates.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
    var profitRatioRealEstates1 =arr1.at(vl)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

  var v2=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
  var profitRatioRealEstates2 =arr2.at(v2)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
  
  var v3=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
  var profitRatioRealEstates3 =arr3.at(v3)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
  




    var profitRatioRealEstates=profitRatioRealEstates3; 


  if(calulationInputs.netSalary==0){
    var profitRatioRealEstates=0; 
  }else if(calulationInputs.editProfitRateRealEstate!=""){
  var profitRatioRealEstates= calulationInputs.editProfitRateRealEstate;
  
  }else if(calulationInputs.housingSupport=="monthly"){
    var profitRatioRealEstates=profitRatioRealEstates1;
  
  }else if( calulationInputs.housingSupport=="baqa"){
    var profitRatioRealEstates=profitRatioRealEstates1;
  
  }else{
    var profitRatioRealEstates=profitRatioRealEstates3; 
  }
  
  

    var profitRatioRealEstates1=profitRatioRealEstates;

  
  
  
  //   حساب مبلغ قسط الدعم اللي مش حقيقي  لتعديل مبلغ التمويل العقاري
  if(housingSupport==0){                   
    var housingSupportNotReal=0
  }else if(totalDuration<=240 ){                   
    var housingSupportNotReal=housingSupport
  }else if(totalDuration>240 ){
    var housingSupportNotReal=(housingSupport*240)/(totalDuration)
  }else{
    var housingSupportNotReal=0
  }
  
  //حساب الراتب التقاعدي
  if(calulationInputs.job==array2.at(1) ){
    var salaryAfter=(calulationInputs.basicSalary*(12*durationWork+durationBefore))/480;
  
  }else if(calulationInputs.job==array2.at(2)){
    var salaryAfter=(calulationInputs.basicSalary*(calulationInputs.durationIn+durationBefore))/480;
  }else if(calulationInputs.job==array2.at(0)){
   var salaryAfter=0;    
  
  }else{
    var salaryAfter =(calulationInputs.basicSalary*(12*durationWork+durationBefore))/420;
  }
  
  
   // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد 
   if(calulationInputs.editPercentageBeforeRetirement==""){
    var precentBeforeEdit1=100;
  }else{
    var precentBeforeEdit1=calulationInputs.editPercentageBeforeRetirement
  }
  
  // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات بعد التقاعد 
  if(calulationInputs.editPercentageAfterRetirement==""){
    var precentAfterEdit1=100;
  }else{
    var precentAfterEdit1=calulationInputs.editPercentageAfterRetirement
  }
  
  //اقص نسبه استقطاع قبل و بعد التقاعد للمدعوم و غير المدعوم و ايضا قيمه الباقه
  if(calulationInputs.netSalary==0){
    var b= 0;
    var precentBefore =0;
    var precentAfter =0;
  
  }else if(calulationInputs.netSalary==0 && calulationInputs.housingSupport=="monthly" ){
    var b= 0;
    var precentBefore = Math.min(65,precentBeforeEdit1)
    var precentAfter = Math.min(65,precentAfterEdit1)
  
  }else if(calulationInputs.netSalary!=0 && calulationInputs.housingSupport=="monthly" ){
    var b= 0;
    var precentBefore = Math.min(65,precentBeforeEdit1)
     var precentAfter = Math.min(65,precentAfterEdit1)
  
  }else if(calulationInputs.netSalary>=10000 && calulationInputs.housingSupport=="baqa"&& calulationInputs.editAmountHousingSupportBaqa!="" ){
      var b= calulationInputs.editAmountHousingSupportBaqa;
      if(calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter>=15000){
        var precentBefore =Math.min(65,precentBeforeEdit1) 
        var precentAfter = Math.min(65,precentAfterEdit1)
        }else if (calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter<=15000){
           var precentBefore =Math.min(65,precentBeforeEdit1) 
           var precentAfter = Math.min(55,precentAfterEdit1)
        }else {
           var precentBefore =Math.min(55,precentBeforeEdit1) 
           var precentAfter = Math.min(55,precentAfterEdit1)
        }
     
  }else if(calulationInputs.netSalary>=10000 && calulationInputs.housingSupport=="baqa" ){
     var b= 100000;
     if(calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter>=15000){
     var precentBefore =Math.min(65,precentBeforeEdit1) 
     var precentAfter = Math.min(65,precentAfterEdit1)
     }else if (calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter<=15000){
        var precentBefore =Math.min(65,precentBeforeEdit1) 
        var precentAfter = Math.min(55,precentAfterEdit1)
     }else {
        var precentBefore =Math.min(55,precentBeforeEdit1) 
        var precentAfter = Math.min(55,precentAfterEdit1)
     }
   }else if(calulationInputs.netSalary<10000 && calulationInputs.housingSupport=="baqa" && calulationInputs.editAmountHousingSupportBaqa!=""){
      var b = calulationInputs.editAmountHousingSupportBaqa;
      var precentBefore = Math.min(55,precentBeforeEdit1)
      var precentAfter = Math.min(55,precentAfterEdit1)
    
  
  }else if(calulationInputs.netSalary<10000 && calulationInputs.housingSupport=="baqa" ){
    var b = 150000;
    var precentBefore = Math.min(55,precentBeforeEdit1)
    var precentAfter = Math.min(55,precentAfterEdit1)
  
  }else if(calulationInputs.netSalary>=15000 &&salaryAfter>=15000 && calulationInputs.housingSupport=="no"){
   var b =0;
   var precentBefore = Math.min(65,precentBeforeEdit1)
   var precentAfter = Math.min(65,precentAfterEdit1)
   
  }else if(calulationInputs.netSalary>=15000 && salaryAfter<15000 && calulationInputs.housingSupport=="no"){
    var b =0;
    var precentBefore = Math.min(65,precentBeforeEdit1)
    var precentAfter = Math.min(55,precentAfterEdit1) 
  
  }else{
    var b =0 ;
    var precentBefore = Math.min(55,precentBeforeEdit1)
    var precentAfter = Math.min(55,precentAfterEdit1)
  };
  
  
  
  //التمويل الشخصي اولا حساب القسط 
  if(calulationInputs.newPersonalFinance=="yesNewPrsonal"&& calulationInputs.editPersonalInstallment==""){
  
      if(calulationInputs.job==array2.at(0)){
        var personInstallment=.25*calulationInputs.netSalary;    
   
       }else{
       var personInstallment=.33*calulationInputs.netSalary; 
  
       } 
  }else if(calulationInputs.newPersonalFinance=="yesNewPrsonal")  {
      var personInstallment=calulationInputs.editPersonalInstallment;
  
  }else{
      var personInstallment=0;  
  }
  
  //التمويل الشخصي ثانيا حساب المدة
  if(calulationInputs.newPersonalFinance=="yesNewPrsonal" && calulationInputs.netSalary!=0 && calulationInputs.editDurationPersonal=="" ){
      var durationPerson=Math.min(60,durationBefore);     //بالشهر
  }else if(calulationInputs.newPersonalFinance=="yesNewPrsonal" && calulationInputs.netSalary!=0 && calulationInputs.editDurationPersonal!="" ){
      var durationPerson=Math.min(60,durationBefore,calulationInputs.editDurationPersonal);
  }else{
      var durationPerson=0; 
  }
  
  //التمويل الشخصي ثالثا حساب مبلغ التمويل 
  
  //نسب الفوائد
  if(calculation.job=="مدني"||calulationInputs.job=="متقاعد"){
    var prcentPrsonaFinal=5;
  }else if(calulationInputs.job=="خاص"){
     var prcentPrsonaFinal=5+0.6 
  }else{
     var prcentPrsonaFinal=5+0.75  
  }
  
  
  
  
  
  if(calulationInputs.netSalary==0){
     var profitadd=0; 
  }else if(calulationInputs.editProfitRatePersonal!=""){
  var profitadd= calulationInputs.editProfitRatePersonal*1;
  
  }else{
     var profitadd=prcentPrsonaFinal; 
  }
  
  
  
  
  
  
  
  
  if(calulationInputs.newPersonalFinance=="yesNewPrsonal"){
    var PersonalFinance=(personInstallment*durationPerson)/(1+0.01*profitadd*(durationPerson/12)); 
      // التمويل الشخصي رابعا حساب فوائد الشخصي
    var profitPersonalFinance=(personInstallment*durationPerson)-PersonalFinance
  }else{
    var PersonalFinance=0; 
    var profitPersonalFinance=0;
  }
  
  
  
  
  
  //مبلغ الالتزامات الحاليه 
  var liabilities=calulationInputs.installment1*calulationInputs.duration1 +calulationInputs.installment2*calulationInputs.duration2+calulationInputs.installment3*calulationInputs.duration3+calulationInputs.installment4*calulationInputs.duration4+PersonalFinance+profitPersonalFinance; 
  var sl5=personInstallment
  
  // التمويل العقاري
  // التمويل العقاري اولا حساب القسط الحقيقي
  var installment =precentBefore*(1*calulationInputs.netSalary +1* housingSupport)/100 -calulationInputs.installment1-calulationInputs.installment2-calulationInputs.installment3-calulationInputs.installment4-sl5 ;
  var installmentBefore =precentAfter*(1*calulationInputs.netSalary +1* housingSupport)/100;
  
  if(calulationInputs.financingType=="normal"){               
      var installmentAfter=0;
  }else if(calulationInputs.financingType=="afterRetirement" && maxxDurationBefore==0){            
      var installmentAfter=0;
  }else if(calulationInputs.financingType=="afterRetirement" && calulationInputs.job=="متقاعد"){
      var installmentAfter=0;
  }else{
  var installmentAfter=precentAfter*(1*salaryAfter +1* housingSupport)/100;
  }
  
  //التمويل العقاري ثانيا حساب القسط الوهمي 
  var installmentNotReal =precentBefore*(1*calulationInputs.netSalary  + 1*housingSupportNotReal)/100 ;
  var installmentBeforeNotReal =precentBefore*(1*calulationInputs.netSalary +1*housingSupportNotReal)/100;
  var installmentAfterNotReal=precentAfter*(1*salaryAfter +1* housingSupportNotReal)/100;
  
  
  
  
  
  // التمويل العقاري ثالثا حساب مبلغ التمويل 
  if(calulationInputs.typeException=="exception"&&calulationInputs.netSalary<15000){
      var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
      var netRealEstateFinance=totalRealEstateFinance/(1+((profitRatioRealEstates-0.2)*.01*(totalDuration/12)));
  
  }else if(calulationInputs.typeException=="exception"&&calulationInputs.netSalary>15000){
      var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
      var netRealEstateFinance=totalRealEstateFinance/(1+((profitRatioRealEstates-.4)*.01*(totalDuration/12)));
  
  
  
  }else{
      var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
      var netRealEstateFinance=totalRealEstateFinance/(1+(profitRatioRealEstates*.01*(totalDuration/12)));
  }
  
  
  //التمويل العقاري خامسا حساب فوائد للتمويل
  var totalProfitEstateFinance=totalRealEstateFinance-netRealEstateFinance;
  var netProfitEstateFinance=totalProfitEstateFinance-(housingSupport*Math.min(240,totalDuration));
  
  // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
  var total=(netRealEstateFinance)+(PersonalFinance)+b
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if(calulationInputs.housingSupport=="baqa"){
    var outNameHosingSuppory="باقة الدعم"
    var amountHousingSupport=b
  }else if (calulationInputs.housingSupport=="no"){
    var outNameHosingSuppory="الدعم السكني"
    var amountHousingSupport=0
  }else{
    var outNameHosingSuppory ="قسط الدعم"
    var amountHousingSupport =housingSupport
  }
  
  
  setCalulationOutputs({...calulationOutputs,
    age:ageClint,
    work:durationWork,
  
   durationBeforeRetirement:maxxDurationBefore.toFixed(0),
    durationAfterRetirement:maxxDurationAfter.toFixed(0),
    totalDuration:totalDurationUP.toFixed(2),
  
    profitRateRealEstate:profitRatioRealEstates1,
    salaryAfterRetirement:new Intl.NumberFormat().format(salaryAfter.toFixed(0)), 
    percentageBeforeRetirement:precentBefore.toFixed(2),
    percentageAfterRetirement:precentAfter.toFixed(2),
  
    profitRatePersonal:profitadd,
    personalFinance:new Intl.NumberFormat().format(PersonalFinance.toFixed(0)),
    profitPersonal:new Intl.NumberFormat().format(profitPersonalFinance.toFixed(0)),
    amountHousingSupport:new Intl.NumberFormat().format(amountHousingSupport),
  
    realEstateFinance:new Intl.NumberFormat().format(netRealEstateFinance.toFixed(0)),
    total:new Intl.NumberFormat().format(total),
    firstInstallment:new Intl.NumberFormat().format(installment.toFixed(0)),
    installmentBeforeRetirement:new Intl.NumberFormat().format(installmentBefore.toFixed(0)),
    installmentAfterRetirement:new Intl.NumberFormat().format(installmentAfter.toFixed(0)),
    totalProfit:new Intl.NumberFormat().format(totalProfitEstateFinance.toFixed(0)),
    netProfit:new Intl.NumberFormat().format(netProfitEstateFinance.toFixed(0)),
  
    installmentPersonal :personInstallment,
    durationPersonal :durationPerson,
  //تغير الكتابه
  
    nameAmountHousingSupport:outNameHosingSuppory,
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

 
   
    //==================بدايه الانماء =========================//
  }else if(calulationInputs.realEstateBank==="alinma"){


      //  مصفوفه الدعم ع حسب الراتب
     var arrayHousingSupportSalary=[3999,4999,5999,6999,7999,8999,9999,10000,10001]
     var arrayHousingSupport=[1350,1206,1073,955,850,757,673,599,416]
  
  
  
  //حساب قسط الدعم
  if(calulationInputs.netSalary==0 &&calulationInputs.housingSupport=="monthly" ){
    var housingSupport=0;
  }else if(calulationInputs.netSalary!=0 &&calulationInputs.housingSupport=="monthly"&&calulationInputs.editAmountHousingSupport!=""){
     housingSupport=calulationInputs.editAmountHousingSupport;
  }else if(calulationInputs.netSalary<=arrayHousingSupportSalary.at(0)&& calulationInputs.housingSupport=="monthly" ){
      housingSupport=arrayHousingSupport.at(0);
  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(0)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(1)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(1);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(1)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(2)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(2);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(2)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(3)&& calulationInputs.housingSupport=="monthly" ){
    housingSupport=arrayHousingSupport.at(3);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(3)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(4)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(4);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(4)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(5)&& calulationInputs.housingSupport=="monthly" ){
     housingSupport=arrayHousingSupport.at(5);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(5)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(6)&& calulationInputs.housingSupport=="monthly" ){
       housingSupport=arrayHousingSupport.at(6);  
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(6)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(7)&& calulationInputs.housingSupport=="monthly" ){
       housingSupport=arrayHousingSupport.at(7);   
  }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(8)&& calulationInputs.housingSupport=="monthly" ){
       housingSupport=arrayHousingSupport.at(8);  
  }else{
      housingSupport=0
  }
  
  
  
  
     //حساب العمر و مده الخدمة
  var monthWork = calulationInputs.currentMonth -calulationInputs.startWorkMonth
  var yearWork = calulationInputs.currentYear - calulationInputs.startWorkYear
  var durationWork = ((monthWork+yearWork*12)/12).toFixed(2);
  var monthClint = calulationInputs.currentMonth -calulationInputs.birthMonth
  var yearClint = calulationInputs.currentYear - calulationInputs.birthYear
  var ageClint = ((monthClint+yearClint*12)/12).toFixed(2);
  
     //الاعمار التقاعديه 
  var array1= [75,60,60,44,46,48,50,52,44,46,48,50,52]     
  var array2 =["متقاعد","مدني","خاص","جندي","عريف","وكيل رقيب","رقيب","رئيس رقباء","ملازم","نقيب","رائد","عقيد","عميد"];    
  var array3= [0,75,75,75,75,75,75,75,75,75,75,75,75]                      
  var numberJob=array2.indexOf(calulationInputs.job);              
  var ageBeforeRetirement =array1.at(numberJob)  
  
  
  
  //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
  if(calulationInputs.financingType=="normal"){              
    var agePercentageAfterRetirement=0;
    
  }else{
   agePercentageAfterRetirement=array3.at(numberJob) 
  }
  
  //اقصي مده للتمويل مدعوم وغير مدعوم وباقه
  if(calulationInputs.housingSupport=="monthly"||calulationInputs.housingSupport=="baqa"){
    var maxDuration=300;
  }else{
        maxDuration =300;
  }
  // حساب المده المتبقيه الي التقاعد الفعلي
  var durationBefore=(ageBeforeRetirement -ageClint)*12;    
  if(calulationInputs.netSalary==0){
   
    var maxxDurationBefore=0;         
  }else if(calulationInputs.editTotalDuration==""){
    maxxDurationBefore=Math.min(durationBefore,maxDuration);
  }else{
    maxxDurationBefore=Math.min(calulationInputs.editTotalDuration,durationBefore,maxDuration);
  }
  
  //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
  if(calulationInputs.financingType=="normal"){               
    var durationAfter=0;
  }else{
      durationAfter = (agePercentageAfterRetirement-ageBeforeRetirement)*12; 
  }                   
  
  //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
  if(calulationInputs.financingType=="afterRetirement" &&calulationInputs.job=="متقاعد"||calulationInputs.netSalary==0 ){              
    var maxxDurationAfter=0;
  }else if(calulationInputs.editTotalDuration==""){
  var maxxDurationAfter = Math.min(durationAfter,maxDuration-maxxDurationBefore);               
  }else{
    var maxxDurationAfter = Math.min(durationAfter,maxDuration-maxxDurationBefore,calulationInputs.editTotalDuration-maxxDurationBefore);    
  }
  
  
  
  
  //اجمالي مده التمويل
  var totalDuration = maxxDurationAfter + maxxDurationBefore;                
  console.log(totalDuration)
  
   

  //مصفوفه نسب الفوائد اولا المدعوم
  var durationRealEstates =[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]                      // المده بالسنوات
  var arr1=[4.28,4.28,4.33,4.39,4.44,4.5,4.57,4.63,4.7,4.76,4.82,4.89,4.89,4.89,4.89,4.89,4.89]  //نسب الفوائد للمدعوم
  var arr11 =[4.11,4.11,4.17,4.22,4.27,4.33,4.39,4.45,4.51,4.57,4.63,4.70,4.70,4.70,4.70,4.70,4.70]  // 
  //مصفوفه نسب الفوائد ثانيا غير المدعوم
   var durationRealEstates2 =[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  var arr2=[3.99,4.00,4.05,4.10,4.15,4.20,4.25,4.30,4.35,4.40,4.45,4.50,4.55,4.60,4.65,4.70,4.75]     // الغير مدعوم     
  var arr4=[4.10,4.10,4.20,4.25,4.30,4.35,4.40,4.45,4.50,4.55,4.60,4.65,4.70,4.75,4.80,4.85,4.90]     //a b c d  الغير مدعوم 
  var arr5=[4.85,4.85,4.90,4.95,5.00,5.05,5.10,5.15,5.20,5.25,5.35,5.65,5.70,5.85,6.00,6.15,6.30]     //غير معتمد  الغير مدعوم  
  // تقريب مده التمويل الي الاعلي سنه 
   var totalDurationUP =Math.ceil(totalDuration/12)  
  



   //حساب نسبه الفوائد
var vl=durationRealEstates.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
var profitRatioRealEstates1 =arr1.at(vl)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
var v3=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
var profitRatioRealEstates3 =arr11.at(v3)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه


var v2=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
var profitRatioRealEstates2 =arr2.at(v2)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

var v4=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
var profitRatioRealEstates4 =arr4.at(v4)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

var v5=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
var profitRatioRealEstates5 =arr5.at(v5)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه



  if( calulationInputs.typeException=="damanat"||calulationInputs.typeException=="damanatAndexception"){
    var vl=durationRealEstates.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
    var profitRatioRealEstates1 =arr11.at(vl)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
 

  }else{
    var vl=durationRealEstates.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
    var profitRatioRealEstates1 =arr1.at(vl)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
  }
  
  
  var v2=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
  var profitRatioRealEstates2 =arr2.at(v2)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
  
  var v4=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
  var profitRatioRealEstates4 =arr3.at(v4)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
  

  var v5=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
  var profitRatioRealEstates5 =arr3.at(v5)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
  
  if(calulationInputs.netSalary==0){
    var profitRatioRealEstates=0; 
  }else if(calulationInputs.editProfitRateRealEstate!=""){
  var profitRatioRealEstates= calulationInputs.editProfitRateRealEstate;
  
  }else if(calulationInputs.housingSupport=="monthly"){
    var profitRatioRealEstates=profitRatioRealEstates1;
  
  }else if( calulationInputs.housingSupport=="baqa"){
    var profitRatioRealEstates=profitRatioRealEstates1;
  


  }else if(calulationInputs.privateSectorEmployee=="معتمد"&& calulationInputs.housingSupport=="no" &&calulationInputs.job=="خاص" ){
    var profitRatioRealEstates=profitRatioRealEstates4;
  }else if(calulationInputs.privateSectorEmployee=="غير معتمد"&& calulationInputs.housingSupport=="no" &&calulationInputs.job=="خاص" ){
    var profitRatioRealEstates=profitRatioRealEstates5;
  }else{
    var profitRatioRealEstates=profitRatioRealEstates2; 
  }
  
  
  
  //   حساب مبلغ قسط الدعم اللي مش حقيقي  لتعديل مبلغ التمويل العقاري
  if(housingSupport==0){                   
    var housingSupportNotReal=0
  }else if(totalDuration<=240 ){                   
    var housingSupportNotReal=housingSupport
  }else if(totalDuration>240 ){
    var housingSupportNotReal=(housingSupport*240)/(totalDuration)
  }else{
    var housingSupportNotReal=0
  }
  



  //حساب الراتب التقاعدي

  if(calulationInputs.job==array2.at(1) && ageClint < 51 ){
   var salaryAfter =calulationInputs.netSalary
}else if(calulationInputs.job==array2.at(1) ){
    var salaryAfter=(calulationInputs.basicSalary*(12*durationWork+durationBefore))/480;
  
  }else if(calulationInputs.job==array2.at(2)){
    var salaryAfter=(calulationInputs.basicSalary*(calulationInputs.durationIn+durationBefore))/480;
  }else if(calulationInputs.job==array2.at(0)){
   var salaryAfter=0;    
  
  }else{
    var salaryAfter =(calulationInputs.basicSalary*(12*durationWork+durationBefore))/420;
  }
  
  
   // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد 
   if(calulationInputs.editPercentageBeforeRetirement==""){
    var precentBeforeEdit1=100;
  }else{
    var precentBeforeEdit1=calulationInputs.editPercentageBeforeRetirement
  }
  
  // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات بعد التقاعد 
  if(calulationInputs.editPercentageAfterRetirement==""){
    var precentAfterEdit1=100;
  }else{
    var precentAfterEdit1=calulationInputs.editPercentageAfterRetirement
  }
  
  //اقص نسبه استقطاع قبل و بعد التقاعد للمدعوم و غير المدعوم و ايضا قيمه الباقه
  if(calulationInputs.netSalary==0){
    var b= 0;
    var precentBefore =0;
    var precentAfter =0;
  
  }else if(calulationInputs.netSalary==0 && calulationInputs.housingSupport=="monthly" ){
    var b= 0;
    var precentBefore = Math.min(65,precentBeforeEdit1)
    var precentAfter = Math.min(65,precentAfterEdit1)
  
  }else if(calulationInputs.netSalary!=0 && calulationInputs.housingSupport=="monthly" ){
    var b= 0;
    var precentBefore = Math.min(65,precentBeforeEdit1)
     var precentAfter = Math.min(65,precentAfterEdit1)
  
  }else if(calulationInputs.netSalary>=10000 && calulationInputs.housingSupport=="baqa"&& calulationInputs.editAmountHousingSupportBaqa!="" ){
      var b= calulationInputs.editAmountHousingSupportBaqa;
      if(calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter>=15000){
        var precentBefore =Math.min(65,precentBeforeEdit1) 
        var precentAfter = Math.min(65,precentAfterEdit1)
        }else if (calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter<=15000){
           var precentBefore =Math.min(65,precentBeforeEdit1) 
           var precentAfter = Math.min(55,precentAfterEdit1)
        }else {
           var precentBefore =Math.min(55,precentBeforeEdit1) 
           var precentAfter = Math.min(55,precentAfterEdit1)
        }
     
  }else if(calulationInputs.netSalary>=10000 && calulationInputs.housingSupport=="baqa" ){
     var b= 100000;
     if(calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter>=15000){
     var precentBefore =Math.min(65,precentBeforeEdit1) 
     var precentAfter = Math.min(65,precentAfterEdit1)
     }else if (calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter<=15000){
        var precentBefore =Math.min(65,precentBeforeEdit1) 
        var precentAfter = Math.min(55,precentAfterEdit1)
     }else {
        var precentBefore =Math.min(55,precentBeforeEdit1) 
        var precentAfter = Math.min(55,precentAfterEdit1)
     }
   }else if(calulationInputs.netSalary<10000 && calulationInputs.housingSupport=="baqa" && calulationInputs.editAmountHousingSupportBaqa!=""){
      var b = calulationInputs.editAmountHousingSupportBaqa;
      var precentBefore = Math.min(55,precentBeforeEdit1)
      var precentAfter = Math.min(55,precentAfterEdit1)
    
  
  }else if(calulationInputs.netSalary<10000 && calulationInputs.housingSupport=="baqa" ){
    var b = 150000;
    var precentBefore = Math.min(55,precentBeforeEdit1)
    var precentAfter = Math.min(55,precentAfterEdit1)
  
  }else if(calulationInputs.netSalary>=15000 &&salaryAfter>=15000 && calulationInputs.housingSupport=="no"){
   var b =0;
   var precentBefore = Math.min(65,precentBeforeEdit1)
   var precentAfter = Math.min(65,precentAfterEdit1)
   
  }else if(calulationInputs.netSalary>=15000 && salaryAfter<15000 && calulationInputs.housingSupport=="no"){
    var b =0;
    var precentBefore = Math.min(65,precentBeforeEdit1)
    var precentAfter = Math.min(55,precentAfterEdit1) 
  
  }else{
    var b =0 ;
    var precentBefore = Math.min(55,precentBeforeEdit1)
    var precentAfter = Math.min(55,precentAfterEdit1)
  };
  
  
  
  //التمويل الشخصي اولا حساب القسط 
  if(calulationInputs.newPersonalFinance=="yesNewPrsonal"&& calulationInputs.editPersonalInstallment==""){
  
      if(calulationInputs.job==array2.at(0)){
        var personInstallment=.25*calulationInputs.netSalary;    
   
       }else{
       var personInstallment=.33*calulationInputs.netSalary; 
  
       } 
  }else if(calulationInputs.newPersonalFinance=="yesNewPrsonal")  {
      var personInstallment=calulationInputs.editPersonalInstallment;
  
  }else{
      var personInstallment=0;  
  }
  
  //التمويل الشخصي ثانيا حساب المدة
  if(calulationInputs.newPersonalFinance=="yesNewPrsonal" && calulationInputs.netSalary!=0 && calulationInputs.editDurationPersonal=="" ){
      var durationPerson=Math.min(60,durationBefore);     //بالشهر
  }else if(calulationInputs.newPersonalFinance=="yesNewPrsonal" && calulationInputs.netSalary!=0 && calulationInputs.editDurationPersonal!="" ){
      var durationPerson=Math.min(60,durationBefore,calulationInputs.editDurationPersonal);
  }else{
      var durationPerson=0; 
  }
  
  //التمويل الشخصي ثالثا حساب مبلغ التمويل 
  
  //نسب الفوائد
  if(calculation.job=="مدني"||calulationInputs.job=="متقاعد"){
    var prcentPrsonaFinal=5;
  }else if(calulationInputs.job=="خاص"){
     var prcentPrsonaFinal=5+0.6 
  }else{
     var prcentPrsonaFinal=5+0.75  
  }
  
  
  
  
  
  if(calulationInputs.netSalary==0){
     var profitadd=0; 
  }else if(calulationInputs.editProfitRatePersonal!=""){
  var profitadd= calulationInputs.editProfitRatePersonal*1;
  
  }else{
     var profitadd=prcentPrsonaFinal; 
  }
  
  
  
  
  
  
  
  
  if(calulationInputs.newPersonalFinance=="yesNewPrsonal"){
    var PersonalFinance=(personInstallment*durationPerson)/(1+0.01*profitadd*(durationPerson/12)); 
      // التمويل الشخصي رابعا حساب فوائد الشخصي
    var profitPersonalFinance=(personInstallment*durationPerson)-PersonalFinance
  }else{
    var PersonalFinance=0; 
    var profitPersonalFinance=0;
  }
  
  
  
  
  
  //مبلغ الالتزامات الحاليه 
  var liabilities=calulationInputs.installment1*calulationInputs.duration1 +calulationInputs.installment2*calulationInputs.duration2+calulationInputs.installment3*calulationInputs.duration3+calulationInputs.installment4*calulationInputs.duration4+PersonalFinance+profitPersonalFinance; 
  var sl5=personInstallment
  
  // التمويل العقاري
  // التمويل العقاري اولا حساب القسط الحقيقي
  var installment =precentBefore*(1*calulationInputs.netSalary +1* housingSupport)/100 -calulationInputs.installment1-calulationInputs.installment2-calulationInputs.installment3-calulationInputs.installment4-sl5 ;
  var installmentBefore =precentAfter*(1*calulationInputs.netSalary +1* housingSupport)/100;
  
  if(calulationInputs.financingType=="normal"){               
      var installmentAfter=0;
  }else if(calulationInputs.financingType=="afterRetirement" && maxxDurationBefore==0){            
      var installmentAfter=0;
  }else if(calulationInputs.financingType=="afterRetirement" && calulationInputs.job=="متقاعد"){
      var installmentAfter=0;
  }else{
  var installmentAfter=precentAfter*(1*salaryAfter +1* housingSupport)/100;
  }
  
  //التمويل العقاري ثانيا حساب القسط الوهمي 
  var installmentNotReal =precentBefore*(1*calulationInputs.netSalary  + 1*housingSupportNotReal)/100 ;
  var installmentBeforeNotReal =precentBefore*(1*calulationInputs.netSalary +1*housingSupportNotReal)/100;
  var installmentAfterNotReal=precentAfter*(1*salaryAfter +1* housingSupportNotReal)/100;
  
  
  
  
  
  // التمويل العقاري ثالثا حساب مبلغ التمويل 
  if(calulationInputs.typeException=="exception"&&calulationInputs.netSalary<15000){
      var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
      var netRealEstateFinance=totalRealEstateFinance/(1+((profitRatioRealEstates-0.2)*.01*(totalDuration/12)));
  
  }else if(calulationInputs.typeException=="exception"&&calulationInputs.netSalary>15000){
      var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
      var netRealEstateFinance=totalRealEstateFinance/(1+((profitRatioRealEstates-.4)*.01*(totalDuration/12)));
  
  
  
  }else{
      var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
      var netRealEstateFinance=totalRealEstateFinance/(1+(profitRatioRealEstates*.01*(totalDuration/12)));
  }
  
  
  //التمويل العقاري خامسا حساب فوائد للتمويل
  var totalProfitEstateFinance=totalRealEstateFinance-netRealEstateFinance;
  var netProfitEstateFinance=totalProfitEstateFinance-(housingSupport*Math.min(240,totalDuration));
  
  // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
  var total=(netRealEstateFinance)+(PersonalFinance)+b
  
  
  //
if(calulationInputs.privateSectorEmployee=="غير معتمد" && calulationInputs.job=="خاص" && netRealEstateFinance>650000){
  var   netRealEstateFinance =650000
 var total=(650000)+(PersonalFinance)+(b)
 var totalRealEstateFinance = 650000*(1+(profitRatioRealEstates*.01*(totalDuration/12)))
 var totalProfitEstateFinance = totalRealEstateFinance -650000;
 var netProfitEstateFinance=totalProfitEstateFinance-(housingSupport*Math.min(240,totalDuration));
 
 
 var installment =(totalRealEstateFinance/totalDuration) -calulationInputs.installment1-calulationInputs.installment2-calulationInputs.installment3-calulationInputs.installment4-sl5
 var installmentBefore = (totalRealEstateFinance/totalDuration)
 var installmentAfter = (totalRealEstateFinance/totalDuration)
 

}

 
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if(calulationInputs.housingSupport=="baqa"){
    var outNameHosingSuppory="باقة الدعم"
    var amountHousingSupport=b
  }else if (calulationInputs.housingSupport=="no"){
    var outNameHosingSuppory="الدعم السكني"
    var amountHousingSupport=0
  }else{
    var outNameHosingSuppory ="قسط الدعم"
    var amountHousingSupport =housingSupport
  }
  
  
  setCalulationOutputs({...calulationOutputs,
    age:ageClint,
    work:durationWork,
  
   durationBeforeRetirement:maxxDurationBefore.toFixed(0),
    durationAfterRetirement:maxxDurationAfter.toFixed(0),
    totalDuration:totalDurationUP.toFixed(2),
  
    profitRateRealEstate:profitRatioRealEstates1,
    salaryAfterRetirement:new Intl.NumberFormat().format(salaryAfter.toFixed(0)), 
    percentageBeforeRetirement:precentBefore.toFixed(2),
    percentageAfterRetirement:precentAfter.toFixed(2),
  
    profitRatePersonal:profitadd,
    personalFinance:new Intl.NumberFormat().format(PersonalFinance.toFixed(0)),
    profitPersonal:new Intl.NumberFormat().format(profitPersonalFinance.toFixed(0)),
    amountHousingSupport:new Intl.NumberFormat().format(amountHousingSupport),
  
    realEstateFinance:new Intl.NumberFormat().format(netRealEstateFinance.toFixed(0)),
    total:new Intl.NumberFormat().format(total),
    firstInstallment:new Intl.NumberFormat().format(installment.toFixed(0)),
    installmentBeforeRetirement:new Intl.NumberFormat().format(installmentBefore.toFixed(0)),
    installmentAfterRetirement:new Intl.NumberFormat().format(installmentAfter.toFixed(0)),
    totalProfit:new Intl.NumberFormat().format(totalProfitEstateFinance.toFixed(0)),
    netProfit:new Intl.NumberFormat().format(netProfitEstateFinance.toFixed(0)),
  
    installmentPersonal :personInstallment,
    durationPersonal :durationPerson,
  //تغير الكتابه
  
    nameAmountHousingSupport:outNameHosingSuppory,
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  






   
    //==================بدايه الاخري =========================//
  }else{

          //  مصفوفه الدعم ع حسب الراتب
          var arrayHousingSupportSalary=[3999,4999,5999,6999,7999,8999,9999,10000,10001]
          var arrayHousingSupport=[1350,1206,1073,955,850,757,673,599,416]
       
       
       
       //حساب قسط الدعم
       if(calulationInputs.netSalary==0 &&calulationInputs.housingSupport=="monthly" ){
         var housingSupport=0;
       }else if(calulationInputs.netSalary!=0 &&calulationInputs.housingSupport=="monthly"&&calulationInputs.editAmountHousingSupport!=""){
          housingSupport=calulationInputs.editAmountHousingSupport;
       }else if(calulationInputs.netSalary<=arrayHousingSupportSalary.at(0)&& calulationInputs.housingSupport=="monthly" ){
           housingSupport=arrayHousingSupport.at(0);
       
       }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(0)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(1)&& calulationInputs.housingSupport=="monthly" ){
          housingSupport=arrayHousingSupport.at(1);  
       }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(1)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(2)&& calulationInputs.housingSupport=="monthly" ){
          housingSupport=arrayHousingSupport.at(2);  
       }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(2)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(3)&& calulationInputs.housingSupport=="monthly" ){
         housingSupport=arrayHousingSupport.at(3);  
       }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(3)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(4)&& calulationInputs.housingSupport=="monthly" ){
          housingSupport=arrayHousingSupport.at(4);  
       }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(4)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(5)&& calulationInputs.housingSupport=="monthly" ){
          housingSupport=arrayHousingSupport.at(5);  
       }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(5)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(6)&& calulationInputs.housingSupport=="monthly" ){
            housingSupport=arrayHousingSupport.at(6);  
       }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(6)&&calulationInputs.netSalary<=arrayHousingSupportSalary.at(7)&& calulationInputs.housingSupport=="monthly" ){
            housingSupport=arrayHousingSupport.at(7);   
       }else if (calulationInputs.netSalary>arrayHousingSupportSalary.at(8)&& calulationInputs.housingSupport=="monthly" ){
            housingSupport=arrayHousingSupport.at(8);  
       }else{
           housingSupport=0
       }
       
       
       
       
          //حساب العمر و مده الخدمة
       var monthWork = calulationInputs.currentMonth -calulationInputs.startWorkMonth
       var yearWork = calulationInputs.currentYear - calulationInputs.startWorkYear
       var durationWork = ((monthWork+yearWork*12)/12).toFixed(2);
       var monthClint = calulationInputs.currentMonth -calulationInputs.birthMonth
       var yearClint = calulationInputs.currentYear - calulationInputs.birthYear
       var ageClint = ((monthClint+yearClint*12)/12).toFixed(2);
       
     
     //الاعمار التقاعديه 
     if(calulationInputs.housingSupport=="monthly"||calulationInputs.housingSupport=="baqa"){    //متقاعد
       var ct =70;  
     }else{
         var ct = 65;
     }
     
          //الاعمار التقاعديه 
       var array1= [ct,60,60,44,46,48,50,52,44,46,48,50,52] 
       var arPlus2= [ct,60,60,46,48,50,52,54,46,48,50,52,54]     
       var array2 =["متقاعد","مدني","خاص","جندي","عريف","وكيل رقيب","رقيب","رئيس رقباء","ملازم","نقيب","رائد","عقيد","عميد"];    
       var array3= [0,70,70,70,70,70,70,70,70,70,70,70,70]                     
       var numberJob=array2.indexOf(calulationInputs.job);              
       var ageBeforeRetirement =array1.at(numberJob)  
       var ageBeforeRetirementPlus=arPlus2.at(numberJob)
       
       
       
       //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
       if(calulationInputs.financingType=="normal"){              
         var agePercentageAfterRetirement=0;
         
       }else{
        agePercentageAfterRetirement=array3.at(numberJob) 
       }
       
       //اقصي مده للتمويل مدعوم وغير مدعوم وباقه
       if(calulationInputs.housingSupport=="monthly"||calulationInputs.housingSupport=="baqa"){
         var maxDuration=300;
       }else{
             maxDuration =300;
       }
       // حساب المده المتبقيه الي التقاعد الفعلي
     
     if(calulationInputs.financingType=="normal" && calulationInputs.housingSupport=="monthly"){
       var durationBefore=(ageBeforeRetirementPlus -ageClint)*12; 
       }else {
         var durationBefore=(ageBeforeRetirement -ageClint)*12; 
       }
       
        
       if(calulationInputs.netSalary==0){
        
         var maxxDurationBefore=0;         
       }else if(calulationInputs.editTotalDuration==""){
         maxxDurationBefore=Math.min(durationBefore,maxDuration);
       }else{
         maxxDurationBefore=Math.min(calulationInputs.editTotalDuration,durationBefore,maxDuration);
       }
       
       //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
       if(calulationInputs.financingType=="normal"){               
         var durationAfter=0;
       }else{
           durationAfter = (agePercentageAfterRetirement-ageBeforeRetirement)*12; 
       }                   
       
       //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
       if(calulationInputs.financingType=="afterRetirement" &&calulationInputs.job=="متقاعد"||calulationInputs.netSalary==0 ){              
         var maxxDurationAfter=0;
       }else if(calulationInputs.editTotalDuration==""){
       var maxxDurationAfter = Math.min(durationAfter,maxDuration-maxxDurationBefore);               
       }else{
         var maxxDurationAfter = Math.min(durationAfter,maxDuration-maxxDurationBefore,calulationInputs.editTotalDuration-maxxDurationBefore);    
       }
       
       
       
       
       //اجمالي مده التمويل
       var totalDuration = maxxDurationAfter + maxxDurationBefore;                
       console.log(totalDuration)
       
        
       
       //مصفوفه نسب الفوائد اولا المدعوم
       var durationRealEstates =[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]                      // المده بالسنوات
       var arr1=[4.3,4.3,4.33,4.35,4.36,4.38,4.4,4.43,4.45,4.46,4.48,4.5,4.6,4.6,4.6,4.6,4.6]   //نسب الفوائد للمدعوم
     
       //مصفوفه نسب الفوائد ثانيا غير المدعوم
        var durationRealEstates2 =[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
       var arr2=[4.4,4.4,4.42,4.45,4.47,4.49,4.5,4.52,4.55,4.57,4.59,4.6,4.62,4.65,4.67,4.69,4.7]     //الغير مدعوم  البنك  
       var arr3=[4.45,4.45,4.47,4.49,4.5,4.52,4.55,4.57,4.6,4.62,4.64,4.65,4.67,4.69,4.72,4.74,4.75]      //الغير مدعوم خارج البنك  
       
       // تقريب مده التمويل الي الاعلي سنه 
        var totalDurationUP =Math.ceil(totalDuration/12)  
       
     
        
     
      
         var vl=durationRealEstates.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
         var profitRatioRealEstates1 =arr1.at(vl)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
       var v2=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
       var profitRatioRealEstates2 =arr2.at(v2)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
       
       var v3=durationRealEstates2.indexOf(totalDurationUP);              // للحصول علي مكان معامل المده في المصفوفه
       var profitRatioRealEstates3 =arr3.at(v3)                   // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
       
     
     
     
     
     
     
     
     
     
       if(calulationInputs.netSalary==0){
         var profitRatioRealEstates=0; 
       }else if(calulationInputs.editProfitRateRealEstate!=""){
       var profitRatioRealEstates= calulationInputs.editProfitRateRealEstate;
       
       }else if(calulationInputs.housingSupport=="monthly"){
         var profitRatioRealEstates=profitRatioRealEstates1;
       
       }else if( calulationInputs.housingSupport=="baqa"){
         var profitRatioRealEstates=profitRatioRealEstates1;
       
     
       }else if(calulationInputs.currentBank== "albilad" && calulationInputs.housingSupport=="no" ){
         var profitRatioRealEstates=profitRatioRealEstates2;
       }else{
         var profitRatioRealEstates=profitRatioRealEstates3; 
       }
       
       
     
         var profitRatioRealEstates1=profitRatioRealEstates;
     
       
       
       
       //   حساب مبلغ قسط الدعم اللي مش حقيقي  لتعديل مبلغ التمويل العقاري
       if(housingSupport==0){                   
         var housingSupportNotReal=0
       }else if(totalDuration<=240 ){                   
         var housingSupportNotReal=housingSupport
       }else if(totalDuration>240 ){
         var housingSupportNotReal=(housingSupport*240)/(totalDuration)
       }else{
         var housingSupportNotReal=0
       }
       
       //حساب الراتب التقاعدي
       if(calulationInputs.job==array2.at(1) ){
         var salaryAfter=(calulationInputs.basicSalary*(12*durationWork+durationBefore))/480;
       
       }else if(calulationInputs.job==array2.at(2)){
         var salaryAfter=(calulationInputs.basicSalary*(calulationInputs.durationIn+durationBefore))/480;
       }else if(calulationInputs.job==array2.at(0)){
        var salaryAfter=0;    
       
       }else{
         var salaryAfter =(calulationInputs.basicSalary*(12*durationWork+durationBefore))/420;
       }
       
       
        // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد 
        if(calulationInputs.editPercentageBeforeRetirement==""){
         var precentBeforeEdit1=100;
       }else{
         var precentBeforeEdit1=calulationInputs.editPercentageBeforeRetirement
       }
       
       // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات بعد التقاعد 
       if(calulationInputs.editPercentageAfterRetirement==""){
         var precentAfterEdit1=100;
       }else{
         var precentAfterEdit1=calulationInputs.editPercentageAfterRetirement
       }
       
       //اقص نسبه استقطاع قبل و بعد التقاعد للمدعوم و غير المدعوم و ايضا قيمه الباقه
       if(calulationInputs.netSalary==0){
         var b= 0;
         var precentBefore =0;
         var precentAfter =0;
       
       }else if(calulationInputs.netSalary==0 && calulationInputs.housingSupport=="monthly" ){
         var b= 0;
         var precentBefore = Math.min(65,precentBeforeEdit1)
         var precentAfter = Math.min(65,precentAfterEdit1)
       
       }else if(calulationInputs.netSalary!=0 && calulationInputs.housingSupport=="monthly" ){
         var b= 0;
         var precentBefore = Math.min(65,precentBeforeEdit1)
          var precentAfter = Math.min(65,precentAfterEdit1)
       
       }else if(calulationInputs.netSalary>=10000 && calulationInputs.housingSupport=="baqa"&& calulationInputs.editAmountHousingSupportBaqa!="" ){
           var b= calulationInputs.editAmountHousingSupportBaqa;
           if(calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter>=15000){
             var precentBefore =Math.min(65,precentBeforeEdit1) 
             var precentAfter = Math.min(65,precentAfterEdit1)
             }else if (calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter<=15000){
                var precentBefore =Math.min(65,precentBeforeEdit1) 
                var precentAfter = Math.min(55,precentAfterEdit1)
             }else {
                var precentBefore =Math.min(55,precentBeforeEdit1) 
                var precentAfter = Math.min(55,precentAfterEdit1)
             }
          
       }else if(calulationInputs.netSalary>=10000 && calulationInputs.housingSupport=="baqa" ){
          var b= 100000;
          if(calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter>=15000){
          var precentBefore =Math.min(65,precentBeforeEdit1) 
          var precentAfter = Math.min(65,precentAfterEdit1)
          }else if (calulationInputs.netSalary>=15000&& calulationInputs.housingSupport=="baqa"&&salaryAfter<=15000){
             var precentBefore =Math.min(65,precentBeforeEdit1) 
             var precentAfter = Math.min(55,precentAfterEdit1)
          }else {
             var precentBefore =Math.min(55,precentBeforeEdit1) 
             var precentAfter = Math.min(55,precentAfterEdit1)
          }
        }else if(calulationInputs.netSalary<10000 && calulationInputs.housingSupport=="baqa" && calulationInputs.editAmountHousingSupportBaqa!=""){
           var b = calulationInputs.editAmountHousingSupportBaqa;
           var precentBefore = Math.min(55,precentBeforeEdit1)
           var precentAfter = Math.min(55,precentAfterEdit1)
         
       
       }else if(calulationInputs.netSalary<10000 && calulationInputs.housingSupport=="baqa" ){
         var b = 150000;
         var precentBefore = Math.min(55,precentBeforeEdit1)
         var precentAfter = Math.min(55,precentAfterEdit1)
       
       }else if(calulationInputs.netSalary>=15000 &&salaryAfter>=15000 && calulationInputs.housingSupport=="no"){
        var b =0;
        var precentBefore = Math.min(65,precentBeforeEdit1)
        var precentAfter = Math.min(65,precentAfterEdit1)
        
       }else if(calulationInputs.netSalary>=15000 && salaryAfter<15000 && calulationInputs.housingSupport=="no"){
         var b =0;
         var precentBefore = Math.min(65,precentBeforeEdit1)
         var precentAfter = Math.min(55,precentAfterEdit1) 
       
       }else{
         var b =0 ;
         var precentBefore = Math.min(55,precentBeforeEdit1)
         var precentAfter = Math.min(55,precentAfterEdit1)
       };
       
       
       
       //التمويل الشخصي اولا حساب القسط 
       if(calulationInputs.newPersonalFinance=="yesNewPrsonal"&& calulationInputs.editPersonalInstallment==""){
       
           if(calulationInputs.job==array2.at(0)){
             var personInstallment=.25*calulationInputs.netSalary;    
        
            }else{
            var personInstallment=.33*calulationInputs.netSalary; 
       
            } 
       }else if(calulationInputs.newPersonalFinance=="yesNewPrsonal")  {
           var personInstallment=calulationInputs.editPersonalInstallment;
       
       }else{
           var personInstallment=0;  
       }
       
       //التمويل الشخصي ثانيا حساب المدة
       if(calulationInputs.newPersonalFinance=="yesNewPrsonal" && calulationInputs.netSalary!=0 && calulationInputs.editDurationPersonal=="" ){
           var durationPerson=Math.min(60,durationBefore);     //بالشهر
       }else if(calulationInputs.newPersonalFinance=="yesNewPrsonal" && calulationInputs.netSalary!=0 && calulationInputs.editDurationPersonal!="" ){
           var durationPerson=Math.min(60,durationBefore,calulationInputs.editDurationPersonal);
       }else{
           var durationPerson=0; 
       }
       
       //التمويل الشخصي ثالثا حساب مبلغ التمويل 
       
       //نسب الفوائد
       if(calculation.job=="مدني"||calulationInputs.job=="متقاعد"){
         var prcentPrsonaFinal=5;
       }else if(calulationInputs.job=="خاص"){
          var prcentPrsonaFinal=5+0.6 
       }else{
          var prcentPrsonaFinal=5+0.75  
       }
       
       
       
       
       
       if(calulationInputs.netSalary==0){
          var profitadd=0; 
       }else if(calulationInputs.editProfitRatePersonal!=""){
       var profitadd= calulationInputs.editProfitRatePersonal*1;
       
       }else{
          var profitadd=prcentPrsonaFinal; 
       }
       
       
       
       
       
       
       
       
       if(calulationInputs.newPersonalFinance=="yesNewPrsonal"){
         var PersonalFinance=(personInstallment*durationPerson)/(1+0.01*profitadd*(durationPerson/12)); 
           // التمويل الشخصي رابعا حساب فوائد الشخصي
         var profitPersonalFinance=(personInstallment*durationPerson)-PersonalFinance
       }else{
         var PersonalFinance=0; 
         var profitPersonalFinance=0;
       }
       
       
       
       
       
       //مبلغ الالتزامات الحاليه 
       var liabilities=calulationInputs.installment1*calulationInputs.duration1 +calulationInputs.installment2*calulationInputs.duration2+calulationInputs.installment3*calulationInputs.duration3+calulationInputs.installment4*calulationInputs.duration4+PersonalFinance+profitPersonalFinance; 
       var sl5=personInstallment
       
       // التمويل العقاري
       // التمويل العقاري اولا حساب القسط الحقيقي
       var installment =precentBefore*(1*calulationInputs.netSalary +1* housingSupport)/100 -calulationInputs.installment1-calulationInputs.installment2-calulationInputs.installment3-calulationInputs.installment4-sl5 ;
       var installmentBefore =precentAfter*(1*calulationInputs.netSalary +1* housingSupport)/100;
       
       if(calulationInputs.financingType=="normal"){               
           var installmentAfter=0;
       }else if(calulationInputs.financingType=="afterRetirement" && maxxDurationBefore==0){            
           var installmentAfter=0;
       }else if(calulationInputs.financingType=="afterRetirement" && calulationInputs.job=="متقاعد"){
           var installmentAfter=0;
       }else{
       var installmentAfter=precentAfter*(1*salaryAfter +1* housingSupport)/100;
       }
       
       //التمويل العقاري ثانيا حساب القسط الوهمي 
       var installmentNotReal =precentBefore*(1*calulationInputs.netSalary  + 1*housingSupportNotReal)/100 ;
       var installmentBeforeNotReal =precentBefore*(1*calulationInputs.netSalary +1*housingSupportNotReal)/100;
       var installmentAfterNotReal=precentAfter*(1*salaryAfter +1* housingSupportNotReal)/100;
       
       
       
       
       
       // التمويل العقاري ثالثا حساب مبلغ التمويل 
       if(calulationInputs.typeException=="exception"&&calulationInputs.netSalary<15000){
           var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
           var netRealEstateFinance=totalRealEstateFinance/(1+((profitRatioRealEstates-0.2)*.01*(totalDuration/12)));
       
       }else if(calulationInputs.typeException=="exception"&&calulationInputs.netSalary>15000){
           var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
           var netRealEstateFinance=totalRealEstateFinance/(1+((profitRatioRealEstates-.4)*.01*(totalDuration/12)));
       
       
       
       }else{
           var totalRealEstateFinance =(installmentBeforeNotReal*maxxDurationBefore+installmentAfterNotReal*maxxDurationAfter-liabilities);
           var netRealEstateFinance=totalRealEstateFinance/(1+(profitRatioRealEstates*.01*(totalDuration/12)));
       }
       
       
       //التمويل العقاري خامسا حساب فوائد للتمويل
       var totalProfitEstateFinance=totalRealEstateFinance-netRealEstateFinance;
       var netProfitEstateFinance=totalProfitEstateFinance-(housingSupport*Math.min(240,totalDuration));
       
       // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
       var total=(netRealEstateFinance)+(PersonalFinance)+b
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       if(calulationInputs.housingSupport=="baqa"){
         var outNameHosingSuppory="باقة الدعم"
         var amountHousingSupport=b
       }else if (calulationInputs.housingSupport=="no"){
         var outNameHosingSuppory="الدعم السكني"
         var amountHousingSupport=0
       }else{
         var outNameHosingSuppory ="قسط الدعم"
         var amountHousingSupport =housingSupport
       }
       
       
       setCalulationOutputs({...calulationOutputs,
         age:ageClint,
         work:durationWork,
       
        durationBeforeRetirement:maxxDurationBefore.toFixed(0),
         durationAfterRetirement:maxxDurationAfter.toFixed(0),
         totalDuration:totalDurationUP.toFixed(2),
       
         profitRateRealEstate:profitRatioRealEstates1,
         salaryAfterRetirement:new Intl.NumberFormat().format(salaryAfter.toFixed(0)), 
         percentageBeforeRetirement:precentBefore.toFixed(2),
         percentageAfterRetirement:precentAfter.toFixed(2),
       
         profitRatePersonal:profitadd,
         personalFinance:new Intl.NumberFormat().format(PersonalFinance.toFixed(0)),
         profitPersonal:new Intl.NumberFormat().format(profitPersonalFinance.toFixed(0)),
         amountHousingSupport:new Intl.NumberFormat().format(amountHousingSupport),
       
         realEstateFinance:new Intl.NumberFormat().format(netRealEstateFinance.toFixed(0)),
         total:new Intl.NumberFormat().format(total),
         firstInstallment:new Intl.NumberFormat().format(installment.toFixed(0)),
         installmentBeforeRetirement:new Intl.NumberFormat().format(installmentBefore.toFixed(0)),
         installmentAfterRetirement:new Intl.NumberFormat().format(installmentAfter.toFixed(0)),
         totalProfit:new Intl.NumberFormat().format(totalProfitEstateFinance.toFixed(0)),
         netProfit:new Intl.NumberFormat().format(netProfitEstateFinance.toFixed(0)),
       
         installmentPersonal :personInstallment,
         durationPersonal :durationPerson,
       //تغير الكتابه
       
         nameAmountHousingSupport:outNameHosingSuppory,
       });
       






 }

 event.preventDefault()

 setErrorMassge(null)

 const { basicSalary,netSalary ,birthMonth,currentMonth,startWorkMonth,birthYear,currentYear,startWorkYear ,name,phone,durationIn,realEstateBank,job} =calulationInputs
  if(netSalary.length < 4 || netSalary.length >5){
       setErrorMassge("خطأ فضلا التاكد من الراتب الصافي")
      }else if(basicSalary.length<4 ||basicSalary.length>5){
        setErrorMassge("خطأ فضلا التاكد من الراتب الاساسي")


     }else if(birthYear<1366 ||birthYear>1428){
         setErrorMassge("خطأ تاكد من سنة الميلاد من 1366 الي 1428 ")
        }else if(birthMonth<1 ||birthMonth>12){
          setErrorMassge(" خطأ تاكد من شهر الميلاد من 1 الي 12 ")


    }else if(startWorkYear<birthYear ||startWorkYear>currentYear){
      setErrorMassge("خطأ تاكد من  سنه التعيين ")
    }else if(startWorkMonth<1 ||startWorkMonth>12){
      setErrorMassge("خطأ تاكد من شهر التعيين من 1 الي 12 ")


  }else if(currentYear<1444 ||currentYear>1447){
    setErrorMassge("خطأ تاكد من تاريخ السنه الحاليه ")
  }else if(currentMonth<1 ||currentMonth>12){
    setErrorMassge("خطأ تاكد من تاريخ الشهر الحالي ")



  }else if(name==""){
    setErrorMassge("فضلا اكتب اسم العميل")

  }else if(phone.length!=10 ){
    setErrorMassge("خطأ تاكد من رقم الجوال 10 ارقام ")

  }else if(job=="خاص"&& realEstateBank!="alahli" ){
    if(durationIn==""){
    setErrorMassge("خطأ فضلا اكتب مدة الاشتراك بالتامينات ")
    }else if(durationIn<1||durationIn>744){
      setErrorMassge("خطأ فضلا تاكد من مدة الاشتراك بالتامينات ")
    }
  }
   setShowModal(true)
  


};

















function handelChecked(event){
  setcalulationInputs({...calulationInputs,inputCheck:event.target.checked})
};






    // const[showModdal,setShowModal]=useState(false)
    // const [errorMassge ,setErrorMassge]=useState(null)

  //  function handelCheckDisable(event){
  //      event.preventDefault()

  //      setErrorMassge(null)

  //      const { basicSalary,netSalary ,birthMonth,currentMonth,startWorkMonth,birthYear,currentYear,startWorkYear} =calulationInputs
  //       if(netSalary.length < 4 || basicSalary.length<4){
  //            setErrorMassge("خطأ فضلا التاكد من الرواتب")
  //          }else if(birthMonth.length<1 ||birthYear.length<4){
  //              setErrorMassge("خطأ تاكد من تاريخ الميلاد ")
  //         }else if(startWorkMonth.length<1 ||startWorkYear.length<4){
  //           setErrorMassge("خطأ تاكد من تاريخ التعيين ")
  //       }else if(currentMonth.length<1 ||currentYear.length<4){
  //         setErrorMassge("خطأ تاكد من تاريخ اليوم ")
  //       }else{
  //        setShowModal(true)
  //       }
  //  };



   const btnIsDisable = calulationInputs.netSalary==''|| calulationInputs.birthMonth==""|| calulationInputs.birthYear==""|| calulationInputs.startWorkMonth==""|| calulationInputs.startWorkYear==""|| calulationInputs.currentMonth==""|| calulationInputs.currentYear==""||calulationInputs.basicSalary==""
   
   function handelDivClick(){
       if(showModdal==true){
       setShowModal(false)
       }

   }
   



    return(
      <div style={{marginTop:"10px"}} onClick={handelDivClick}>

       <div className="container p-relative" > 

         <div className="row flex-mobile">
         <Modal isVisble={showModdal} errorMassage={errorMassge} />
            <div className="col box" >
               <form   onSubmit={(event)=>{event.preventDefault()}}>
                 <h3 style={{textAlign:"center" ,marginTop: "20px",padding: "8px", backgroundColor:"teal"}}>البيانات</h3>
                 <hr></hr>

            <div style={{width:"100%" , direction:"rtl"}}>
              <label>البنك الحالي</label>
               <select value={calulationInputs.currentBank} onChange={(event)=>{setcalulationInputs({...calulationInputs, currentBank:event.target.value})}}>
                 <option value="alahli">الاهلي</option>
                 <option value="alrajhi">الراجحي</option>
                 <option value="albilad"> البلاد</option>
                 <option value="sab">ساب</option>
                 <option value="alinma">الانماء</option>
                 <option value="riyad"> لاحقا الرياض</option>
                 <option value="alfransi">لاحقا الفرنسي</option>
                 <option value="aljazira">لاحقا الجزيرة</option>
                 <option value="any">الاخري</option>
               </select>
               </div>


               <div style={{width:"100%" , direction:"rtl"}}>
                <label>البنك العقاري</label>
               <select value={calulationInputs.realEstateBank} onChange={(event)=>{setcalulationInputs({...calulationInputs, realEstateBank:event.target.value})}}>
               <option value="alahli">الاهلي</option>
                 <option value="alrajhi">الراجحي</option>
                 <option value="albilad"> البلاد</option>
                 <option value="sab">ساب</option>
                 <option value="alinma">الانماء</option>
                 <option value="riyad"> لاحقا الرياض</option>
                 <option value="alfransi">لاحقا الفرنسي</option>
                 <option value="aljazira">لاحقا الجزيرة</option>
                 <option value="bidaya">لاحقا بداية</option>
                 <option value="darAltamleek">لاحقا دار التمليك</option>
                 <option value="any">الاخري</option>
               </select>
               </div>


               <div style={{width:"100%" , direction:"rtl"}}>
                <label>الــوظيفـــة</label>
               <select value={calulationInputs.job} onChange={(event)=>{setcalulationInputs({...calulationInputs, job:event.target.value})}}>
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
                <label>ممتد / اعتيادي</label>
               <select value={calulationInputs.financingType} onChange={(event)=>{setcalulationInputs({...calulationInputs, financingType:event.target.value})}}>
                 <option value="normal">اعتيادي</option>
                 <option value="afterRetirement">ممتد</option>
               </select>
               </div>

               <div style={{width:"100%" , direction:"rtl"}}>
                <label>شخصي جديد</label>
               <select value={calulationInputs.newPersonalFinance} onChange={(event)=>{setcalulationInputs({...calulationInputs, newPersonalFinance:event.target.value})}}>
                 <option value="yesNewPrsonal">نعم</option>
                 <option value="noNewPrsonal">لا</option>
                 
               </select>
               </div>


               <div style={{width:"100%" , direction:"rtl"}}>
                <label>الدعم السكني</label>
               <select value={calulationInputs.housingSupport} onChange={(event)=>{setcalulationInputs({...calulationInputs, housingSupport:event.target.value})}}>
                 <option value="monthly">قسط شهري</option>
                 <option value="baqa">باقة الدعم</option>
                 <option value="no">غير مدعوم</option>
               </select>
               </div>

                
               <div style={{width:"100%" , direction:"rtl"}}>
                <label>الراتب الصافي</label>
                <input maxLength={4} type="number" value={calulationInputs.netSalary} onChange={(event)=>{setcalulationInputs({...calulationInputs , netSalary:event.target.value })}}/>
              </div>

              <div style={{width:"100%" , direction:"rtl"}}>
                <label>الراتب الاساسي</label>
                <input maxLength={5} type="number" value={calulationInputs.basicSalary} onChange={(event)=>{setcalulationInputs({...calulationInputs , basicSalary:event.target.value})}}/>
              </div>

              
              <div style={{width:"100%" , direction:"rtl"}}>
                <label>مده الاشتراك </label>
                <input maxLength={3} type="number" value={calulationInputs.durationIn} onChange={(event)=>{setcalulationInputs({...calulationInputs , durationIn:event.target.value})}}/>
              </div>

              <div style={{width:"100%" , direction:"rtl"}}>
                <label>تاريخ الميلاد</label>
                <input maxLength={2} placeholder=" شهر  " type="number" style={{width:"25%"}} value={calulationInputs.birthMonth} onChange={(event)=>{setcalulationInputs({...calulationInputs , birthMonth:event.target.value})}}/>
                <input maxLength={4} placeholder=" شنه "  type="number" style={{width:"35%" , marginRight:"7px"}} value={calulationInputs.birthYear} onChange={(event)=>{setcalulationInputs({...calulationInputs , birthYear:event.target.value})}}/>
              </div>

              <div style={{width:"100%" , direction:"rtl"}}>
                <label>تاريخ التعيين</label>
                <input maxLength={2} placeholder="شهر" type="number" style={{width:"25%"}} value={calulationInputs.startWorkMonth} onChange={(event)=>{setcalulationInputs({...calulationInputs , startWorkMonth:event.target.value})}}/>
                <input maxLength={4} placeholder=" سنه" type="number" style={{width:"35%" , marginRight:"7px"}} value={calulationInputs.startWorkYear} onChange={(event)=>{setcalulationInputs({...calulationInputs , startWorkYear:event.target.value})}}/>
              </div>

              <div style={{width:"100%" , direction:"rtl"}}>
                <label>تاريخ اليوم</label>
                <input maxLength={2} placeholder=" شهر" type="number" style={{width:"25%"}} value={calulationInputs.currentMonth} onChange={(event)=>{setcalulationInputs({...calulationInputs , currentMonth:event.target.value})}}/>
                <input maxLength={4} placeholder=" سنه" type="number" style={{width:"35%" , marginRight:"7px"}} value={calulationInputs.currentYear} onChange={(event)=>{setcalulationInputs({...calulationInputs , currentYear:event.target.value})}}/>
              </div>

              {/* <div style={{width:"100%" , direction:"rtl"}}>
              <label>تاريخ اليوم</label>
              <input type="date" value={calulationInputs.netSalary} onChange={(event)=>{setcalulationInputs({...calulationInputs , netSalary:event.target.value})}}/>
              </div> */}





              <div style={{width:"100%" , direction:"rtl"}}>
                <label> ضمان اسثثناء</label>
               <select value={calulationInputs.typeException} onChange={(event)=>{setcalulationInputs({...calulationInputs, typeException:event.target.value})}}>
                 <option value="normal">بدون</option>
                 <option value="exception">استثناء</option>
                 <option value="damanat">ضمانات</option>
                 <option value="damanatAndexception">ضمانات مع اسثثناء</option>
               </select>
               </div>




               






                <div style={{width:"100%" , direction:"rtl"}}>
                <label> حكومي- خاص </label>
                <select value={calulationInputs.privateSectorEmployee} onChange={(event)=>{setcalulationInputs({...calulationInputs, privateSectorEmployee:event.target.value})}}>
                <option selected>اختيا </option>
                 <option value="حكومي">حكومي</option>
                 <option value="معتمد">خاص معتمد</option>
                 <option value="غير معتمد">خاص غير معتمد</option>
                
               </select>
                </div>

                <div style={{width:"100%" , direction:"rtl"}}>
                <label>اسم العميل </label>
                <input value={calulationInputs.name} onChange={(event)=>{setcalulationInputs({...calulationInputs , name:event.target.value})}}/>
                </div>

                <div style={{width:"100%" , direction:"rtl"}}>
                <label>رقم الجوال </label>
                <input maxLength={10} value={calulationInputs.phone} onChange={(event)=>{setcalulationInputs({...calulationInputs , phone:event.target.value})}}/>
                </div>


               {/* <div>
               <button className="" onClick={handelCheckDisableNet} id="submit-loan-btn" style={{width:"100%"}}>Submit</button>
               </div> */}

                             

                <div style={{width:"100%" , direction:"rtl"}}>
                <label style={{marginTop:"30px"}}> اضافه للعملاء</label>
                <input type="checkbox" checked={calulationInputs.inputCheck}  onChange={handelChecked} style={{width:"60%" , height:"28px"}}/>
                </div>
                <div style={{width:"100%" , direction:"rtl"}}>
  
               </div>
            </form>

           



             
            </div>






   <div className="col box">
    <div className="edit" style={{}}>
        <h3 style={{textAlign:"center" ,marginTop: "20px",padding: "8px", backgroundColor:"teal"}}>الالتزامات</h3>
        <hr></hr>
        <div>
        <input placeholder="القسط 1" value={calulationInputs.installment1} onChange={(event)=>{setcalulationInputs({...calulationInputs , installment1:event.target.value})}}></input>
        <input placeholder="المدة 1"  value={calulationInputs.duration1} onChange={(event)=>{setcalulationInputs({...calulationInputs , duration1:event.target.value})}}></input>
        </div>

        <div>
        <input placeholder="القسط 2"  value={calulationInputs.installment2} onChange={(event)=>{setcalulationInputs({...calulationInputs , installment2:event.target.value})}}></input>
        <input placeholder="المده 2" value={calulationInputs.duration2} onChange={(event)=>{setcalulationInputs({...calulationInputs , duration2:event.target.value})}}></input>
        </div>
        
        <div>
        <input placeholder="القسط 3"  value={calulationInputs.installment3} onChange={(event)=>{setcalulationInputs({...calulationInputs , installment3:event.target.value})}}></input>
        <input placeholder=" المدة 3" value={calulationInputs.duration3} onChange={(event)=>{setcalulationInputs({...calulationInputs , duration3:event.target.value})}}></input>
        </div>
        
        <div>
        <input placeholder=" القسط 4"  value={calulationInputs.installment4} onChange={(event)=>{setcalulationInputs({...calulationInputs , installment4:event.target.value})}}></input>
        <input placeholder=" المدة 4" value={calulationInputs.duration4} onChange={(event)=>{setcalulationInputs({...calulationInputs , duration4:event.target.value})}}></input>
        </div>
        
        <div style={{display:"flex" , justifyContent:"space-between" , textAlign:"center"}}>      
      
        <h4 placeholder="شخصي جديد" > {calulationOutputs.installmentPersonal}</h4>
        <h4 placeholder="شخصي جديد " > {calulationOutputs.durationPersonal}</h4>
        </div>
     



        <h3 style={{textAlign:"center" ,margin: "0px",padding: "8px", backgroundColor:"teal" , marginTop:"12px" , marginBottom:"12px"}}>البيانات</h3>
        <div style={{ display:"flex" , justifyContent:"space-between" }}>
        <label style={{width:"40%"}}> الاستقطاع فتره الالتزام</label>
        <input  value={calulationInputs.editPercentageFirst} onChange={(event)=>{setcalulationInputs({...calulationInputs , editPercentageFirst:event.target.value})}}></input>
        </div>

        <div style={{ display:"flex" , justifyContent:"space-between" }}>
        <label style={{width:"40%"}}>الاستقطاع قبل التقاعد </label>
        <input  value={calulationInputs.editPercentageBeforeRetirement} onChange={(event)=>{setcalulationInputs({...calulationInputs , editPercentageBeforeRetirement:event.target.value})}}></input>
        </div>

        <div style={{ display:"flex" , justifyContent:"space-between" }}>
        <label style={{width:"40%"}}> الاستقطاع بعد التقاعد</label>
        <input value={calulationInputs.editPercentageAfterRetirement} onChange={(event)=>{setcalulationInputs({...calulationInputs , editPercentageAfterRetirement:event.target.value})}}></input>
        </div>

        <div style={{ display:"flex" , justifyContent:"space-between" }}>
        <label style={{width:"40%"}}> مدة التمويل العقاري</label>
        <input value={calulationInputs.editTotalDuration} onChange={(event)=>{setcalulationInputs({...calulationInputs , editTotalDuration:event.target.value})}}></input>
        </div>

        <div style={{ display:"flex" , justifyContent:"space-between" }}>
        <label style={{width:"40%"}}>مده التمويل الشخصي</label>
        <input  value={calulationInputs.editDurationPersonal} onChange={(event)=>{setcalulationInputs({...calulationInputs , editDurationPersonal:event.target.value})}}></input>
        </div>

        <div style={{ display:"flex" , justifyContent:"space-between" }}>
        <label style={{width:"40%"}}> نسبه الفوائد العقاري</label>
        <input  value={calulationInputs.editProfitRateRealEstate} onChange={(event)=>{setcalulationInputs({...calulationInputs , editProfitRateRealEstate:event.target.value})}}></input>
        </div>

        <div style={{ display:"flex" , justifyContent:"space-between" }}>
        <label style={{width:"40%"}}>نسبه الفوائد الشخصي </label>
        <input value={calulationInputs.editProfitRatePersonal} onChange={(event)=>{setcalulationInputs({...calulationInputs , editProfitRatePersonal:event.target.value})}}></input>
        </div>

        <div style={{ display:"flex" , justifyContent:"space-between" }}>
        <label style={{width:"40%"}} >القسط للقرض الشخصي </label>
        <input  value={calulationInputs.editPersonalInstallment} onChange={(event)=>{setcalulationInputs({...calulationInputs , editPersonalInstallment:event.target.value})}}></input>
        </div>

        <div style={{ display:"flex" , justifyContent:"space-between" }}>
        <label >قسط الدعم </label>
        <input  value={calulationInputs.editAmountHousingSupport} onChange={(event)=>{setcalulationInputs({...calulationInputs , editAmountHousingSupport:event.target.value})}}></input>
        </div>

        <div style={{ display:"flex" , justifyContent:"space-between" }}>
        <label >باقه الدعم </label>
        <input  value={calulationInputs.editAmountHousingSupportBaqa} onChange={(event)=>{setcalulationInputs({...calulationInputs , editAmountHousingSupportBaqa:event.target.value})}}></input>
        </div>
         {/* <div>
        <button className={btnIsDisable? "disabled" :""} disabled={btnIsDisable} onClick={handelCheckDisable} id="submit-loan-btn" style={{width:"100%"}}>Submit</button>
        </div> */}

        <div>
        <button className={btnIsDisable? "disabled" :""} disabled={btnIsDisable} onClick={calculation} id="submit-loan-btn2" style={{width:"100%"}}>calculation</button>
        </div>

      </div> 
            </div>






            <div className="col box" >
            <h3 style={{textAlign:"center" ,marginTop: "20px",padding: "8px", backgroundColor:"teal"}}>البيانات</h3>
            <hr></hr>
            <table>
                <tr >
                    <th >تمويل عقاري</th>
                    <th >{calulationOutputs.realEstateFinance}</th>

                </tr>
                <tr>
                    <td>القرض الشخصي</td>
                    <td>{calulationOutputs.personalFinance}</td>
                    
                </tr>
                <tr>
                    <td>{calulationOutputs.nameAmountHousingSupport}</td>
                    <td>{calulationOutputs.amountHousingSupport}</td>
             
                </tr>
                <tr>
                    <td>الاجمالي</td>
                    <td>{calulationOutputs.total}</td>

                </tr>
                <tr>
                    <td>القسط فتره الالتزام</td>
                    <td>{calulationOutputs.firstInstallment}</td>
                  
                </tr>
                <tr>
                    <td>القسط قبل التقاعد</td>
                    <td>{calulationOutputs.installmentBeforeRetirement}</td>
                  
                </tr>
                <tr>
                    <td>القسط بعد التقاعد</td>
                    <td>{calulationOutputs.installmentAfterRetirement}</td>
        
                </tr>
                <tr>
                    <td>المده قبل التقاعد</td>
                    <td>{calulationOutputs.durationBeforeRetirement}</td>
                  
                </tr>
                <tr>
                    <td>المده بعد التقاعد</td>
                    <td>{calulationOutputs.durationAfterRetirement}</td>
                  
                </tr>
                <tr>
                    <td>اجمالي مده التمويل</td>
                    <td>{calulationOutputs.totalDuration}</td>
                  
                </tr>
                <tr>
                    <td>اجمالي الفوائد</td>
                    <td>{calulationOutputs.totalProfit}</td>
                </tr>
                <tr>
                    <td>صافي الفوائد</td>
                    <td>{calulationOutputs.netProfit}</td>
                </tr>
                <tr>
                    <td>الراتب التقاعدي</td>
                    <td>{calulationOutputs.salaryAfterRetirement}</td>
                </tr>
                <tr>
                    <td>نسبه الفوائد العقاري</td>
                    <td>{calulationOutputs.profitRateRealEstate}</td>
                </tr>
                <tr>
                    <td>نسبه الفوائد الشخصي</td>
                    <td>{calulationOutputs.profitRatePersonal}</td>
                </tr>
                <tr>
                    <td>مبلغ الفوائد الشخصي</td>
                    <td>{calulationOutputs.profitPersonal}</td>
                </tr>
                <tr>
                    <td>عمر العميل</td>
                    <td>{calulationOutputs.age}</td>
                </tr>
                <tr>
                    <td>خدمة العميل</td>
                    <td>{calulationOutputs.work}</td>
                </tr>

                <tr>
                    <td> الاستقطاع قبل التقاعد</td>
                    <td>{calulationOutputs.percentageBeforeRetirement}</td>
                </tr>

                <tr>
                    <td> الاستقطاع بعد التقاعد</td>
                    <td>{calulationOutputs.percentageAfterRetirement}</td>
                </tr>



		      </table>
            </div>
       
      </div>
    </div>
    </div>
    )
}









