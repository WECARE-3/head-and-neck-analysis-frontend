import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { floatToPercent } from '../utils/numbers'
import { ParsedUrlQuery } from 'querystring'

const ResultPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [openMoreinfo, setOpenMoreinfo] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1200)
  }, [])

  const {
    id,
    clin_t_1,
    clin_t_2,
    clin_t_3,
    clin_t_4,
    clin_n_0,
    clin_n_1,
    clin_n_2,
    clin_n_3,
    clin_m_0,
    clin_m_1,
  } = router.query

  const onClickMoreinfo = () => {
    setOpenMoreinfo(true)
  }

  return loading ? (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
      <h1 className='text-4xl text-gray-100'>Loading...</h1>
    </div>
  ) : (
    <>
      <div className='m-20'>
        <h1 className='text-3xl text-left text-gray-100'>
          Patient ID: <span className='italic'>{id}</span>
        </h1>
        {/* Start Grid */}
        <div className='grid gap-8 grid-cols-3'>
          {/* Left side */}
          <div className='col-span-2'>
            <div className='w-full my-2'>
              <h1 className='text-2xl text-gray-100'>AJCC TNM Diagnosis</h1>
              <table className='table-auto text-gray-100 mb-4'>
                <thead>
                  <tr>
                    <th className='px-4 py-2'>TNM</th>
                    <th className='px-4 py-2' colSpan={4}>
                      Prob
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-gray-800 text-center'>
                  <tr>
                    <td className='border px-4 py-2'>T</td>
                    <td className='border px-4 py-2'>
                      {floatToPercent(Number(clin_t_1))}
                    </td>
                    <td className='border px-4 py-2'>
                      {floatToPercent(Number(clin_t_2))}
                    </td>
                    <td className='border px-4 py-2'>
                      {floatToPercent(Number(clin_t_3))}
                    </td>
                    <td className='border px-4 py-2'>
                      {floatToPercent(Number(clin_t_4))}
                    </td>
                  </tr>
                  <tr>
                    <td className='border px-4 py-2'>N</td>
                    <td className='border px-4 py-2'>
                      {floatToPercent(Number(clin_n_0))}
                    </td>
                    <td className='border px-4 py-2'>
                      {floatToPercent(Number(clin_n_1))}
                    </td>
                    <td className='border px-4 py-2'>
                      {floatToPercent(Number(clin_n_2))}
                    </td>
                    <td className='border px-4 py-2'>
                      {floatToPercent(Number(clin_n_3))}
                    </td>
                  </tr>
                  <tr>
                    <td className='border px-4 py-2'>M</td>
                    <td className='border px-4 py-2' colSpan={2}>
                      {floatToPercent(Number(clin_m_0))}
                    </td>
                    <td className='border px-4 py-2' colSpan={2}>
                      {floatToPercent(Number(clin_m_1))}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className='text-gray-100'>
                {id}님의 모의진단 결과, T() N() M()이므로, 현재
              </p>
            </div>
          </div>
          {/* Right side */}
          <div className='col-span-1'>
            <img src='/example_dicom.png' />
          </div>
        </div>
        {/* End grid */}
        <div className='flex flex-col w-full items-center justify-center my-4'>
          <button
            className='mb-8 px-8 py-6 bg-transparent rounded-full border-2 border-teal-700 text-teal-700 cursor-pointer hover:bg-blue hover:bg-gray-800'
            onClick={onClickMoreinfo}
          >
            Enter more info...
          </button>
          {/* {openMoreinfo && (
            <div className='grid gap-8 grid-cols-2 w-full'>
              <div className='col-span-1 w-full'>
                <h1 className='text-3xl text-gray-100 mb-4'>
                  Radiation therapy
                </h1>
                <div className='flex items-center'>
                  <label className='w-16 text-gray-200 font-bold text-right mb-1 pr-4'>
                    정보1
                  </label>
                  <input
                    className='bg-gray-700 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-gray-900 focus:border-teal-400'
                    type='text'
                  />
                </div>
              </div>
              <div className='col-span-1 w-full'>
                <h1 className='text-3xl text-gray-100 mb-4'>Chemotheraphy</h1>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </>
  )
}

export default ResultPage
