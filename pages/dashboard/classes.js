import React from 'react'
import classNameesData from '../../data/classNamees.json'
import Sidebar from '../../components/Sidebar'

function classNamees() {
  return (
    <div className="flex">
    <Sidebar />
    <div>
      <h3 className="font-bold text-xl m-auto p-3 text-center">classNamees</h3>
      <div className="flex justify-around">
        {classNameesData.classNamees.className.map((className) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
            <div className="px-6 py-4">
              <p className="font-bold text-xl mb-2">{className.name}</p>
              <p className="text-gray-700 text-base">{className.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default classNamees