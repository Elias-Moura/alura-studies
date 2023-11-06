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

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(previousTasks => 
        previousTasks.map(task => {
          if(task.id === selected.id) {
            return {...task, isSelected: false, isCompleted: true};
          }
          return task;
        }
        )
      )
    }
  }

  return (
    <div className={style.main__app}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks}
        selectTask={selectTask}
      />
      <StopWatch 
        selected={selected} 
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
