<!-- صفحه الاتصال مع السيرفر والتاكد من المستخدم و اليوزر و اسم مصدر البيانات-->



<?php      // للاتصال بالسيرفر معلومات سريه 
$conn =mysqli_connect("localhost", "alaaeskan", "alaa1234", "eskan_salman");

//اختبار الاتصال
if($conn)    //لو الاتصال صحيح 
//echo "connection done";

if(mysqli_connect_errno()){     //لو الاتصال في خطأ اظهر اسم الخطأ
    echo "ليس هناك اتصال بقاعده البيانات" .mysqli_connect_error();
} 
  
