import { Input } from "antd";
import { useState } from "react";

export default function NewTask({ setTasks }) {
  const [newTask, setNewTask] = useState("");

  const handleButtonSubmit = () => {
    if (newTask.trim() === "") {
      //if new task is empty don't do anything
      return;
    }
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
        setNewTask("");
        fetch("https://much-todo-ck.uc.r.appspot.com/tasks")
          .then((res) => res.json())
          .then((data) => setTasks(data));
      })
      .catch((err) => alert(err));
  };

  const handleInputText = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <>
      <Input.Search
        value={newTask}
        placeholder="Enter Task Name"
        enterButton="Add Task"
        size="large"
        onSearch={handleButtonSubmit}
        onChange={handleInputText}
      />
    </>
  );
}
