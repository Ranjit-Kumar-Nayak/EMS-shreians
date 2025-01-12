import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist'
     className='h-[55%]  flex items-center justify-start gap-5 py-5 flex-nowrap overflow-x-auto w-full  mt-10 '>
        <div className='h-full flex-shrink-0  w-[300px] bg-yellow-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
              <h3 className='bg-red-400 px-3 py-1 font-bold rounded'>High</h3>
              <h4 className=''>12 Jan 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
            <p className='text-sm mt-2 text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat magnam ipsum nulla culpa aut fuga, itaque adipisci ratione incidunt debitis. Similique dignissimos doloremque ex consequuntur?</p>
        </div>
        
    </div>
  )
}

export default TaskList