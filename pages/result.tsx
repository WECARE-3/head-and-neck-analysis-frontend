import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { floatToPercent } from '../utils/numbers'

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
    clin_t_3,
    clin_t_4,
    clin_n_0,
    clin_n_2,
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
                    <td className='border px-4 py-2 text-bold text-teal-500'>
                      4
                    </td>
                    <td className='border px-4 py-2'>
                      {floatToPercent(Number(clin_t_4))}
                    </td>
                    <td className='border px-4 py-2 text-bold text-teal-500'>
                      3
                    </td>
                    <td className='border px-4 py-2'>
                      {floatToPercent(Number(clin_t_3))}
                    </td>
                  </tr>
                  <tr>
                    <td className='border px-4 py-2'>N</td>
                    <td className='border px-4 py-2 text-bold text-teal-500'>
                      2
                    </td>
                    <td className='border px-4 py-2'>
                      {floatToPercent(Number(clin_n_2))}
                    </td>
                    <td className='border px-4 py-2 text-bold text-teal-500'>
                      0
                    </td>
                    <td className='border px-4 py-2'>
                      {floatToPercent(Number(clin_n_0))}
                    </td>
                  </tr>
                  <tr>
                    <td className='border px-4 py-2'>M</td>
                    <td className='border px-4 py-2 text-bold text-teal-500'>
                      0
                    </td>
                    <td className='border px-4 py-2'>
                      {floatToPercent(Number(clin_m_0))}
                    </td>
                    <td className='border px-4 py-2 text-bold text-teal-500'>
                      1
                    </td>
                    <td className='border px-4 py-2'>
                      {floatToPercent(Number(clin_m_1))}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='text-gray-100 text-xl'>
                <span className='italic'>{id}</span>님의 TNM 모의진단 결과,{' '}
                <span className='text-teal-500 font-bold'>
                  {' '}
                  T ( 4 ) / N ( 2 ) / M ( 0 )
                </span>
                이므로, 현재 AJCC Step은 현재{' '}
                <span className='text-teal-500 font-bold'>IV a기</span>로 진행될
                가능성이
                <span className='text-teal-500 font-bold'> 77%</span>입니다.
                재발 가능성은 현재{' '}
                <span className='text-teal-500 font-bold'>65.2%</span>입니다.
              </div>
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
            More info...
          </button>
          {openMoreinfo && (
            <div className='w-full'>
              <h1 className='text-3xl text-gray-100 text-left mb-2'>
                Radiation therapy
              </h1>
              <h2 className='text-2xl text-gray-200 text-left mb-4'>
                Radiation prediction:{' '}
                <span className='text-teal-500'>69.81 Grey</span>
              </h2>
              <div className='grid gap-8 grid-cols-2 w-full'>
                <div className='col-span-1 w-full'>
                  <h4 className='text-xl text-gray-100'>Patient Data</h4>
                  <table className='table-auto w-full my-2 bg-gray-800 text-gray-100'>
                    <tr>
                      <td className='text-teal-500 font-bold px-2 py-4'>
                        Gender
                      </td>
                      <td>Male</td>
                    </tr>
                    <tr>
                      <td className='text-teal-500 font-bold px-2 py-4'>
                        Cancer location
                      </td>
                      <td>Oropharynx</td>
                    </tr>
                    <tr>
                      <td className='text-teal-500 font-bold px-2 py-4'>Age</td>
                      <td>56</td>
                    </tr>
                    <tr>
                      <td className='text-teal-500 font-bold px-2 py-4'>
                        Cancer Surgery
                      </td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td className='text-teal-500 font-bold px-2 py-4'>
                        Chemotherapy
                      </td>
                      <td>concomitant</td>
                    </tr>
                  </table>
                </div>
                <div className='col-span-1 w-full'>
                  <h4 className='text-xl text-gray-100'>Modeling Report</h4>
                  <table className='table-auto w-full my-2 bg-gray-800 text-gray-100'>
                    <tr>
                      <td className='text-teal-500 font-bold px-2 py-4'>
                        Methods
                      </td>
                      <td>Gradient Boosting</td>
                    </tr>
                    <tr>
                      <td className='text-teal-500 font-bold px-2 py-4'>R^2</td>
                      <td>Train 0.994 / Text 0.882</td>
                    </tr>
                    <tr>
                      <td className='text-teal-500 font-bold px-2 py-4'>
                        Mean Square Error
                      </td>
                      <td>0.005 / 0.936</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ResultPage
