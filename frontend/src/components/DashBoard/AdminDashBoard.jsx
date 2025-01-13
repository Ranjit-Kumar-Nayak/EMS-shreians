import React from "react";
import Header from "../other/Header";

const AdminDashBoard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <div>
        <form className="flex flex-wrap bg-red-200 w-full items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Enter your task" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input type="date"  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"/>
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input className="text-sm px-2 py-1 w-4/5 outline-none bg-transparent rounded border-[1px] border-gray-400 mb-4" type="text" placeholder="Employee name" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input type="text" placeholder="design ,dev,etc" />
            </div>
          </div>
          <div className="w-1/2">
            <h3>Description</h3>
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </div>
          <button className="">Create Task</button>
        </form>
      </div> 
    </div>
  );
};

export default AdminDashBoard;
