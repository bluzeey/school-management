import React from "react";
import Sidebar from "../../components/Sidebar";
import StudentData from "../../data/students.json";

function students() {
  return (
    <div className="flex">
      <Sidebar user={'Student'}/>
      <div>
        <h3 className="font-bold text-xl m-auto p-3 text-center">Students</h3>
        <div className="flex justify-around">
          {StudentData.students.student.map((student) => (
            <div key={student.name} className="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
              <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">{student.name}</p>
                <p className="text-gray-700 text-base">{student.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default students
