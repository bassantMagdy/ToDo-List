const addplan = document.forms["add-plan"];
const list = document.querySelector("#list");
const btn = document.querySelector("#add-plan button");
const items = document.querySelectorAll("li");





//checked done items

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('linedecor');

    }
}, false);



//add new item
addplan.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = addplan.querySelector("input[type='text']").value
        //Add Elemrnts
    if (value == "") {
        alert("You Must Enter Some thing")
    } else {

        const li = document.createElement("li");
        const icon = document.createElement("i")


        //Add Values
        li.textContent = value;
        //Add Class
        li.classList.add("item");
        icon.classList.add("fas", "fa-trash-alt");

        //Append item

        list.appendChild(li);
        li.appendChild(icon);


    };
    document.getElementById("textform").value = "";
    store();
});

//delete item 

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'I') {
        const li = ev.target.parentElement;
        list.removeChild(li);
    }
    store();
}, false);

//Local DataBase
function store() {
    window.localStorage.myitems = list.innerHTML;
}

function getValues() {
    var storedValues = window.localStorage.myitems;
    if (!storedValues) {
        list.innerHTML = '<li>Make a to do list</li>'
    } else {
        list.innerHTML = storedValues;

    }
}
getValues();