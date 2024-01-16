import React, { useState } from 'react'

export default function Login() {
  const [inputUsername, setInputUsername] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  console.log(!inputPassword || !inputUsername)
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-10 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form onSubmit={handleSubmit} className='p-10 rounded bg-white shadow-sm'>
              <div className='text-2xl'>Đăng nhập</div>
              <div className='mt-8'>
                <input
                  type='text'
                  placeholder='Email'
                  className='p-3 w-full border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  value={inputUsername}
                  onChange={(e) => setInputUsername(e.target.value)}
                />
                {/* <div className='mt-1 text-red-600 min-h-[1rem] text-sm'>Email không hợp lệ</div> */}
              </div>
              <div className='mt-6'>
                <input
                  type='password'
                  placeholder='Password'
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  className='p-3 w-full border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                />
              </div>
              <button
                type='submit'
                disabled={!inputPassword || !inputUsername}
                className={`w-full p-3 bg-orange text-white font-medium mt-5 rounded-sm ${!inputPassword || !inputUsername ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                ĐĂNG NHẬP
              </button>
              {/* 'w-full p-3 bg-orange text-white font-medium mt-5 rounded-sm' */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
