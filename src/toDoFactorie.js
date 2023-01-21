export function createToDo(title, description, dueDate, priority ) {
var toDo = {};
toDo.title = title;
toDo.description = description;
toDo.dueDate = dueDate;
toDo.priority = priority;
return {
    toDo
}
}