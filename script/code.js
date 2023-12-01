
let mytoDoList = [];
function addItems() {
    let inputValue = document.getElementById("input").value;

    if (inputValue !== "") {
        mytoDoList.push(inputValue);
        List();
        document.getElementById("input").value = "";
    }
}
function List() {
    let todoItemsElement = document.getElementById("listItems");
 todoItemsElement.innerHTML = ""; 

    for (let i = 0; i < mytoDoList.length; i++) {
        todoItemsElement.innerHTML += `<li>${mytoDoList[i]}</li>`;
    }
}
function sortItems() {
    mytoDoList.sort();
    List();
}