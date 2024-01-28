import {ui} from "./ui.js";

export class contact{


constructor(){
    this. d=new ui();
 let name=document.querySelector(".input1");
$( name).on("input",()=>{
    this.validation(name.value);
})
let  email=document.querySelector(".input22");
$( email).on("input",()=>{
    this.validationemail(email.value);
})
let phone=document.querySelector(".input3");
$( phone).on("input",()=>{
    this.validationphone(phone.value);
})
let  age=document.querySelector(".input4");
$( age).on("input",()=>{
    this.validationage(age.value);
})
this.pass=document.querySelector(".input5");
$( this.pass).on("input",()=>{
    this.validationpass(this.pass.value);
})
this.repass=document.querySelector(".input6");
$( this.repass).on("input",()=>{
    this.validationrepass(this.repass.value);
})
}

displaycont(){
let c=new ui();
c.displayc();
}

validation(r){

    let regexname=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
    if(regexname.test(r)==true ){
        $(".d1").fadeOut(500);
     console.log("t");
     let d=new ui();
      let  flag= true;
d.b(flag);
     
      }
    
      else{
        console.log("no");
        $(".d1").fadeIn(500);
        let d=new ui();
        let  flag= false;
  d.b(flag);
     
        // document.getElementById("invalid").innerHTML=" in valid passward example Tesg193!";
      }
       


      
}

validationphone(r){

    let regexphone=/^01[0125][0-9]{8}$/;
    if(regexphone.test(r)==true ){
        $(".d3").fadeOut(500);
     console.log("t");
     this.d.b(true);
     
      }
    
      else{
        console.log("no");
        $(".d3").fadeIn(500); 
       
        
        this.d.b(false)///**** */
  
        // document.getElementById("invalid").innerHTML=" in valid passward example Tesg193!";
      }




      
}



validationemail(r){

    let regexemail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(regexemail.test(r)==true ){
        $(".d2").fadeOut(500);
     console.log("t");
     let d=new ui();
     let  flag= true;
d.b(flag);
     
      }
    
      else{
        console.log("no");
        $(".d2").fadeIn(500);
        let d=new ui();
        let  flag= false;
  d.b(flag);
        // document.getElementById("invalid").innerHTML=" in valid passward example Tesg193!";
      }




}

validationage(r){

    let regexage=/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
    if(regexage.test(r)==true  ){
        $(".d4").fadeOut(500);
     console.log("t");
     let d=new ui();
     let  flag= true;
d.b(flag);
     
      }
    
      else{
        console.log("no");
        $(".d4").fadeIn(500);
        let d=new ui();
        let  flag= false;
  d.b(flag);
        // document.getElementById("invalid").innerHTML=" in valid passward example Tesg193!";
      }






}

validationpass(r){
    let regexpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(regexpass.test(r)==true ){
        $(".d5").fadeOut(500);
     console.log("t");
     let d=new ui();
     let  flag= true;
d.b(flag);
     
      }
    
      else{
        console.log("no");
        $(".d5").fadeIn(500);
        let d=new ui();
        let  flag= false;
  d.b(flag);
        // document.getElementById("invalid").innerHTML=" in valid passward example Tesg193!";
      }
}

validationrepass(r){
 
    if(this.pass.value==this.repass.value){
        $(".d6").fadeOut(500);
     console.log("t");
     let d=new ui();
      let  flag= true;
d.b(flag);
     
      }
    
      else{
        console.log("no");
        $(".d6").fadeIn(500);
        let d=new ui();
        let  flag= false;
  d.b(flag);
        // document.getElementById("invalid").innerHTML=" in valid passward example Tesg193!";
      }
}




}