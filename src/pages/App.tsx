import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './app.module.scss';
import StopWatch from '../components/stopwatch';
import { ITask } from '../types/tasks';


function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  return (
    <div className={style.main__app}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <StopWatch />
    </div>
  );
}

export default App;
