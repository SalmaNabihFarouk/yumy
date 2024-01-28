import { category } from "./category.js";
import {ui}from "./ui.js"
import{area} from "./area.js"
import{ingred} from "./ingred.js"
import { contact } from "./contact.js";

export class sh{
constructor(){
 
this.ui=new ui();
this.fetchdata("");
$("#sitting i").on("click",()=>{
    $("ul li").animate({height:"30px"})
})

$("#sitting i").on("click",()=>{
    let gear=$(".gearbox").innerWidth();
    if($("#sitting").css("left")=="0px"){
        $("#sitting").animate({left:`-${gear}`},500);
    }
    else{
        $("#sitting").animate({left:"0px"},500);
    }
})
   $("li").on("click",(e)=>{

   if(e.target.id=="Search"){
    console.log("ser")
$(".s").fadeIn(500);
$("#detalis").fadeOut(500);
document.getElementById("row").innerHTML="";
    this.inputfirst=document.querySelector(".input2");
    this.input=document.querySelector(".input");

    $(this.input).on("input",()=>{
        console.log(this.input.value);
        this.fetchdata(this.input.value);
        
    });
    
    this.inputfirst.addEventListener("input",()=>{
        // if (this.inputfirst.value !== "") {
           
        //     this.inputfirst.readOnly = true;
        
         
        //   }
         if (this.inputfirst.value !== "") {
           if( this.inputfirst.value.length == 1){
           console.log( this.inputfirst.value.length )
            console.log(this.inputfirst.value);
            this.fetchdata2(this.inputfirst.value);
           }
     
        
         
          }
          
        
    });
    
 
   






   }
  else if(e.target.id=="Categories"){
    $(".s").fadeOut(500);
    $("#detalis").fadeOut(500);
let cat=new category();
cat.fetchdatalist();

  }

else if(e.target.id=="Area"){
    $(".s").fadeOut(500);
    $("#detalis").fadeOut(500);
let are=new area();
are.fet();

  }
  else if(e.target.id=="Ingredients"){
    $(".s").fadeOut(500);
    $("#detalis").fadeOut(500);
let are=new ingred();
are.fetching();

  }
  else if(e.target.id=="Contact Us"){
    $(".s").fadeOut(500);
    $("#detalis").fadeOut(500);
let con=new contact();
con.displaycont();

  }
   });


   
   
  


}

 async fetchdata(searchbyname){

let url=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchbyname}`);
let responce=await url.json();

console.log(responce);
this.ui.displayserch1(responce);
}
async fetchdata2(searchbyfirst){

    let url=await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${searchbyfirst}`);
    let responce=await url.json();
    
    console.log(responce);
    this.ui.displayserch1(responce);
    }

}