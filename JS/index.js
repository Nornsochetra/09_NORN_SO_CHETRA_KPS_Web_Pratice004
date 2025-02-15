// Add Task
let inputSuccess = document.getElementById("success");
let successWarning = document.getElementById("input-warning");
let datePicker = document.getElementById("default-datepicker");
let datePickerWarning = document.getElementById("choose-date-warning");
const form = document.getElementById("myForm");
let selectOption = document.getElementById("select-option");
let formSubmit = document.getElementById("button-add-new-task");
// error
let inputWarning = document.getElementById("input-warning");
let dateWarning = document.getElementById("choose-date-warning");
let priorityWarning = document.getElementById("priority-warning");

// Task List
let theader = document.getElementById("theader");
let tduedate = document.getElementById("tduedate");
let tpriority = document.getElementById("tpriority");

// let newDate = Date();
// datePicker = newDate.toLocaleDateString().split('/').reverse().joins('/');

let newDate = new Date();
let dateParts = newDate.toLocaleDateString().split("/");
datePicker = `${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`;

const taskList = {
  taskname: "",
};

// Add value 
// Teacher Seyha explain and telling how to write
document.getElementById("taskForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let taskname = document.getElementById("success").value.trim();
  let duedate = document.getElementById("default-datepicker").value;
  let formattedDate = new Date(duedate).toLocaleDateString("en-US", {
    month: "numeric", 
    day: "numeric", 
    year: "numeric", 
  });
  if(!taskname){
    document.getElementById('input-warning').textContent = "Text is required";
    return;
  }
  if(!formattedDate){
    document.getElementById('choose-date-warning').textContent = "Date is required";
    return;
  }
  let priority = document.getElementById("select-option").value;
  let table = document.getElementById("taskBody");
  let row = table.insertRow();
  row.innerHTML = `
           <td class="px-6 py-4">${taskname}</td>
           <td class="px-6 py-4">${formattedDate}</td>
           <td class="px-6 py-4 text-${
             priority === "High"
               ? "red"
               : priority === "Medium"
               ? "yellow"
               : "green"
           }-400">${priority}</td>
           <td class="px-6 py-4">
               <button class="text-white bg-yellow-500 px-3 py-2 rounded" onclick="deleteTask(this)">Pending</button>
           </td>
       `;
  document.getElementById("success").value = "";
  document.getElementById("default-datepicker").value = "";
  document.getElementById("select-option").value = "Medium";
});
// delete value
  function deleteTask(button) {
    button.parentElement.parentElement.remove();
  }
  document.getElementsByClassName('.btnPending').addEventListener("click", (e) => {
    let button = e.target;
    let messagePending = button.innerText.trim();

    if (messagePending === "Pending") {
        button.innerText = "Completed";
        button.classList.add('bg-green-500');
        button.classList.remove('bg-yellow-500');
    } else {
        button.innerText = "Pending";
        button.classList.add('bg-yellow-500');
        button.classList.remove('bg-green-500');
    }
});

