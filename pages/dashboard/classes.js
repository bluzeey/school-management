import React from 'react'
import classesData from '../../data/classes.json'
import Sidebar from '../../components/Sidebar'

function classes() {
  return (
    <div className="flex">
    <Sidebar />
    <div>
      <h3 className="font-bold text-xl m-auto p-3 text-center">Classes</h3>
      <div className="flex justify-around">
        {classesData.classes.class.map((Class) => (
          <div key={Class.name} className="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
            <div className="px-6 py-4">
              <p className="font-bold text-xl mb-2">{Class.name}</p>
              <p className="text-gray-700 text-base">{Class.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default classes