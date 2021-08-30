var todoForm=document.getElementById("todo-form")
var todoInput=document.getElementById("todo-input")
var todoBtn=document.getElementById("btn-todo")
var todoList=document.getElementById("todo-list")


todoForm.addEventListener("submit",function(argument){
argument.preventDefault();
})

  var todoFromStorage= localStorage.getItem("todoList") === null ? [] : JSON.parse(localStorage.getItem("todoList")) ;
  for(var i=0; i<todoFromStorage.length; i++) {
    renderTodoCard(todoFromStorage[i].message , todoFromStorage[i].date);
  }

function renderTodoCard(message,time) {


  var card=document.createElement("div");
  card.className="todo-item"
  var todoMetarapper=document.createElement("div");
  var heading=document.createElement("h3");
  heading.innerHTML=message;
  var paragraph=document.createElement("p");
  paragraph.innerHTML= time
    todoMetarapper.appendChild(heading);
  todoMetarapper.appendChild(paragraph);
  card.appendChild(todoMetarapper);
  var deleteIcon=document.createElement("i")
  deleteIcon.className="fas fa-trash-alt"
  card.appendChild(deleteIcon);
  deleteIcon.addEventListener("click", function(){
    card.remove();
  })
  todoList.prepend(card);
  console.log(heading,paragraph)
  todoInput.value="" ;

  
}
todoBtn.addEventListener("click",function(){ 
  if(todoInput.value===""){
    alert("Please enter the TO-DO value");
    return;
  }
  var currentDate= new Date();
  var time = currentDate.getDate() + "-" + (parseInt(currentDate.getMonth())+1) + "-" + currentDate.getFullYear() +" "+ currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

  var mArr= localStorage.getItem("todoList") === null ? [] : JSON.parse(localStorage.getItem("todoList")) ;
  mArr.push({
    message:todoInput.value,
    date:time
  })

localStorage.setItem("todoList",JSON.stringify(mArr));
renderTodoCard(todoInput.value,time);
})
