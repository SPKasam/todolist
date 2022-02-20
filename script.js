var button = document.querySelector("#enter");
var input = document.querySelector("#userinput");
var ul = document.querySelector("ul");

ul.addEventListener("click",function(task){
  if (task.target.tagName === "LI"){
    task.target.classList.toggle("done");
  }
  else{
    deleteitem(task.target);
  }
})

function deleteitem(task){
  task.parentElement.remove();
}

function inputValid(){
  return input.value.length > 0;
}

function newItem(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  var del = document.createElement("button");
  del.innerHTML = 'del';
  li.appendChild(del);
  ul.appendChild(li);
  input.value = "";
}

button.addEventListener("click", function () {
  if (inputValid()){
     newItem();
  }
})

input.addEventListener("keypress", function (event) {
  if (inputValid() && event.which == 13){
    newItem();
  }
})


