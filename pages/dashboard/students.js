import React from "react";
import Sidebar from "../../components/Sidebar";
import StudentData from "../../data/students.json";

function students() {
  return (
    <div class="flex">
      <Sidebar user={'Student'}/>
      <div>
        <h3 class="font-bold text-xl m-auto p-3 text-center">Students</h3>
        <div class="flex justify-around">
          {StudentData.students.student.map((student) => (
            <div class="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
              <div class="px-6 py-4">
                <p class="font-bold text-xl mb-2">{student.name}</p>
                <p class="text-gray-700 text-base">{student.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default students
