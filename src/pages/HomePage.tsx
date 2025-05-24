import HeaderBar from '@components/HeaderBar'
import HomeMain from '@components/eventos/Home'
import HomeDescription from '@components/HomeDescription'

export default function HomePage() {
  return (
    <>
      <div className= "main-page">
        <HeaderBar title="Inicio"/>
        <HomeDescription />
        <HomeMain />
      </div>
    </>
  )
}
