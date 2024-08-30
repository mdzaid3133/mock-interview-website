import React from 'react'
import AddNewInterview from './_components/AddNewInterview'

function Dashboard() {
  return (
    <div>
    <h2 className='text-2x font-bold '>Dashboard</h2>
     <h2 className='text-2x font-bold '>Create and Start your AI Mock Interview</h2>

      <div className='grid grid-cols-1 md:grid-col-3 my-5'>
       <AddNewInterview/>
      </div>
    </div>
  )
}

export default Dashboard