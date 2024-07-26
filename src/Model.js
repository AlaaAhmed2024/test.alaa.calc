import "./Project1.css"
export default function Modal({isVisble ,errorMassage=null }){
if(isVisble){
    return(
        <div id="modal" >
            <div id="modal-content">
                
                <h4 style={{position:"static" , zIndex:"10000" , color:errorMassage ? "red":"green" , textAlign: "center"}}>{errorMassage!=null? errorMassage:"البيانات صحيحه"}</h4>
            </div>
        </div>
    )
}else{
    return(<></>)
}
 
}