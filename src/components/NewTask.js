import { Input } from "antd";
import { useState } from "react";

export default function NewTask({ setTasks }) {
  const [newTask, setNewTask] = useState("");

  const handleButtonSubmit = () => {
    const taskObject = {
      task: newTask,
    };
    console.log("Sending to API");

    fetch("https://much-todo-ck.uc.r.appspot.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskObject),
    })
      .then(() => {
        fetch("https://much-todo-ck.uc.r.appspot.com/tasks")
          .then((res) => res.json())
          .then((data) => setTasks(data));
      })
      .catch((err) => alert(err));
  };

  const handleInputText = (e) => {
    setNewTask(e.target.value);
  };

  console.log(newTask);

  return (
    <>
      <h2>Add New Task</h2>
      <Input
        placeholder="Enter Task Name"
        onChange={(e) => handleInputText(e)}
      />
      <button onClick={handleButtonSubmit}>Send new task to API</button>
    </>
  );
}
