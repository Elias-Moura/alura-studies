import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './app.module.scss';
import StopWatch from '../components/stopwatch';


function App() {
  return (
    <div className={style.main__app}>
      <Form />
      <List />
      <StopWatch />
    </div>
  );
}

export default App;
