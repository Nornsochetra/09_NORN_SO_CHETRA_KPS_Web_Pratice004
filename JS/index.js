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

// // Handle Task Submission
// document.getElementById("taskForm").addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent page refresh

//     let taskname = document.getElementById("success").value.trim();
//     let duedate = document.getElementById("default-datepicker").value;
//     let priority = document.getElementById("select-option").value;

//     // Validate Inputs
//     if (!taskname) {
//       document.getElementById("input-warning").textContent =
//         "Task name is required!";
//       return;
//     } else {
//       document.getElementById("input-warning").textContent = "";
//     }

//     if (!duedate) {
//       document.getElementById("choose-date-warning").textContent =
//         "Choose a due date!";
//       return;
//     } else {
//       document.getElementById("choose-date-warning").textContent = "";
//     }

//     // Add Task to Table
//     let table = document.getElementById("taskBody");
//     let row = table.insertRow();
//     row.innerHTML = `
//              <td class="px-6 py-4">${taskname}</td>
//              <td class="px-6 py-4">${duedate}</td>
//              <td class="px-6 py-4 text-${
//                priority === "High"
//                  ? "red"
//                  : priority === "Medium"
//                  ? "yellow"
//                  : "green"
//              }-400">${priority}</td>
//              <td class="px-6 py-4">
//                  <button class="text-white bg-red-500 px-3 py-1 rounded" onclick="deleteTask(this)">Delete</button>
//              </td>
//          `;

//     // Clear input fields
//     document.getElementById("success").value = "";
//     document.getElementById("default-datepicker").value = "";
//     document.getElementById("select-option").value = "Medium";
//   });

//   // Handle Email Submission
//   document.getElementById("addData").addEventListener("click", function () {
//     let email = document.getElementById("email").value.trim();
//     if (email) {
//       alert("Email: " + email);
//     } else {
//       alert("Please enter an email!");
//     }
//   });

//   // Delete Task

