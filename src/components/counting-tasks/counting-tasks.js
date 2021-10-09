import React from 'react';

import './counting-tasks.css';

const CountingTasks = ({toDo, done}) => {
  return (
    <p className="counting-tasks">{toDo} еще сделать, {done} сделано</p>
  );

};

export default CountingTasks;
