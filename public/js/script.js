let datadiv = document.getElementById("data")

function time() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    datadiv.textContent = `${hours}:${minutes}:${seconds}`
}
// datadiv.textContent = `${hours}:${minutes}:${seconds}`

setInterval(time, 500);



// adding tasks

const taskAddButton = document.querySelector("#task-add");
const taskAddBlock = document.querySelector(".add-task-block");

taskAddButton.addEventListener("click", () => {
    taskAddBlock.classList.toggle("disabled");
});

// adding tasks form

const tasknameInput = document.querySelector(".input2");
const taskimportantSelector = document.querySelector(".select");
const taskdeskriptInput = document.querySelector(".task-deskript-input");
const submittaskButton = document.querySelector(".submit-task-button");

submittaskButton.addEventListener('click', ()=>{
    if (tasknameInput.value == "") {
        alert("Заполни имя задачи")
    }else{
        console.log("Name: ", tasknameInput.value)
        console.log("Important: ", taskimportantSelector.options[taskimportantSelector.selectedIndex].text)
        console.log("Description: ", taskdeskriptInput.value)
    }
})