import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
              <div className=''>Đăng nhập</div>
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
                className={`w-full p-3 bg-orange text-white font-medium mt-5 rounded-sm active:bg-[#e2492b] ${!inputPassword || !inputUsername ? 'cursor-not-allowed opacity-[0.7]' : 'cursor-pointer hover:opacity-[0.9]'}`}
              >
                ĐĂNG NHẬP
              </button>
              {/* 'w-full p-3 bg-orange text-white font-medium mt-5 rounded-sm' */}
              <div className='text-xs text-blue-700 mt-3 flex justify-between'>
                <Link to=''>Quên mật khẩu</Link>
                <Link to=''>Đăng nhập với SMS</Link>
              </div>
              <div className='mt-4 text-center text-sm'>
                Bạn mới biết đến Shopee?
                <Link className='text-orange' to='/register'>
                  Đăng kí
                </Link>
              </div>
              <div className='w-full text-sm flex justify-center gap-5'>
                <button className='w-[40%] border border-gray-400 rounded-sm py-2 text-center'>Facebook</button>
                <button className='w-[40%] border border-gray-400 rounded-sm py-2 text-center'>Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
