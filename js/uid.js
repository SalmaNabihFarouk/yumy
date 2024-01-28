
import {ui} from "./ui.js"

 export class uid{
constructor(){
//  $(".d").on("click",(e)=>{
//         // console.log(this.detial.fetchdetal(e.target.getAttribute("data-b")) ) ;//*** */
//        this.fet(e.target.id);
//        });
this.ui=new ui();
//  var x=document.querySelectorAll(".e");

// for(let i=0;i<x.length;i++){
//     x[i].addEventListener("click",(e)=>{
//         // e.stopPropagation();
//         this.fet(e.target.getAttribute("data-b"));
//     })
    
//  }


$(".p").on("click",(e)=>{
        e.stopPropagation();
    this.fet(e.target.getAttribute("data-b"));
}

)
$(".a").on("click",(e)=>{
    e.stopPropagation();

}

)
$(".b").on("click",(e)=>{
    e.stopPropagation();

}

)

$(".g").on("click",(e)=>{
    e.stopPropagation();

}

)
$(".l").on("click",(e)=>{
    e.stopPropagation();

}

)
//********* */

$(".g").on("click",(e)=>{
    e.stopPropagation();
this.fet3(e.target.getAttribute("data-c"));
}

)
$(".g1").on("click",(e)=>{
e.stopPropagation();

}

)
$(".g2").on("click",(e)=>{
e.stopPropagation();

}

)

$(".g3").on("click",(e)=>{
e.stopPropagation();

}

)
$(".g4").on("click",(e)=>{
e.stopPropagation();

}

)
//************* */
// let z=document.querySelectorAll(".ba");
// let p=document.querySelectorAll(".z");
//  let y=document.querySelectorAll(".a");

// $(z).on("click",(e)=>{
//     // e.stopPropagation();
// })
// // z.addEventListener("click",(e)=>{
  
// //    })
   
// // p.addEventListener("click",(e)=>{
// //     e.stopPropagation();
// //    })
// $(p).on("click",(e)=>{
//     // e.stopPropagation();
// }) 
// // y.addEventListener("click",(e)=>{
// //  e.stopPropagation();
// // this.fet2(e.target.id);
// // })
$(".k").on("click",(e)=>{
     e.stopPropagation();
    this.fet2(e.target.id);
}) 

$(".k1").on("click",(e)=>{
    e.stopPropagation();
 
}) 
$(".k2").on("click",(e)=>{
    e.stopPropagation();
 
}) 
$(".k3").on("click",(e)=>{
    e.stopPropagation();
 
}) 
$(".k4").on("click",(e)=>{
    e.stopPropagation();
 
}) 

}

 async fet(responce){
    console.log(responce);
    let url=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${responce}`);
            let r=await url.json();
            
        //  let u=new ui();
    this.ui.displaydetal(r);
}

async fet2(responce){
    console.log(responce);
    let url=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${responce}`);
            let r=await url.json();
            console.log(r);
            $("#detalis").fadeIn(500); //before
             this.ui.displaydetal2(r);
           
            
     
}

async fet3(responce){
    console.log(responce);
    let url=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${responce}`);
            let r=await url.json();
            console.log(r);
            $("#detalis").fadeIn(500); //before
             this.ui.displaydetal2(r);
           
            
     
}


}