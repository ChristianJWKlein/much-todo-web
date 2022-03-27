import { Input, Button } from 'antd';
import { useState } from 'react';

export default function NewTask({ setLoading }) {
  const [newTask, setNewTask] = useState('');

  const handleButtonSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') {
      //if new task is empty don't do anything
      return;
    }
    setLoading(true);
    const taskObject = {
      task: newTask,
    };

    fetch('https://much-todo-ck.uc.r.appspot.com/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskObject),
    })
      .then(() => {
        setNewTask('');
        fetch('https://much-todo-ck.uc.r.appspot.com/tasks')
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            setNewTask(data);
          });
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };

  const handleInputText = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <section>
      <Input.Group compact style={{ display: 'flex' }}>
        <Input
          value={newTask}
          placeholder='Enter New Task'
          onChange={handleInputText}
        />
        <Button
          className='add-task-btn'
          type='default'
          size='large'
          onClick={handleButtonSubmit}
        >
          Add New Task
        </Button>
      </Input.Group>
    </section>
  );
}
