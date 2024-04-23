import React from 'react'

const Assignment1 = () => {
  return (
    <>
    <div className='flex items-center justify-center w-screen h-screen bg-slate-900 '>
      <div className='shadow-lg shadow-white w-max'>
        <div className='relative flex flex-col justify-between h-96 w-96'>
          <img
            src='/car.jpg'
            className='absolute inset-0 object-cover m-auto border-4 border-white rounded-full w-36 h-36'
          />

          <img
            src='https://images.unsplash.com/photo-1548602088-9d12a4f9c10f?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='h-[50%] object-cover bg-cyan-200'
          ></img>
          <div className='flex flex-col items-center justify-end h-full py-4 bg-white'>
            <div>
              <h2 className='font-bold'>
                Ayush <span className='font-semibold opacity-50 '>23</span>
              </h2>
              <p className='opacity-60'>New Delhi</p>
            </div>
          </div>
        </div>
        <hr />
        <div className='flex items-center justify-around py-4 bg-white'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>80K</h2>{' '}
            <p className='text-sm opacity-50'>Followers</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>80K</h2>{' '}
            <p className='text-sm opacity-50'>Likes</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>2K</h2>{' '}
            <p className='text-sm opacity-50'>Photos</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Assignment1