import HomeMain from '@components/eventos/Home'
import HomeDescription from '@components/Home/HomeDescription'

export default function HomePage() {
  return (
    <>
      <div className="main-page">
        <img
        src="/assets/images/background_2.png"
        alt=""
        className="fixed top-0 sm:mr-10 sm:top-5 left-0 w-full h-full opacity-100 object-cover z-0"

        />
        {/* Header is now handled by MainLayout */}
        <HomeDescription />
        <HomeMain />
      </div>
    </>
  )
}
