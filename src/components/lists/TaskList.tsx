import React from 'react';
import CardHeading from '../headings/CardHeading';
import TaskListCard from './TaskListCard';

const TaskList = () => {
  return (
    <div className="mb-5">
      <CardHeading>HEADING_TEXT</CardHeading>
      <div className="grid overflow-hidden xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm-grid-cols-1 grid-rows-2 gap-5 mt-5">
        <TaskListCard />
        <TaskListCard />
        <TaskListCard />
        <TaskListCard />
        <TaskListCard />
        <TaskListCard />
        <TaskListCard />
        <TaskListCard />
        <TaskListCard />
      </div>
    </div>
  );
};

export default TaskList;
