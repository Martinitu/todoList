export function initialPageLoad(){
    var content = document.querySelector('#content');

    var heading = document.createElement("div");
    heading.setAttribute("id", "heading");
    content.appendChild(heading);
    var title = document.createElement("h1");
    title.setAttribute("id", "title");
    title.innerText = "TODO LIST"
    heading.appendChild(title)

    
    var sideMenu = document.createElement("div");
    sideMenu.setAttribute("id", "sideMenu");
    content.appendChild(sideMenu);
   
    var home = document.createElement("h2");
    home.setAttribute("id", "home");
    home.innerText = "HOME"
    sideMenu.appendChild(home)

    var today = document.createElement("h3");
    today.setAttribute("id", "today");
    today.innerText = "TODAY"
    sideMenu.appendChild(today)

    var thisWeek = document.createElement("h3");
    thisWeek.setAttribute("id", "thisWeek");
    thisWeek.innerText = "THIS WEEK"
    sideMenu.appendChild(thisWeek)

    var projects = document.createElement("h2");
    projects.setAttribute("id", "projects");
    projects.innerText = "PROJECTS"
    sideMenu.appendChild(projects)

    var addProject = document.createElement("h4");
    addProject.setAttribute("id", "addProject");
    addProject.innerText = "+ add project"
    sideMenu.appendChild(addProject)

    var mainContent = document.createElement("div");
    mainContent.setAttribute("id", "mainContent");
    content.appendChild(mainContent);

    var popUpForm = document.createElement('div');
    popUpForm.setAttribute('id', 'popUpForm');
    content.appendChild(popUpForm);

   
    
}


export function projectsDom(){


    var projectsForDom = JSON.parse(localStorage.getItem("projects"));
  
    if (projectsForDom == null){
        return
    } else {
    projectsForDom.forEach(element => {
         
 
         var projectDiv = document.createElement('div');
         projectDiv.setAttribute('class', 'project');
         mainContent.appendChild(projectDiv);

         var closeButton = document.createElement("div");
         closeButton.setAttribute('class', "closeButton");
         closeButton.innerText = 'delete';
         projectDiv.appendChild(closeButton);
     
         var projectTitle = document.createElement('p');
         projectTitle.setAttribute('class', 'projectTitle');
         projectTitle.innerText = JSON.parse(element).name;
         projectDiv.appendChild(projectTitle);
     
         var projectDueDate = document.createElement('p');
         projectDueDate.setAttribute('class', 'projectDueDate');
         projectDueDate.innerText = JSON.parse(element).dueDate;
         projectDiv.appendChild(projectDueDate );

         closeButton.addEventListener('click', function(){

            const index = projectsForDom.indexOf(element)
            projectsForDom.splice(index, 1);
            localStorage.setItem('projects', JSON.stringify(projectsForDom));
            mainContent.replaceChildren();
            projectsDom();

        })
        
     
    
 
     });
    }
    
}

  //closeButton.addEventListener('click', function(){

            //const index = projectsForDom.indexOf(element)
            //projectsForDom.splice(index, 1);
            //localStorage.setItem('projects', JSON.stringify(projectsForDom));
            //projectsDom();

       // })