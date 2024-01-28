

import{ui} from "./ui.js"

export  class area{


constructor(){
    //this.ui=new ui();
$(".area").on("click",(e)=>{
    e.stopPropagation();
 this.fetchareadital( e.target.id);
})

$(".area1").on("click",(e)=>{
    e.stopPropagation();
   })
   $(".area2").on("click",(e)=>{
    e.stopPropagation();
   })
   
   $(".w").on("click",(e)=>{
    e.stopPropagation();
   this.fet2(e.target.getAttribute("data-area"));
}) 

$(".w1").on("click",(e)=>{
   e.stopPropagation();

}) 
$(".w2").on("click",(e)=>{
   e.stopPropagation();

}) 
$(".w3").on("click",(e)=>{
   e.stopPropagation();

}) 
$(".w4").on("click",(e)=>{
   e.stopPropagation();

}) 


}


 

    async fet(){
      
        let url=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
                let r=await url.json();
                
         let u=new ui()
            console.log(r);
        u.displayarea(r);
    }
    
 async fetchareadital(re){
    let url=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${re}`);
    let r=await url.json();
    
let u=new ui()
console.log(r);
 u.displayareaditail(r);
}

async fet2(responce){
    console.log(responce);
    let url=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${responce}`);
            let r=await url.json();
            console.log(r);
            let s=new ui();
            s.displaydetal2(r);
             $("#detalis").fadeIn(500);
            
     
}

}