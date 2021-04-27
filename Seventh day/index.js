const pageNumberEl = document.querySelector("#page-number");
const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me");
const getTasksButton = document.querySelector("#get-tasks");

debugger;
//createTask('learn HTML');
updateTask('super learn Js',"7274eba6-5fcd-498e-a281-3c9d37769b42", true)


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

// id: "9e521f6a-6a27-4028-bed7-1dfa7e4259a7"