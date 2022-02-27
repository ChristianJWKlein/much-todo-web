import { useState } from 'react';
import { Tabs } from 'antd';
import NewTask from './NewTask';
import NotDoneTaskList from './NotDoneTaskList';
import DoneTaskList from './DoneTaskList';

const { TabPane } = Tabs;

export default function Main() {
  const [doneTasks, setDoneTasks] = useState([]);
  const [notDoneTasks, setNotDoneTasks] = useState([]);
  const [loading, setLoading] = useState();

  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <section style={{ background: 'lightgray', padding: '0 40px 40px' }}>
        <NewTask setNotDoneTasks={setNotDoneTasks} setLoading={setLoading} />
        <Tabs
          defaultActiveKey='1'
          onChange={callback}
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <TabPane tab='Tasks To Do' key='1'>
            <NotDoneTaskList
              notDoneTasks={notDoneTasks}
              setNotDoneTasks={setNotDoneTasks}
              loading={loading}
              setLoading={setLoading}
            />
          </TabPane>

          <TabPane tab='Tasks Done' key='2'>
            <DoneTaskList
              doneTasks={doneTasks}
              setDoneTasks={setDoneTasks}
              loading={loading}
              setLoading={setLoading}
            />
          </TabPane>
        </Tabs>
      </section>
    </>
  );
}
