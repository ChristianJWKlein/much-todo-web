import { useState, useEffect } from 'react';
import { List, Checkbox } from 'antd';

export default function Task({
  item,
  setDoneTasks,
  setNotDoneTasks,
  setLoading,
}) {
  const [itemStyle, setItemStyle] = useState({});
  useEffect(() => {
    if (item.done) {
      setItemStyle({ color: 'grey', textDecoration: 'line-through' });
    } else {
      setItemStyle({ color: 'black', textDecoration: 'none' });
    }
  }, [item]);

  const handleToggleTaskDone = () => {
    setLoading(true);
    fetch(`https://much-todo-ck.uc.r.appspot.com/tasks/${item.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ done: !item.done }),
    })
      .then(() => {
        if (item.done) {
          fetch('https://much-todo-ck.uc.r.appspot.com/tasks/done')
            .then((res) => res.json())
            .then((data) => {
              setDoneTasks(data);
              setLoading(false);
            });
        } else {
          fetch('https://much-todo-ck.uc.r.appspot.com/tasks/notdone')
            .then((res) => res.json())
            .then((data) => {
              setNotDoneTasks(data);
              setLoading(false);
            });
        }
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };

  return (
    <>
      <List.Item style={itemStyle}>
        <Checkbox
          style={{ margin: '10px' }}
          onClick={handleToggleTaskDone}
          checked={item.done}
        ></Checkbox>
        {item.task}
      </List.Item>
    </>
  );
}
