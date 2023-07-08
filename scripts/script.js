"use strict";

const btnAddTask = document.querySelector(".btn__add");
const taskContainer = document.querySelector(".add__task--container");
const btnclose = document.querySelector(".btn__close");
const btnDelete = document.querySelector(".btn__delete");
const user = document.querySelector(".input__task");

  
class Todo {
  constructor(task, date) {
    this.str = task;
    this.date = date;
  }
}

class App {
  #tasks = [];
  #date;

  constructor() {
    // get localStorage

    this.#getLocalStorage();

    // Attach to event handlers
    btnAddTask.addEventListener("click", this.#rederData.bind(this));
    btnDelete.addEventListener("click", this.#deleteAllTasks.bind(this));
  }

  #getData() {
    // Get current date
    const now = new Date();
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    this.#date = Intl.DateTimeFormat(navigator.language, options).format(now);
  }

  #rederData(e) {
    e.preventDefault();
    // capitalize first word
    this.#getData();

    const firstUpercase = (str) => str[0].toUpperCase() + str.slice(1);

    const task = user.value && firstUpercase(user.value);

    if (!task) return alert("Enter Your Task First");

    const userData = new Todo(task, this.#date);

    this.#displayTask(userData);

    this.#tasks.push(userData);

    this.#setToLocalStorage();
  }

  // display task to UI

  #displayTask(task) {
    const html = `
        <div class=" alert container-fluid task__lists mt-4">
       <div class="movements">
       <p style="text-align:left;">Date-${task.date}</p>
                  <h4>${task.str}</h4>
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

    user.value = "";
  }

  #deleteAllTasks(e) {
    e.preventDefault();

    taskContainer.innerHTML = "";
    this.#reset();
  }

  #setToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.#tasks));
  }

  #getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("tasks"));
    if (!data) return;
    this.#tasks = data;

    this.#tasks.forEach((data) => {
      this.#displayTask(data);
    });
  }

  #reset() {
    localStorage.removeItem("tasks");
    location.reload();
  }
}

const app = new App();
