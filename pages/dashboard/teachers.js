import React from 'react'
import TeacherData from '../../data/teachers.json'
import Sidebar from '../../components/Sidebar'

function teacher() {
  return (
    <div className="flex">
      <Sidebar user='teacher'/>
      <div>
        <h3 className="font-bold text-xl m-auto p-3 text-center">Teachers</h3>
        <div className="flex justify-around">
          {TeacherData.teachers.teacher.map((teacher) => (
            <div key={teacher.name} className="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
              <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">{teacher.name}</p>
                <p className="text-gray-700 text-base">{teacher.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default teacher