/*function sayHello(){
    console.log("Hello")
}

function init(){
    console.log("hello world");
    sayHello();
    sayHi("Adrian");
}
window.onLoad = init; /// wait until the HTML and the CSS gets resolved to teh JavaScript  

function sayHi(name){
    console.log("hi"+name);
}

let var1 = 1;

function Scope(){
    let var1 = 2;
}

for(let i=0;i<scope[i].length;i++){
    for(let i=0;j<scope[i].length;i++){}
}
*/ 
//Variable Scope 
// when the function ends, everything inside will be destroyed. 

//ATTPS -> Secure connection
//Cilent => Server

/*
get-read
post-create
put
patch- upload
patch-server
delete-delete*/

/*
kis
keep
it
simple
*/

/*
Dry
Dont
repeat
yourself*/

// Define a Task constructor
function Task(title, description, color, date, status, budget) {
    this.title = title;
    this.description = description;
    this.color = color;
    this.date = date;
    this.status = status;
    this.budget = budget;
  }
  
  function saveTask() {
    console.log('Saving task...');
    
    // Get values from input fields
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    
    console.log(title, description, color, date, status, budget);
    
    // Build a task object
    let taskToSave = new Task(title, description, color, date, status, budget);
    console.log(taskToSave);
  
    // Save the task to the server
    $.ajax({
      type: "POST",
      url: "http://fsdiapi.azurewebsites.net/api/tasks/",
      data: JSON.stringify(taskToSave),
      contentType: "application/json",
      success: function(response) {
        console.log("Task saved successfully:", response);
        displayTask(taskToSave);
      },
      error: function(error) {
        console.log("Error saving task:", error);
      }
    });
  }
  
  function loadTask() {
    $.ajax({
      type: "GET",
      url: "http://fsdiapi.azurewebsites.net/api/tasks",
      success: function(response) {
        console.log("Tasks loaded:", response);
        let data = JSON.parse(response);
  
        // Filter tasks created by the user
        let userTasks = data.filter(task => task.userId === 1); // Change userId to match your needs
        console.log("User tasks:", userTasks);
  
        // Display each task
        userTasks.forEach(task => displayTask(task));
      },
      error: function(error) {
        console.log("Error loading tasks:", error);
      }
    });
  }
  
  function displayTask(task) {
    let syntax = `
      <div class="task" style="border: 1px solid ${task.color}; margin: 10px; padding: 10px;">
        <div class="info">
          <h5>${task.title}</h5>
          <p>${task.description}</p>
        </div>
        <label class="status">${task.status}</label>
        <div class="date-budget">
          <label>${task.date}</label>
          <label>${task.budget}</label>
        </div>
      </div>
    `;
    $(".pending-tasks").append(syntax);
  }
  
  function deleteAllTasks() {
    $.ajax({
      type: "DELETE",
      url: "http://fsdiapi.azurewebsites.net/api/tasks/clear",
      success: function(response) {
        console.log("All tasks deleted:", response);
        $(".pending-tasks").empty(); // Clear the UI
      },
      error: function(error) {
        console.log("Error deleting tasks:", error);
      }
    });
  }
  
  function init() {
    console.log('Initializing...');
    
    // Load existing tasks
    loadTask();
    
    // Hook up events
    $("#btnSave").click(function(e) {
      e.preventDefault(); // Prevent default form submission
      saveTask();
    });
    
    $("#btnDeleteAll").click(function() {
      deleteAllTasks();
    });
  }
  
  // Initialize when the window loads
  $(document).ready(init);
  