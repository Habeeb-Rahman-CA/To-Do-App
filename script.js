const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
    if (inputBox.value === "") {
        alert("You must write something!") //if the input is empty it alert the message.
    } else {
        let li = document.createElement("li") //or it create a "li" tag 
        li.innerHTML = inputBox.value //the added input text will store into the "li"
        listContainer.appendChild(li) //to display the "li" under the "listConatainer"
        let span = document.createElement("span") //create a span tag
        span.innerHTML =  "\u00d7" //add a "delete" icon to the "span"
        li.appendChild(span) //add the "span" tag to the "li"
    }

    inputBox.value = "" //after display the "li" the input will empty
    saveData();
}

//adding event to the "click" for check and uncheck or delete
listContainer.addEventListener("click", (clicked) => {
    if (clicked.target.tagName === "LI") { //if clicked the tag name "li"
        clicked.target.classList.toggle("checked") //already has the class "checked", then it remove or it doesn't it will add.
        saveData()
    } else if (clicked.target.tagName === "SPAN"){ //if clicked the tag name "span"
        clicked.target.parentElement.remove() //it remove the "span" parent element "li"
        saveData()
    }
})

//save the data into the local storage under the name of "data"
const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML)
}

//get the data from the local storage and display it on list container. 
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();