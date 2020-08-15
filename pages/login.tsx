import Head from 'next/head'

import LoginForm from '../components/Login/LoginForm'

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm />
    </>
  )
}

export default LoginPage
