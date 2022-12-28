import React from "react";
import Sidebar from "../../components/Sidebar";

function edit() {
  return (
    <div className="flex">
      <Sidebar user={"admin"} />
      <div>
        <div className="flex justify-around">
          <div className="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
            <div className="px-6 py-4">
              <p className="font-bold text-xl mb-2">Edit Classes</p>
              <div className="flex">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add Class
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit Existing Class
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
            <div className="px-6 py-4">
              <p className="font-bold text-xl mb-2">Edit Teachers</p>
              <div className="flex">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add Teacher
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit Existing Teacher
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
            <div className="px-6 py-4">
              <p className="font-bold text-xl mb-2">Edit Students</p>
              <div className="flex">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add Student
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit Existing Student
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default edit;
