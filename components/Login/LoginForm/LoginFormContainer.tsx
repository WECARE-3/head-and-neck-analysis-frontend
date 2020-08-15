import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'

import LoginFormPresenter from './LoginFormPresenter'
import { userState } from '../../../lib/recoil-atoms'

const LoginFormContainer = () => {
  const router = useRouter()
  const setUser = useSetRecoilState(userState)

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()

    setUser({
      username: 'testuser',
    })

    router.push('/')
  }

  return <LoginFormPresenter onSubmit={onSubmit} />
}

export default LoginFormContainer
