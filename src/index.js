import './style.css';
import { formatDistance, subDays } from 'date-fns';
import {initialPageLoad, projectsDom  } from './initialpageLoad';
import {createToDo } from './toDoFactorie';
import {createProject, createProjectObject, addProject} from './createProject'




//var testToDo = createToDo("todo project", 'completar el proyecto de todo', "31/12/22", "high");
//var defaultProject = createProjectObject(defaultProject);
//defaultProject.push(testToDo);

//console.log(defaultProject);

initialPageLoad();
addProject();
projectsDom();



//=> "3 days ago"