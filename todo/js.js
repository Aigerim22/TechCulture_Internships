var category = document.querySelector(".list");
var new_category = document.querySelector(".newCategory");
let selectedOption = categories.options[categories.selectedIndex];
function addCategory() {
  if (new_category.value != "") {
    let div = document.createElement("div");
    let categoryName = document.createElement("h2");
    div.appendChild(categoryName);
    let list = document.createElement("ul");
    div.appendChild(list);
    categoryName.innerHTML = new_category.value;
    div.id = categoryName.textContent;
    var newOption = new Option(categoryName.innerHTML, "list");
    category.appendChild(div);
    categories.append(newOption);
  } else {
    alert("Enter the category!");
  }
  new_category.value = "";
}

var itemList = document.getElementById("categories");
let collection = itemList.selectedOptions;

var new_task = document.querySelector(".newtask");
function add() {
  var elem = document.createElement("li");
  var cnt = 0;
  elem.innerHTML = new_task.value;
  for (let i = 0; i < category.childNodes.length; i++) {
    for (let j = 0; j < collection.length; j++) {
      oChild = category.childNodes[i];
      if (collection[j].textContent === oChild.id) {
        if (new_task.value != "") {
          oChild.lastChild.append(elem);
          cnt++;
        } else {
          alert("Enter the task!");
        }
        // oChild.childNodes[0].append(cnt);
        new_task.value = "";
        // oChild.append(oChild.lastChild.childNodes.length);
      }
    }
  }

  var icon = document.createElement("i");
  icon.classList.add("fas", "fa-trash-alt");
  elem.appendChild(icon);
  let trash = document.getElementsByClassName("fas", "fa-trash-alt");
  for (var i = 0; i < trash.length; i++) {
    trash[i].onclick = function () {
      var curDiv = this.parentElement;
      curDiv.style.display = "none";
    };
  }
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");
  checkbox.onclick = function () {
    if (checkbox.checked == true) {
      checkbox.parentElement.style.textDecoration = "line-through";
    } else {
      checkbox.parentElement.style.textDecoration = "none";
    }
  };
  elem.insertBefore(checkbox, elem.childNodes[0]);
}

var clearBtn = document.getElementById("clear");

clearBtn.onclick = function () {
  category.innerHTML = "";
  for (let i = 1; i < categories.length; i++) {
    categories[i].innerHTML = "";
    categories[i].style.display = "none";
  }
};
