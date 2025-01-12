import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex flex-wrap justify-center  w-full mt-10 gap-5 overflow-x-hidden">
      <div className="p-10 w-[25%] bg-red-400 rounded-xl ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="p-10 w-[25%] bg-blue-400 rounded-xl ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="p-10 w-[25%] bg-green-400 rounded-xl ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="p-10 w-[25%] bg-yellow-400 rounded-xl ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
