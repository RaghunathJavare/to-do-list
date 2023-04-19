"use strict";

const userTask = document.querySelector(".task");
const btnAdd = document.querySelector(".btn__add");
const taskContainer = document.querySelector(".add__task--container");
const btnclose = document.querySelector(".btn__close");

const taskCreater = function () {
  const task = userTask.value.toLowerCase();

  if (!task) {
    alert("please Enter a Task first");
  } else {
    const html = `
      <div class=" alert container-fluid lists mt-4">
     <div class="movements">
                <h4>${task}</h4>
            </div>
            <div class="btn__close">
                <button type="button" class="btn-close" data-bs-dismiss="alert"
                aria-label="Close"><span class="material-symbols-outlined">
                delete
                </span></button>
            </div>
          
        </div>
      `;

   
    taskContainer.insertAdjacentHTML("afterbegin", html);

    userTask.value = "";
  }
};

btnAdd.addEventListener("click", function (e) {
  e.preventDefault();
  taskCreater();
});
