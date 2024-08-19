const container =document.querySelector(".container");

container.addEventListener("click",function(e){
    const  targetEle=e.target;
    //to click on reply button first find where is click
    //if someone is click on reply
    const isReply=targetEle.classList.contains("reply");
    //after clicking the reply button you need to create a
    //dic which contain input box and submit button
     const isSubmit = targetEle.classList.contains("btn-submit");
    //if click on reply
    if(isReply){
        createReplyInput(e);
    }//else click on submit
    else if(isSubmit){
      createComment(e);
    }
    else{
        return;
    }
})

function createReplyInput(e){
const fragment = document.createDocumentFragment();
const replycontainer = document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");

//if we want to add class name
replycontainer.setAttribute("clas", "comment-reply-container");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "write your comment");
button.setAttribute("class", "btn-submit");
button.textContent = "Submit";

replycontainer.append(input);
replycontainer.append(button);
fragment.appendChild(replycontainer);

// console.log(e.target.parentNode);
e.target.parentNode.appendChild(fragment);
}


function createComment(e){
    console.log(e.target);
    const commentContainer=document.createElement("div");
    commentContainer.setAttribute("class","comment-container");
    const input=e.target.previousElementSibling.value   ;
    console.log(input);
}