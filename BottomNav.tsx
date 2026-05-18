import { Clock, PiggyBank, Briefcase } from 'lucide-react'

type NavType = 'countdown' | 'savings' | 'plan'

interface BottomNavProps {
  currentPage: NavType
  onNavChange: (page: NavType) => void
}

function BottomNav({ currentPage, onNavChange }: BottomNavProps) {
  const navItems = [
    { id: 'countdown' as NavType, icon: Clock, label: '倒计时' },
    { id: 'savings' as NavType, icon: PiggyBank, label: '存钱计划' },
    { id: 'plan' as NavType, icon: Briefcase, label: '退休计划' },
  ]

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-14">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavChange(item.id)}
              className={`flex flex-col items-center justify-center w-16 h-full transition-colors ${
                isActive ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-xs mt-0.5 font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNav