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
        <div className='grid grid-cols-1 lg:grid-cols-5 py-10 lg:py-32 lg:pr-10 lg:mx-0'>
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
              <div className='w-full text-sm flex justify-center gap-5 mt-5'>
                <button className='w-[40%] border border-gray-400 rounded-sm py-2 text-center'>Facebook</button>
                <button className='w-[40%] border border-gray-400 rounded-sm py-2 text-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' x='20px' y='0px' width='30' height='30' viewBox='0 0 48 48'>
                    <path
                      fill='#FFC107'
                      d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
                    ></path>
                    <path
                      fill='#FF3D00'
                      d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
                    ></path>
                    <path
                      fill='#4CAF50'
                      d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
                    ></path>
                    <path
                      fill='#1976D2'
                      d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
                    ></path>
                  </svg>
                  Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
