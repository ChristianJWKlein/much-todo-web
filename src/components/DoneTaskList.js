import { List } from 'antd';
import { useEffect } from 'react';
import Task from './Task';

export default function DoneTaskList({
  doneTasks,
  setDoneTasks,
  loading,
  setLoading,
}) {
  setLoading(false);

  useEffect(() => {
    fetch('https://much-todo-ck.uc.r.appspot.com/tasks/done')
      .then((response) => response.json())
      .then((data) => {
        setDoneTasks(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <List
      loading={loading}
      className='task-list'
      bordered
      dataSource={doneTasks}
      renderItem={(item) => (
        <Task item={item} setLoading={setLoading} setDoneTasks={setDoneTasks} />
      )}
    />
  );
}
