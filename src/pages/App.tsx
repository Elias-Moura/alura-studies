import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './app.module.scss';
import StopWatch from '../components/stopwatch';
import { ITask } from '../types/tasks';


function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(previousTasks => previousTasks.map(task =>
      (
        {
        ...task, 
        isSelected: task.id === selectedTask.id ? true : false
        }
      )
      ));
  }
  return (
    <div className={style.main__app}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks}
        selectTask={selectTask}
      />
      <StopWatch />
    </div>
  );
}

export default App;
