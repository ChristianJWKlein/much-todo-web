import { List } from 'antd';
import { useEffect } from 'react';
import Task from './Task';

export default function DoneTaskList({
  doneTasks,
  setDoneTasks,
  loading,
  setLoading,
}) {
  useEffect(() => {
    setLoading(true);
    fetch('https://much-todo-ck.uc.r.appspot.com/tasks/done')
      .then((response) => response.json())
      .then((data) => {
        setDoneTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  }, []);

  return (
    <List
      loading={loading}
      className='task-list'
      bordered
      dataSource={doneTasks}
      renderItem={(item) => (
        <Task
          item={item}
          setLoading={setLoading}
          setCompletedTasks={setDoneTasks}
        />
      )}
    />
  );
}
