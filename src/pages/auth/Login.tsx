import HeaderBar from '@components/HeaderBar'
import LoginScreen from '@components/LoginScreen'

export default function Login() {
  return (
    <>
      <div className='main-page'>
        <HeaderBar title="UniEventos"/>
        <LoginScreen />
      </div>
    </>
  )
}
