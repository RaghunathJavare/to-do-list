"use strict";

const userTask = document.querySelector(".task");
const btnAdd = document.querySelector(".btn__add");
const taskContainer = document.querySelector(".add__task--container");
const btnclose = document.querySelector(".btn__close");
const btnDelete = document.querySelector(".btn__delete");

// current date
const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth()}`.padStart(2, 0);
const hour = `${now.getHours()}`.padStart(2, 0);const min = `${now.getMinutes()}`.padStart(2, 0);
const year = `${now.getFullYear()}`.padStart(2, 0);
const currentDate = `${day}/${month}/${year}: ${hour}:${min}`;

console.log(currentDate);

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
     <p style="text-align:left;">Date- ${currentDate}</p>
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
