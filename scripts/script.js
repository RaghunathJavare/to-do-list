"use strict";

const userTask = document.querySelector(".task");
const btnAdd = document.querySelector(".btn__add");
const taskContainer = document.querySelector(".add__task--container");
const btnclose = document.querySelector(".btn__close");
const btnDelete = document.querySelector(".btn__delete");

let index = 1;
const abstract = () => (index = 1);

const taskCreater = function () {
  const task = userTask.value.toLowerCase();

  if (!task) {
    alert("please Enter a Task first");
  } else {
    const html = `
      <div class=" alert container-fluid lists mt-4">
     <div class="movements">
                <h4><span class="index" style="color:lawngreen">${index++}</span>${task}</h4>
            </div>
            <div class="btn__close">
                <button type="button" class="btn-close" data-bs-dismiss="alert"
                aria-label="Close"><span class="material-symbols-outlined">
                delete
                </span></button>
            </div>
          
        </div>  
      `;

    taskContainer.insertAdjacentHTML("beforeend", html);

    userTask.value = "";
  }
};

btnAdd.addEventListener("click", function (e) {
  e.preventDefault();
  taskCreater();
});

btnDelete.addEventListener("click", function (e) {
  e.preventDefault();
  taskContainer.innerHTML = "";
  abstract();
});

taskContainer.addEventListener("click", function (e) {
  e.target;
  abstract();
});
