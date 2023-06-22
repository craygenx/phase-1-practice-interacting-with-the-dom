let count = document.getElementById("counter");
let addButton = document.getElementById("plus");
let submitButton = document.getElementById("submit");
let subtractButton = document.getElementById("minus");
let comments = document.getElementById("list");
let likes = document.getElementsByClassName("likes");
let likeButton = document.getElementById("heart");
let pauseButton = document.getElementById("pause");
let form = document.getElementById("comment-form");
let isPaused = false;

addButton.addEventListener('click', addCounter);
subtractButton.addEventListener('click', subtractCounter);
likeButton.addEventListener('click', addLike);
pauseButton.addEventListener('click', pauseTimer);
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const comment = document.getElementById('comment-input').value;
    addComment(comment);
    form.reset();
});

let intval = setInterval(addCounter, 1000);

setTimeout(function(){
    clearInterval(intval);
}, 50000);
function addCounter(){
    let countNumber = parseInt(count.innerHTML) + 1;
    count.innerHTML = countNumber.toString();
}
function subtractCounter(){
    let countNumber = parseInt(count.innerHTML) - 1;
    count.innerHTML = countNumber.toString();
}
function addLike() {
    let like = document.createElement('li');
    like.innerHTML = `${count.innerHTML} has been liked 1 time`;
    likes[0].appendChild(like)
}
function addComment(coment) {
    const comments = document.getElementById('list');
    const comment = document.createElement('p');
    comment.textContent = coment;
    comments.appendChild(comment);
}
function pauseTimer(){
    if(!isPaused){
        isPaused = true;
        pauseButton.innerHTML = "resume";
        clearInterval(intval);
        likeButton.disabled = true;
        addButton.disabled = true;
        submitButton.disabled = true;
        subtractButton.disabled = true;
    }else{
        isPaused = false;
        pauseButton.innerHTML = "pause";
        intval = setInterval(addCounter, 1000);
        likeButton.disabled = false;
        addButton.disabled = false;
        subtractButton.disabled = false;
        submitButton.disabled = false;
        pauseButton.addEventListener('click', pauseTimer);
    }
}
