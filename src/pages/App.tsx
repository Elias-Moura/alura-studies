import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './app.module.scss';

function App() {
  return (
    <div className={style.main__app}>
      <Form />
      <List />
    </div>
  );
}

export default App;
