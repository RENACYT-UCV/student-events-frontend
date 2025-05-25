import HomeMain from '@components/eventos/Home'
import HomeDescription from '@components/Home/HomeDescription'

export default function HomePage() {
  return (
    <>
      <div className="main-page">
        {/* Header is now handled by MainLayout */}
        <HomeDescription />
        <HomeMain />
      </div>
    </>
  )
}
