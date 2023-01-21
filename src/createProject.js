import {projectsDom  } from './initialpageLoad';


var projects = JSON.parse(localStorage.getItem("projects"));

export function createProjectObject(name, dueDate){
    if (projects == null){
        projects = [];
    } else {
        projects = JSON.parse(localStorage.getItem("projects"));
    };
    var project = {};
    project.name = name ;
    project.dueDate = dueDate;
    
  var strinProject = JSON.stringify(project);

 // var stringBackProject = JSON.parse(strinProject);
  
    projects.push(strinProject);


return project
}

//add project button

export function addProject(){
  


    
var  addProject =   document.querySelector("#addProject");
addProject.addEventListener('click', function(){

    var popupForm = document.querySelector('#popUpForm');
    popupForm.replaceChildren();
    
    var newProjectForm = document.createElement('form');
    newProjectForm.setAttribute('id', 'popUpForm');
    popupForm.appendChild(newProjectForm);
//project name
    var labelForProjectName = document.createElement('label');
    labelForProjectName.setAttribute('id', 'labelForProjectName');
    labelForProjectName.setAttribute('for', 'inputForProjectName');
    labelForProjectName.innerText = "Project Name"
    newProjectForm.appendChild(labelForProjectName);

    var inputForProjectName = document.createElement('input');
    inputForProjectName.setAttribute('type', 'text');
    inputForProjectName.setAttribute('id', 'inputForProjectName');
    
    newProjectForm.appendChild(inputForProjectName);

//Due Date
var labelForDueDate = document.createElement('label');
labelForDueDate.setAttribute('id', 'labelForDueDate');
labelForDueDate.setAttribute('for', 'inputForDueDate');
labelForDueDate.innerText = "Due Date"
newProjectForm.appendChild(labelForDueDate);

var inputForDueDate = document.createElement('input');
inputForDueDate.setAttribute('type', 'date');
inputForDueDate.setAttribute('id', 'inputForDueDate');
newProjectForm.appendChild(inputForDueDate);

//Create Project botton
var CreateProject = document.createElement('input');
CreateProject.setAttribute('type', 'submit');
//CreateProject.setAttribute('onclick', 'createProject()');
CreateProject.setAttribute('value', 'Create project');

CreateProject.setAttribute('id', 'CreateProject');
newProjectForm.appendChild(CreateProject);


 // save data local 
newProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var projectNameValue = inputForProjectName.value;
    var dueDateValue = inputForDueDate.value;
    createProjectObject(projectNameValue, dueDateValue)
    localStorage.setItem('projects', JSON.stringify(projects))
    var mainContent = document.querySelector('#mainContent'); 
    popupForm.replaceChildren();
    mainContent.replaceChildren();

    //Dom manipulation add project

    projectsDom();


  });
})
}


