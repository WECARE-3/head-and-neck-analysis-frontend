import axios from 'axios'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'

import { loginState, userState } from '../lib/recoil-atoms'

const IndexPage = () => {
  const router = useRouter()
  const isLoggedIn = useRecoilValue(loginState)
  const user = useRecoilValue(userState)

  const [files, setFiles] = useState({})
  const [image, setImage] = useState('')
  const [response, setResponse] = useState({})

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/login')
    }
  }, [isLoggedIn])

  function onFileChange({ target: { files } }) {
    console.log(files)

    setFiles(files)
    setImage(URL.createObjectURL(files[0]))
  }

  async function onSubmit() {
    const formData = new FormData()
    // for (let i = 0; i < files.length; i++) {
    //   formData.append('images', files[i])
    // }
    // setResponse(
    //   await axios.post('http://localhost:8000/api/analyze-images/', formData)
    // )
    console.log(response)

    router.push({
      pathname: '/result',
      query: {
        id: 'HN1004',
        clin_t_1: 0.1,
        clin_t_2: 0.1,
        clin_t_3: 0.11,
        clin_t_4: 0.86,
        clin_n_0: 0.03,
        clin_n_1: 0.1,
        clin_n_2: 0.77,
        clin_n_3: 0.1,
        clin_m_0: 0.68,
        clin_m_1: 0.32,
      },
    })
  }

  return (
    <>
      <div className='py-20'>
        <h1 className='text-5xl text-center text-gray-100'>
          Hello {user.username}!
        </h1>
        <div className='flex w-full items-center justify-center my-4'>
          <label className='w-64 flex flex-col items-center px-4 py-6 bg-transparent text-teal-700 rounded-full shadow-lg tracking-wide uppercase border-2 border-teal-700 cursor-pointer hover:bg-blue hover:bg-gray-800'>
            <svg
              className='w-8 h-8'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
            </svg>
            <span className='mt-2 text-base leading-normal'>Select a file</span>
            <input
              type='file'
              className='hidden'
              onChange={onFileChange}
              webkitdirectory=''
              mozdirectory=''
              directory=''
            />
          </label>
        </div>
        <div className='flex flex-col items-center justify-center my-4'>
          {image && <img src='/example_dicom.png' />}
          <button
            className='w-32 my-4 px-4 py-6 bg-transparent rounded-full border-2 border-teal-700 text-teal-700'
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default IndexPage
