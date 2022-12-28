import React from 'react'
import Sidebar from '../../components/Sidebar'

function edit() {
  return (
    <div class='flex'>
        <Sidebar user={'admin'}/>
        <div>
        <div class="flex justify-around">
            <div class="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
              <div class="px-6 py-4">
                <p class="font-bold text-xl mb-2">Edit Classes</p>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
              <div class="px-6 py-4">
                <p class="font-bold text-xl mb-2">Edit Teachers</p>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg p-2 m-2 ">
              <div class="px-6 py-4">
                <p class="font-bold text-xl mb-2">Edit Students</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default edit