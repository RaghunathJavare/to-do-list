"use strict";

const userTask = document.querySelector(".task");
const btnAdd = document.querySelector(".btn__add");
const taskContainer = document.querySelector(".add__task--container");
const btnclose = document.querySelector(".btn__close");
const btnDelete = document.querySelector(".btn__delete");
const addContheading = document.querySelector(".add__container--heading");

// current date
const now = new Date();
const options = {
  hour: "numeric",
  minutes: "numeric",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};
const currentDate = new Intl.DateTimeFormat(navigator.language, options).format(
  now
);

// capitalize first word
// const firstWord = (str) => str[0].toUpperCase() + str.slice(1);

let index = 1;

const abstract = () => (index = 1);

const displayTask = function () {
  const task = userTask.value ?? firstWord(userTask.value);
  if (!task) {
    alert("Enter Your Task First");
  } else {
    // addContheading.textContent = "Your Tasks";
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

    [...document.querySelectorAll(".lists")].forEach(function (list, i) {
      if (i % 2 === 0) {
        list.style.backgroundImage =
          "linear-gradient(to top left, #39b385, #9be15d)";
      } else {
        list.style.backgroundImage =
          "linear-gradient(to top left, #e52a5a, #ff585f)";
      }
    });

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
  abstract();
});

taskContainer.addEventListener("click", function (e) {
  e.target;
  abstract();
});
