import { X } from 'lucide-react'

interface GuideModalProps {
  onClose: () => void
}

function GuideModal({ onClose }: GuideModalProps) {
  const features = [
    { icon: '🚗', title: '一键叫车', desc: '快速呼叫附近车辆，出行更便捷' },
    { icon: '💰', title: '优惠多多', desc: '丰富优惠券，打车更省钱' },
    { icon: '🎁', title: '会员权益', desc: '成长值体系，尊享专属特权' },
  ]

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-xl">
        <div className="bg-gradient-to-r from-primary-500 to-purple-600 px-4 py-4 flex items-center justify-between">
          <span className="text-white font-semibold text-lg">🎉 欢迎使用丰速行</span>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 py-4 border-b border-gray-100 last:border-0">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center text-xl">
                {feature.icon}
              </div>
              <div>
                <div className="font-semibold text-gray-800">{feature.title}</div>
                <div className="text-sm text-gray-500 mt-1">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 pt-0">
          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            立即体验
          </button>
        </div>
      </div>
    </div>
  )
}

export default GuideModal
