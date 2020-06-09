function onReady() {
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");

  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();

    //get the newToDoText
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement("li");

    newLi.setAttribute("class", "li");

    //create a new imput
    let checkbox = document.createElement("input");

    let btn = document.createElement("button");

    btn.setAttribute("class", "deletebtn");

    btn.textContent = "Delete";

    btn.addEventListener("click", function() {
      toDoList.removeChild(this.parentElement);
    })

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    newLi.appendChild(btn);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = "";



  });




}

window.onload = function() {
  onReady();
};
