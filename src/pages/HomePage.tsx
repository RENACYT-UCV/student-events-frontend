import Header from '@components/common/Header/Header'
import HomeMain from '@components/eventos/Home'
import HomeDescription from '@components/Home/HomeDescription'

export default function HomePage() {
  return (
    <>
      <div className="main-page">
        <Header title="Inicio" />
        <HomeDescription />
        <HomeMain />
      </div>
    </>
  )
}
