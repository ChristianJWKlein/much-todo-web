import { useState, useEffect } from "react";
import { List } from "antd";
import Task from "./Task";

//faking list data
const fakeTasks = [
  { id: 1, task: "Walk Dogs", done: false },
  { id: 2, task: "Challenge Problem", done: true },
  { id: 3, task: "Build Pumps", done: false },
  { id: 4, task: "Buy Beer", done: false },
  { id: 5, task: "See Mom", done: false },
];

export default function TaskList() {
  const [tasks, setTasks] = useState(fakeTasks);
  return (
    <List
      bordered
      dataSource={tasks}
      renderItem={(item) => <Task item={item} />}
    />
  );
}
