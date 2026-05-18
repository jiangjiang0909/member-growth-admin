import { useState } from 'react'
import RetirementCountdown from './pages/RetirementCountdown'
import SavingsProgress from './pages/SavingsProgress'
import RetirementPlan from './pages/RetirementPlan'
import BottomNav from './components/BottomNav'

type NavType = 'countdown' | 'savings' | 'plan'

function App() {
  const [currentPage, setCurrentPage] = useState<NavType>('countdown')

  const handleNavChange = (page: NavType) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {currentPage === 'countdown' && <RetirementCountdown />}
      {currentPage === 'savings' && <SavingsProgress />}
      {currentPage === 'plan' && <RetirementPlan />}
      <BottomNav currentPage={currentPage} onNavChange={handleNavChange} />
    </div>
  )
}

export default App