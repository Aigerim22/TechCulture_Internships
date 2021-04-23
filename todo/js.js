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
    var newOption = new Option(categoryName.innerHTML, "list");
    category.appendChild(div);
    categories.append(newOption);
  } else {
    alert("Enter the category!");
  }
  new_category.value = "";
}

var itemList = document.getElementById("categories");
var new_task = document.querySelector(".newtask");
function add() {
  var elem = document.createElement("li");
  elem.innerHTML = new_task.value;
  let collection = itemList.selectedOptions;

//   for (let i = 0; i < collection.length; i++) {
//     for (let i = 0; i < category.children.length; i++) {
//       if (collection[i].innerHTML == category.children[i].innerHTML) {
        if (new_task.value != "") {
          category.appendChild(elem);
        } else {
          alert("Enter the task!");
        }
        new_task.value = "";
        
      var icon = document.createElement("i");
      icon.classList.add("fas", "fa-trash-alt");
      elem.appendChild(icon);
      let trash = document.getElementsByClassName("fas", "fa-trash-alt");
      for ( var i = 0; i < trash.length; i++) {
          trash[i].onclick = function() {
            var curDiv = this.parentElement;
            curDiv.style.display = "none";
          }
        }
      let checkbox = document.createElement('input');
      checkbox.type= "checkbox";
      checkbox.classList.add("check");
      checkbox.onclick = function(){
          if (checkbox.checked == true){
              checkbox.parentElement.style.textDecoration = "line-through";
            } else {
                checkbox.parentElement.style.textDecoration = "none";
            }
      }
      elem.insertBefore(checkbox, elem.childNodes[0]);
    }

