import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
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
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-8'>
                <input
                  type='text'
                  placeholder='Số điện thoại'
                  className='p-3 w-full border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  value={inputUsername}
                  onChange={(e) => setInputUsername(e.target.value)}
                />
                {/* <div className='mt-1 text-red-600 min-h-[1rem] text-sm'>Email không hợp lệ</div> */}
              </div>
              <button
                type='submit'
                disabled={!inputPassword || !inputUsername}
                className={`w-full p-3 bg-orange text-white font-medium mt-5 rounded-sm active:bg-[#e2492b] ${!inputPassword || !inputUsername ? 'cursor-not-allowed opacity-[0.7]' : 'cursor-pointer hover:opacity-[0.9]'}`}
              >
                TIẾP THEO
              </button>
              <div className='w-full text-sm flex justify-center gap-5 mt-7'>
                <button className='w-[40%] border border-gray-400 rounded-sm py-2 flex items-center justify-center gap-1 active:bg-gray-200'>
                  <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='30' height='30' viewBox='0 0 48 48'>
                    <path fill='#039be5' d='M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z'></path>
                    <path
                      fill='#fff'
                      d='M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z'
                    ></path>
                  </svg>
                  Facebook
                </button>
                <button className='w-[40%] border active:bg-gray-200 border-gray-400 rounded-sm py-2 flex items-center justify-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className=''
                    x='0px'
                    y='0px'
                    width='30'
                    height='30'
                    viewBox='0 0 48 48'
                  >
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
              <div className='text-center text-xs mt-3'>
                <div>Bằng việc đăng kí, bạn đã đồng ý với Shopee về</div>
                <div>
                  <Link to='/'>Điều khoản dịch vụ</Link>&<Link to=''>Chính sách bảo mật</Link>
                </div>
              </div>
              <div className='mt-7 text-center text-sm'>
                Bạn mới biết đến Shopee?
                <Link className='text-orange mx-1' to='/register'>
                  Đăng kí
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
