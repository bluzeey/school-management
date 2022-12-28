import React from 'react'
import Sidebar from '../../components/Sidebar'

function edit() {
  return (
    <div className='flex'>
        <Sidebar user={'admin'}/>
        <div>
        <div className="flex justify-around">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
              <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">Edit classNamees</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
              <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">Edit Teachers</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
              <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">Edit Students</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default edit