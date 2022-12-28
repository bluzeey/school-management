import React from 'react'
import TeacherData from '../../data/teachers.json'
import Sidebar from '../../components/Sidebar'

function teacher() {
  return (
    <div class="flex">
      <Sidebar user='teacher'/>
      <div>
        <h3 class="font-bold text-xl m-auto p-3 text-center">Students</h3>
        <div class="flex justify-around">
          {TeacherData.teachers.teacher.map((teacher) => (
            <div class="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
              <div class="px-6 py-4">
                <p class="font-bold text-xl mb-2">{teacher.name}</p>
                <p class="text-gray-700 text-base">{teacher.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default teacher