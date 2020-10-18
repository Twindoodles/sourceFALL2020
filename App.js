import React, { useState } from "react";
import InputForm from "./ToDoComponents/InputForm"; 
import Task from "./ToDoComponents/Task"; 
import Typography from "@material-ui/core";
import { List } from "@material-ui/core";

function App() {
//making a [todoList] state, set default to empty array 
//we will add [task]s to it later which will get its input from the [InputForm]
 const [todoList, setTodoList] = useState([]);

 //add [task] to todo list 
 const addTask = ( input ) => {
  setTodoList([ ...todoList, input]); //puts the new task on teh top and the old ones on the bottom
  console.log(todoList); //checking on to do list for ourselves
};

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100vw',
      fontFamily: 'andis',
    }}>
    <Typography style ={{padding: 16}} variant="h1">
    To Do App :)
    </Typography>

        <InputForm addTask={addTask} /> 
      <List>
        {todoList.map(task =>
          <Task
            title = {task.title}
            description = {task.description}
            dueDate = {task.dueDate}
          />

          )}
        </List>
    </div>
  );
}

export default App; 

