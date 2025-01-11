import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";

const EmployeeDashBoard = () => {
  return (
    <div className="p-16 bg-[#1c1c1c]">
      <Header />
      <TaskListNumber/>
    </div>
  );
};

export default EmployeeDashBoard;
