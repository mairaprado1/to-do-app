function onReady() {
  let id = 0;

  let toDos = [];

  const addToDoForm = document.getElementById("addToDoForm");

  function createNewToDo() {
    const newToDoText = document.getElementById("newToDoText");

    if(!newToDoText.value) { return; }
    toDos.push( {
      title: newToDoText.value,
      complete: false,
      id: id
    });
    id = id + 1;

    newToDoText.value = "";

    renderTheUI();
  }

  function renderTheUI() {
    console.log(toDos);
    const toDoList = document.getElementById("toDoList");

    toDoList.textContent = "";

    toDos.forEach(function(toDo) {
      const newLi = document.createElement("li");
      const checkbox = document.createElement("input");
      const btn = document.createElement("button");
      btn.textContent = "Delete";
      checkbox.type = "checkbox";

      btn.addEventListener("click", function() {
        toDos = toDos.filter(element =>  element.id != toDo.id )

        renderTheUI();
      })

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(btn);

    });
  }



  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();
    createNewToDo();
  })



  renderTheUI();

}

window.onload = function() {
  onReady();
};
