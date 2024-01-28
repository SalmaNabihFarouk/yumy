import {ui} from "./ui.js"



export  class category
{
constructor(){
// $("li").on("click",(e)=>{
// console.log(e.target.id)
// })
// this.fetchdatalist();
this.ui=new ui();
}


 async fetchdatalist(){
    let url=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
let responce=await url.json();

console.log(responce);
this.ui.displaycat(responce);
}


}
