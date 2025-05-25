import Header from '@components/common/Header/Header'
import LoginScreen from '@components/auth/LoginScreen'

export default function Login() {
  return (
    <>
      <div className="main-page">
        <Header title="UniEventos" />
        <LoginScreen />
      </div>
    </>
  )
}
