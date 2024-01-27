import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
    const [tasks, setTasks] = useState([]);
    const [formState, setFormState] = useState({
        task: "", // string
        completed: false, // boolean
        assignTo: "", // string
    });

    function handleChange(event) {
        // Implement logic to handle form changes
        let value1;
        if (event.target.type == "checkbox") {
            value1 = event.target.checked;
        } else {
            value1 = event.target.value;
        }

        let newObj = {
            ...formState,     // Spred operator for copying previes value
            [event.target.name]: value1,
            id: Date.now()
        }

        setFormState(newObj);

    }

    // submit function
    function handleSubmit(event) {
        event.preventDefault();
        // Implement logic to handle form submission
        console.log(formState);
        let newList = [...tasks, formState];
        setTasks(newList);
        console.log(tasks);
        setFormState({
            task: "",
            completed: false,
            assignTo: ""
        });
    }

    // delete function
    function DeleteTask(e){
        let newList = [...tasks]
        newList.splice(Number(e.target.getAttribute("id").replace("btn", "")), 1)
        console.log(newList);
        setTasks(newList)
    }

    // update function
    function ToggleTask(e){
        let getID = Number(e.target.getAttribute("id").replace("tgl", ""));
        setFormState({
            task: tasks[getID].task,
            completed: tasks[getID].completed,
            assignTo: tasks[getID].assignTo
        });
        let newList = [...tasks]
        newList.splice(getID, 1)
        console.log(newList);
        setTasks(newList)
        
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input name="task" type="text" value={formState.task} placeholder="Add Task" onChange={handleChange} />
                    <label>
                        Completed:
                        <input name="completed" type="checkbox" checked={formState.completed} onChange={handleChange} />
                    </label>
                    <select name="assignTo" value={formState.assignTo} onChange={handleChange}>
                        <option value="">Select Assignee</option>
                        <option value="Bruce">Bruce</option>
                        <option value="Barry">Barry</option>
                        <option value="Clark">Clark</option>
                        <option value="Oliver">Oliver</option>
                        <option value="Jina">Jina</option>
                    </select>
                    <button type="submit">Add Task</button>
                </form>
            </div>
            <hr />
            {tasks.map((item, index) => (
                <TaskItem key={index} item={item} slid={index} deleteFunc={DeleteTask} tglFunc={ToggleTask} />
            ))}
        </>
    );
}

export default App;