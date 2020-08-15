interface LoginFormPresenterProps {
  onSubmit: React.FormEventHandler
}

const LoginFormPresenter: React.FC<LoginFormPresenterProps> = ({
  onSubmit,
}) => {
  return (
    <div className='h-screen flex items-center justify-center flex-col'>
      <h1 className='text-5xl text-center text-gray-100 mb-8'>Login</h1>
      <form className='w-full max-w-sm'>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label className='block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4'>
              Username
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-700 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-gray-900 focus:border-teal-400'
              type='text'
              value='testuser'
            ></input>
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label className='block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4'>
              Password
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-700 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-gray-900 focus:border-teal-400'
              type='password'
              value='testpassword'
            ></input>
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3'>
            <button
              className='shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
              onClick={onSubmit}
            >
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginFormPresenter
