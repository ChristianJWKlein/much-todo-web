import { useEffect } from 'react';
import { List } from 'antd';
import Task from './Task';

export default function NotDoneTaskList({
  notDoneTasks,
  setNotDoneTasks,
  loading,
  setLoading,
}) {
  useEffect(() => {
    setLoading(true);
    fetch('https://much-todo-ck.uc.r.appspot.com/tasks/notdone')
      .then((res) => res.json())
      .then((data) => {
        setNotDoneTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  }, [setNotDoneTasks]);

  return (
    <List
      loading={loading}
      className='task-list'
      bordered
      dataSource={notDoneTasks}
      renderItem={(item) => (
        <Task
          item={item}
          setLoading={setLoading}
          setNotDoneTasks={setNotDoneTasks}
        />
      )}
    />
  );
}
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
