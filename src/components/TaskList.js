import { useEffect } from "react";
import { List } from "antd";
import Task from "./Task";

export default function TaskList({ tasks, setTasks }) {
  useEffect(() => {
    //Get data from API
    fetch("https://much-todo-ck.uc.r.appspot.com/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(alert);
  }, []);

  return (
    <List
      bordered
      dataSource={tasks}
      renderItem={(item) => (
        <>
          <Task item={item} setTasks={setTasks} />
        </>
      )}
    />
  );
  //alt return method to show "Forms" without Library components
  // return (
  //   <>
  //     <ul>
  //       {tasks?.map((singleTask) => {
  //         return <li key={singleTask.id}>{singleTask.task}</li>;
  //       })}
  //     </ul>
  //   </>
  // );
}
