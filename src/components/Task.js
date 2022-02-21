import { useState, useEffect } from "react";
import { List, Checkbox } from "antd";

export default function Task({ item, setTasks }) {
  const [itemStyle, setItemStyle] = useState({});
  useEffect(() => {
    if (item.done) {
      setItemStyle({ color: "grey", textDecoration: "line-through" });
    } else {
      setItemStyle({ color: "black", textDecoration: "none" });
    }
  }, [item]);

  const handleToggleTaskDone = () => {
    //check if task is done or not
    //get task id
    //call api -- patch: `/tasks/${item.id}` send { done: !item.done }
    //THEN: fetch our tasks
    //THEN: setTasks(data)

    fetch(`https://much-todo-ck.uc.r.appspot.com/tasks/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: !item.done }),
    })
      .then(() => {
        fetch("https://much-todo-ck.uc.r.appspot.com/tasks")
          .then((res) => res.json())
          .then((data) => setTasks(data));
      })
      .catch(alert);
  };

  return (
    <>
      <List.Item style={itemStyle}>
        <Checkbox
          style={{ margin: "10px" }}
          onClick={handleToggleTaskDone}
          checked={item.done}
        ></Checkbox>
        {item.task}
      </List.Item>
    </>
  );
}
