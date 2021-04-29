const pageNumberEl = document.querySelector("#page-number");
const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me");
const getTasksButton = document.querySelector("#get-tasks");

// debugger;
// createTask("NewTask");
// createTask("Learn JavaScript");

updateTask("super learn Js", "1224590a-8f70-4012-9f21-9b0ef78ac60e", true);

clickMeButton.addEventListener("click", () => {
  const promise = getImages(pageNumberEl.value);
  promise.then(onImagesReceived);
});

getTasksButton.addEventListener("click", () => {
  const promise = getTasks();
  promise.then(onTasksReceived);
});

function onTasksReceived(tasks) {
  const result = document.querySelector("#tasks-result");
  result.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = task.title;
    li.dataset.id = task.id;
    result.appendChild(li);
  });
}

function onImagesReceived(data) {
  data.forEach((el) => {
    const img = document.createElement("img");
    img.src = el.original;
    document.querySelector("#result").appendChild(img);
  });
}
