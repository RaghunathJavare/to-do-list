"use strict";

const userTask = document.querySelector(".input__task");
const btnAdd = document.querySelector(".btn__add");
const taskContainer = document.querySelector(".add__task--container");
const btnclose = document.querySelector(".btn__close");
const btnDelete = document.querySelector(".btn__delete");

// current date
const dateFormate = function () {
  const now = new Date();
  const options = {
    hour: "numeric",  
    minutes: "numeric",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return new Intl.DateTimeFormat(navigator.language, options).format(now);
};

const displayTask = function () {
  // capitalize first word
  const task =
    userTask.value ?? userTask.value[0].toUpperCase() + userTask.value.slice(1);

  // const task = userTask.value;
  if (!task) {
    alert("Enter Your Task First");
  } else {
    const html = `
      <div class=" alert container-fluid task__lists mt-4">
     <div class="movements">
     <p style="text-align:left;">Date- ${dateFormate()}</p>
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

    // [...document.querySelectorAll(".lists")].forEach(function (list, i) {
    //   if (i % 2 === 0) {
    //     list.style.backgroundImage =
    //       "linear-gradient(to top left, #39b385, #9be15d)";
    //   } else {
    //     list.style.backgroundImage =
    //       "linear-gradient(to top left, #e52a5a, #ff585f)";
    //   }
    // });

    taskContainer.insertAdjacentHTML("beforeend", html);

    userTask.value = "";
  }
};

btnAdd.addEventListener("click", function (e) {
  e.preventDefault();
  displayTask();
});

btnDelete.addEventListener("click", function (e) {
  e.preventDefault();
  taskContainer.innerHTML = "";
});
