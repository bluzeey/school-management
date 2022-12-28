import React from 'react'
import ClassesData from '../../data/classes.json'
import Sidebar from '../../components/Sidebar'

function classes() {
  return (
    <div class="flex">
    <Sidebar />
    <div>
      <h3 class="font-bold text-xl m-auto p-3 text-center">Classes</h3>
      <div class="flex justify-around">
        {ClassesData.classes.class.map((Class) => (
          <div class="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
            <div class="px-6 py-4">
              <p class="font-bold text-xl mb-2">{Class.name}</p>
              <p class="text-gray-700 text-base">{Class.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default classes