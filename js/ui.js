

// import{details} from "./details.js"
import{ingred} from "./ingred.js"

import { area } from "./area.js";
import{uid} from "./uid.js"
import { contact } from "./contact.js";
export class ui{
    constructor(){
this.flag=false;
    }


    displayserch1(responce){
        console.log("serrr")
let r=responce.meals;
let cartona=``
for (let i=0;i<r.length;i++){

    cartona+=` <div class="col-md-3 g4" >
    <div class=" position-relative g3">
      <img src="${r[i].strMealThumb}" alt="" class="w-100 rounded g2"  >
              <div class="layer d-flex align-items-center justify-content-center g " data-c="${r[i].idMeal}" role="button" >
              
              ${r[i].strMeal}
              </div>
                  </div>
  </div>`


console.log(r[i].idMeal)



}





 document.getElementById("row").innerHTML=cartona;
let y=new uid();


// $(".col-md-3").on("click",(e)=>{
//  this.detial.displaydetal(e.target.getAttribute("data-c"))  ;
// })

    }

  
displaycat(responce){
    let r=responce.categories;

    let cartona=``
    for (let i=0;i<r.length;i++){
    
        cartona+=` 
        <div class="col-md-3 b">
        <div class=" position-relative a" >
          <img src="${r[i].strCategoryThumb}" alt="" class="w-100 rounded g">
                  <div class="layer wrap p "data-b="${r[i].strCategory}" role="button">
                  <h2 class= "text-center l ">  ${r[i].strCategory}</h2>
                  ${r[i].strCategoryDescription.slice(0,80)}
                  </div>
                      </div>
      </div> `  
    
    }
    document.getElementById("row").innerHTML=cartona;



    let u=new uid();
    // $(".d").on("click",(e)=>{
    //     // console.log(this.detial.fetchdetal(e.target.getAttribute("data-b")) ) ;//*** */
    //    this.fetchdetal(e.target.getAttribute("data-b"));
    //    });
    // document.querySelectorAll(".d").forEach((item) => {
    //     item.addEventListener("click", () => {
    //        let id = item.dataset.id;
    //         let det = new details(id)
    //     });
    //  });

    
    
}


displaydetal(responce){

    let r=responce.meals;

    let cartona=``
    for (let i=0;i<r.length;i++){
    
        cartona+=` 
        <div class="col-md-3 k4 " >
        <div class=" position-relative k3 ">
          <img src="${r[i].strMealThumb}" alt="" class="w-100 rounded k2">
                  <div class="layer wrap d-flex justify-content-center align-items-center k"id="${r[i].idMeal}"role="button"  >
                  <h2 class= "text-center k1">  ${r[i].strMeal}</h2>
                 
                  </div>
                      </div>
      </div> `  
    
    }
    document.getElementById("row").innerHTML=cartona;

 let det=new uid();
    
}

displaydetal2(responce){
    let r=responce.meals;



    let cartona=` 
    <div class="d">
      <img src="${r[0].strMealThumb}" alt="" class="w-100 rounded">
      <h3>${r[0].strMeal}</h3>
    </div>


 `

  document.getElementById("divone").innerHTML=cartona;

let cartona2=``

// for(let i=0;i<20;i++){


// if(`${r[0]}.strIngredient${i}`!=""){

//     cartona2+=` 
             
//     <li class="bg-danger rounded ">
//     ${r[0].strIngredient}${i}
//     </li>
      
//   `
let cartona3=``
cartona3+=`  <h2>

Instructions</h2>
<p>${r[0].strInstructions.slice(0,900)}</p>
<h3><span>Area:</span> ${r[0].strArea}</h3>
<h3><span>Category :</span> ${r[0].strCategory}</h3>
<h3><span>Recipes :</span></h3>  `



document.getElementById("titlediv").innerHTML=cartona3;
cartona2+=` 

<div class="col-md-2 bg-body-tertiary rounded ">
${r[0].strIngredient1}:${r[0].strMeasure1}
</div>       
  
   <div class="col-md-2  bg-body-tertiary rounded ">
   ${r[0].strIngredient2}: ${r[0].strMeasure2}
  </div>
  <div class="col-md-2 rounded bg-body-tertiary  ">
  ${r[0].strIngredient3}:${r[0].strMeasure3}
 </div>
 <div class="col-md-2 rounded bg-body-tertiary  ">
 ${r[0].strIngredient4}:${r[0].strMeasure4}
</div>
<div class="col-md-2 rounded  bg-body-tertiary ">
${r[0].strIngredient5}:${r[0].strMeasure5}
</div>
<div class="col-md-2 rounded  bg-body-tertiary ">
${r[0].strIngredient6}:${r[0].strMeasure6}
</div>
<div class="col-md-2 rounded  bg-body-tertiary ">
${r[0].strIngredient7}:${r[0].strMeasure7}
</div>
<div class="col-md-2 rounded bg-body-tertiary  ">
${r[0].strIngredient8}:${r[0].strMeasure8}
</div>
<div class="col-md-2 rounded bg-body-tertiary ">
${r[0].strIngredient9}:${r[0].strMeasure9}
</div>
<div class="col-md-2 rounded bg-body-tertiary">
${r[0].strIngredient10}:${r[0].strMeasure10}
</div>
<div class="col-md-2 rounded bg-body-tertiary">
${r[0].strIngredient11}:${r[0].strMeasure11}
</div>
<div class="col-md-2 rounded bg-body-tertiary">
${r[0].strIngredient12}:${r[0].strMeasure12}
</div>
<div class="col-md-2 rounded bg-body-tertiary">
${r[0].strIngredient13}:${r[0].strMeasure13}
</div>
<div class="col-md-2 rounded bg-body-tertiary">
${r[0].strIngredient14}:${r[0].strMeasure14}
</div>
<div class="col-md-2 rounded bg-body-tertiary">
${r[0].strIngredient15}:${r[0].strMeasure15}
</div>
<div class="col-md-2 rounded bg-body-tertiary">
${r[0].strIngredient16}:${r[0].strMeasure16}
</div>
<div class="col-md-2 rounded bg-body-tertiary ">
<a href="${r[0].strYoutube}" class="btn btn-danger">You Tube</a>
</div>
<div class="col-md-2 rounded bg-body-tertiary">

</div>
`


  document.getElementById("divtwo").innerHTML=cartona2;


}


displayarea(responce){

    let r=responce.meals;
console.log(r);
    let cartona=``
    for (let i=0;i<r.length;i++){
    
        cartona+=` 

        <div class="col-md-3 bg-danger area "id="${r[i].strArea}"role="button"  >
        <i class="fa-solid fa-house fs-1 area1"></i>
        <h2 class="area2">${r[i].strArea}</h2>
      </div>
    
   `
    
    }
    document.getElementById("row").innerHTML=cartona;
 let s=new area();///***********888 */call needed

    
}

displayareaditail(responce){

    let r=responce.meals;

    let cartona=``
    for (let i=0;i<r.length;i++){
    
        cartona+=` 
        <div class="col-md-3 w4 " >
        <div class=" position-relative w3 ">
          <img src="${r[i].strMealThumb}" alt="" class="w-100 rounded w2 ">
                  <div class="layer wrap d-flex justify-content-center align-items-center w "data-area="${r[i].idMeal}"role="button"  >
                  <h2 class= "text-center w1">  ${r[i].strMeal}</h2>
                 
                  </div>
                      </div>
      </div> ` 
    
    }
    document.getElementById("row").innerHTML=cartona;
let w=new area();

}

b(r){
this.flag=r;
console.log(this.flag);
}



displayingreg(responce){

 let r=responce.meals;
console.log(r);
    let cartona=``
    for (let i=0;i<20;i++){
    
        cartona+=` 

        <div class="col-md-3  text-center  q" role="button" data-ing="${r[i].strIngredient}" >
        <i class="fa-solid fa-drumstick-bite fs-1 q2"></i>
        <h2 class="color q3">${r[i].strIngredient}</h2>
        <p class="text-center color q4">${r[i].strDescription.slice(0,80)}</p>
      </div>
    
   `
    
    }

    document.getElementById("row").innerHTML=cartona;

   let i=new ingred();
}

displayc(){

    let cartona=``
  
    
        cartona+=` 
        <div class="container p-5">
        <div class="row justify-content-between align-items-center gy-3 ">
          <div class="col-md-6">
           <input type="text" class="form-control input1">
           <div class="rounded bg-danger-subtle  d1 m-2">Special characters and numbers not allowed</div>
          </div>
         
          <div class="col-md-6" >
           <input type="text" class="form-control input22">
         
           <div class="d2  m-2 rounded bg-danger-subtle ">in valid  email example:user@example.com</div>
          </div>

          <div class="col-md-6">
           <input  class="form-control input3 " type="number"  >
           
           <div class="d3  m-2 rounded bg-danger-subtle " >Enter valid Phone Number</div>
          </div>
          <div class="col-md-6">
           <input class="form-control input4" type="number"  >
           <div class="d4  m-2 rounded bg-danger-subtle " >  Enter valid age</div>
          </div>
          <div class="col-md-6">
          <input type="password" class="form-control input5">
          <div class="d5  m-2 rounded bg-danger-subtle " > in valid passward example Tesg193!</div>
         </div>
         <div class="col-md-6">
         <input type="password" class="form-control input6">
         <div class="d6  m-2 rounded bg-danger-subtle " > in valid passward </div>
        </div>
         </div>
      </div>
      <div class="text-center">
    <button class="btn bg-danger " type="button">submit</button>
  </div>
    
   `
    
    

    document.getElementById("row").innerHTML=cartona;
    let s=new contact();
  
}

ing1(responce){

    let r=responce.meals;

    let cartona=``
    for (let i=0;i<r.length;i++){
    
        cartona+=` 
        <div class="col-md-3 w4 " >
        <div class=" position-relative w3 ">
          <img src="${r[i].strMealThumb}" alt="" class="w-100 rounded w2 ">
                  <div class="layer wrap d-flex justify-content-center align-items-center w "data-h="${r[i].idMeal}"role="button"  >
                  <h2 class= "text-center w1">  ${r[i].strMeal}</h2>
                 
                  </div>
                      </div>
      </div> ` 
    
    }
    document.getElementById("row").innerHTML=cartona;
let w=new ingred();

}




}




//     let r=responce.meals;
//     let cartona=


// for(let i=0;i<20;i++){


// if(`strIngredient${i}`!=""){

// }
// console.log(`${ste}${i}`)
// }








