import React from 'react';
import saidali from 'src/__assets__/saidali.jpg';

const TaskListCard = () => {
  return (
    <div className="bg-white rounded shadow-md divide-y">
      <div className="px-5 py-5 flex">
        <img className="inline-block h-12 w-12 rounded-full" src={saidali.src} />
        <div className="py-1 ml-1 flex flex-col">
          <span className="font-semibold text-sm">Falonchi Aka</span>
          <span className="text-xs text-gray-600">Bill Master</span>
        </div>
      </div>
      <div className="flex flex-col px-5 py-5">
        <span className="text-xs text-gray-500 font-medium">10:58pm</span>
        <h6 className="mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non.
        </h6>
      </div>
      <div className="flex px-5 py-5 justify-between">
        <button className="py-2 px-2 bg-black text-white rounded text-sm">BUTTON</button>
        <button className="py-2 px-2 rounded text-sm border">BUTTON</button>
      </div>
    </div>
  );
};

export default TaskListCard;
