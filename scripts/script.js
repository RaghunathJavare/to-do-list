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
      <div class="container-fluid lists mt-4">
     <div class="movements">
                <h4>${task}</h4>
            </div>
            <div class="btn__close">
                <h2 class="btns">&times;</h2>
            </div>
        </div>
      `;
    taskContainer.insertAdjacentHTML("afterbegin", html);

    userTask.value = "";
  }
};

btnAdd.addEventListener("click", function () {
  taskCreater();
});
