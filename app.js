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

function saveTask()
{
    console.log('saving task');
    //get values
    const titles = $("txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#tstselColor").val();
    const date = $("#selDate").val();
    const status = $("selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title,description,color,date,status,number);
    //build an object
    let taskToSave = new Task (title,description,color,date,status,budget)
    console.log(taskToSave);

    displayTask(taskToSave);
}

function loadTask(){
    $.ajx({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        success: function(response){
            console.log(response);
            let data = JSON.parse(response);
            console.log(data);
            // console.log only those elements that were created by you on the server
        },
        error: function (error){
            console.log(error);
        }
    });
}
    //save to server     ///AJAX Asynchronos Java Script XML

    $.ajax({
        type: "POST",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskToSAve),
        contentType: "application/json",
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        }
    })
    //display the data recieved from server

    function displayTask(task){
        let syntax = `<div class='task'>
        <div class='info'>
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        <div>

        <label class='status'>${task.status}</labels>
        <div class='date-budget'>
        <label>${task.datw}</label>
        <label>${task.buidget}</label>
        </div>
        </div>
        `;
        $(".pending-tasks").append(syntax);
    
    }

function testFunction() 
{
    $.ajax({
        type: "delete",
        url:"http://fsdiapi.azurewebsites.net",
        success: function(response)
        {
            console.log(response); 
            let data = JSON.parse(response);
            console.log(data);
            // console.log only those elements that were created by you the server. 
        },
        error: function(error)
        {
            console.log(error)
        }
    });
}

function init(){
    console.log('init');
    //load data
    loadTask();
    //hook events
    $("#btnSave").click(saveTask);
}

window.onload = init;
//variable scope


///XML Extensible Markup Language

//JSON JavaScript Object Notation




