import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'

import { loginState, userState } from '../lib/recoil-atoms'

const IndexPage = () => {
  const router = useRouter()
  const isLoggedIn = useRecoilValue(loginState)
  const user = useRecoilValue(userState)

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/login')
    }
  }, [isLoggedIn])

  return (
    <div>
      <div className='py-20'>
        <h1 className='text-5xl text-center text-gray-100'>
          Hello {user.username}!
        </h1>
      </div>
    </div>
  )
}

export default IndexPage
