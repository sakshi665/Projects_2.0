// let allStars=document.querySelectorAll(".star");

//not optimised approch
// for(let i=0;i<allStars.length;i++)
// {
//     allStars[i].addEventListener("click",()=>{
//         console.log("I am clicked",i+1);
//     })
// }

//optimised approch

const starcontainer=document.querySelector(".star-container");
const ratingCount=document.getElementById("Count");
starcontainer.addEventListener("click",handleClickRating);
starcontainer.addEventListener("mouseover",handleHoverRating);
starcontainer.addEventListener("mouseout", handleLeaveRating);


let starRating=0;
function handleClickRating(e){
  let clickedEle = e.target;
  console.log(clickedEle);
  //    let a=clickedEle.className
  //    console.log(a);
  let currclass = clickedEle.getAttribute("class").split(" ")[0];
  console.log(currclass);
 if(currclass!=="star") return;

  starRating = clickedEle.getAttribute("idx");
  console.log(starRating);
  fillStars(starRating);
  ratingCount.innerText=starRating;
}

function fillStars(idx){
 const allStars=starcontainer.children;
 console.log(allStars);

 for(let i=0;i<5;i++){
    allStars[i].classList.remove("yellow");
 }

 for(let i=0;i<idx;i++){
    allStars[i].classList.add("yellow");
 }
}

function handleHoverRating(e){
    let starIdx=e.target.getAttribute("idx");
    fillStars(starIdx);
}

function handleLeaveRating(e) {

  fillStars(starRating);
}