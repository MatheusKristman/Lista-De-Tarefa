var elements = [];
onload = function(){
  if (JSON.parse(localStorage.getItem("todo-elements")) != null){

    elements = JSON.parse(localStorage.getItem("todo-elements"));

    display();
  }
}


function clearAll(){
  if(elements.length > 0){  
    let lista = document.getElementsByTagName("ul")[0]
    lista.innerHTML = "";
    localStorage.clear();
    elements = []
    localStorage.setItem("todo-elements", JSON.stringify(elements))
  }else{
    alert("Não tem tarefa para ser excluida!")
  }
}

function addElement(){
  if(document.querySelector(".addTxt").value.trim() != ""){
    elements.push(document.querySelector(".addTxt").value.trim());    

    if(localStorage.getItem("todo-elements") == null){
      localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
    else{
      localStorage.setItem("todo-elements", JSON.stringify(elements));
    }

    display()

  }else{

    alert("Digite sua tarefa abaixo");

  }   
}

function display(){
  document.querySelector("#ul").innerHTML = "";
  for(var i = 0; i < elements.length; i++)
  document.querySelector("#ul").innerHTML += "<li class='element'>" + elements[i] + "<button id='checked' onclick='strike(" + 
  i + ")'><i class='material-icons'>done</i></button> <button id='remove' onclick='del(" + i + ")'><i class='material-icons'>delete</i></button></li>"
  
}

function del(index){
  elements.splice(index, 1);

  if(localStorage.getItem("todo-elements") == null){
    localStorage.setItem("todo-elements", JSON.stringify(elements));
  }
  else{
    localStorage.setItem("todo-elements", JSON.stringify(elements));
  }

  display();
}

function strike(index){
  if(elements[index].includes("<strike>")){
    elements[index] = elements[index].replace("<strike>", "");
    elements[index] = elements[index].replace("</strike>", "");
  }
  else
  {
    elements[index] = "<strike>" + elements[index] + "</strike>"
  }

  if(localStorage.getItem("todo-elements") == null){
    localStorage.setItem("todo-elements", JSON.stringify(elements));
  }
  else{
    localStorage.setItem("todo-elements", JSON.stringify(elements));
  }

  display();
}