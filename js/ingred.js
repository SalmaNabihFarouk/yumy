

import{ui} from "./ui.js"

 export class ingred{


    constructor(){

        $(".q").on("click",(e)=>{
            e.stopPropagation();
           this.ing(e.target.getAttribute("data-ing"));
        }) 
        
        $(".q2").on("click",(e)=>{
           e.stopPropagation();
        
        }) 
        $(".q3").on("click",(e)=>{
           e.stopPropagation();
        
        }) 
        $(".q4").on("click",(e)=>{
           e.stopPropagation();
        
        }) 
        $(".w").on("click",(e)=>{
            e.stopPropagation();
           this.fet3(e.target.getAttribute("data-h"));
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



   async fetching(){
       
         
            let url=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
                    let r=await url.json();
                    console.log(r);
                    let s=new ui();
                    s.displayingreg(r);
                 
                    
            
    
}

 async ing(r){
    let url=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${r}`);
    let re=await url.json();
    console.log(re);
    let s=new ui();
    s.ing1(re);
    // $("#detalis").fadeIn(500);
}


async fet3(responce){
    console.log(responce);
    let url=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${responce}`);
            let r=await url.json();
            console.log(r);
            let s=new ui();
            s.displaydetal2(r);
             $("#detalis").fadeIn(500);
            
     
}


 }