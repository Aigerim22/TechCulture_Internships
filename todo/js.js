const category = document.querySelector(".list");
const new_category = document.querySelector(".newCategory");
const selectedOption = categories.options[categories.selectedIndex];
const itemList = document.getElementById("categories");
const collection = itemList.selectedOptions;
const new_task = document.querySelector(".newtask");
const clearBtn = document.getElementById("clear");

function addCategory() {
  if (new_category.value != "") {
    let div = document.createElement("div");
    let categoryName = document.createElement("h2");
    div.appendChild(categoryName);
    let list = document.createElement("ul");
    div.appendChild(list);
    categoryName.innerHTML = new_category.value;
    div.id = categoryName.textContent;
    let newOption = new Option(categoryName.innerHTML, "list");
    category.appendChild(div);
    categories.append(newOption);
  } else {
    alert("Enter the category!");
  }
  new_category.value = "";
}

function add() {
  let elem = document.createElement("li");
  elem.style.listStyleType = "none";
  elem.innerHTML = new_task.value;
  for (let i = 0; i < category.childNodes.length; i++) {
    for (let j = 0; j < collection.length; j++) {
      oChild = category.childNodes[i];
      if (collection[j].textContent === oChild.id) {
        if (new_task.value != "") {
          oChild.lastChild.append(elem);
        } else {
          alert("Enter the task!");
        }
        new_task.value = "";
      }
    }
  }

  let icon = document.createElement("i");
  icon.classList.add("fas", "fa-trash-alt");
  elem.appendChild(icon);
  let trash = document.getElementsByClassName("fas", "fa-trash-alt");
  for (var i = 0; i < trash.length; i++) {
    trash[i].onclick = function () {
      let curDiv = this.parentElement;
      curDiv.style.display = "none";
    };
  }
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");
  checkbox.onclick = function () {
    return checkbox.checked
      ? (checkbox.parentElement.style.textDecoration = "line-through")
      : (checkbox.parentElement.style.textDecoration = "none");
  };
  elem.insertBefore(checkbox, elem.childNodes[0]);
}

clearBtn.onclick = function () {
  category.innerHTML = "";
  for (let i = 1; i < categories.length; i++) {
    categories[i].innerHTML = "";
    categories[i].style.display = "none";
  }
};
