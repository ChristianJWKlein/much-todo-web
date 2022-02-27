import { useEffect } from 'react';
import { List } from 'antd';
import Task from './Task';

export default function NotDoneTaskList({
  notDonetasks,
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
  }, []);

  return (
    <List
      loading={loading}
      className='task-list'
      bordered
      dataSource={notDonetasks}
      renderItem={(item) => (
        <>
          <Task
            item={item}
            setLoading={setLoading}
            setTasks={setNotDoneTasks}
          />
        </>
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
