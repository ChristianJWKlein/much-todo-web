import { Input } from "antd";
import { useState } from "react";

export default function NewTask() {
  const [newTask, setNewTask] = useState("");

  const taskObject = {
    task: newTask,
  };

  const handleButtonSubmit = () => {
    console.log("Sending to API");

    fetch("https://much-todo-ck.uc.r.appspot.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskObject),
    })
      .then((res) => res.json())
      .then((data) => console.log("data was added", data))
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
