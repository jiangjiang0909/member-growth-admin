import { X } from 'lucide-react'

interface GrowthRuleModalProps {
  onClose: () => void
}

function GrowthRuleModal({ onClose }: GrowthRuleModalProps) {
  const levels = [
    { name: '萌新会员', minGrowth: 0, maxGrowth: 99, benefits: ['基础服务保障', '订单短信提醒'] },
    { name: '白银会员', minGrowth: 100, maxGrowth: 499, benefits: ['优先派车', '专属客服', '生日礼遇'] },
    { name: '黄金会员', minGrowth: 500, maxGrowth: 1999, benefits: ['优先派车', '专属客服', '生日礼遇', '优惠券专享', '免费升舱'] },
    { name: '钻石会员', minGrowth: 2000, maxGrowth: -1, benefits: ['优先派车', '专属客服', '生日礼遇', '优惠券专享', '免费升舱', '机场贵宾服务', '积分加倍'] },
  ]

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden shadow-xl">
        <div className="bg-gradient-to-r from-primary-500 to-purple-600 px-4 py-4 flex items-center justify-between">
          <span className="text-white font-semibold text-lg">成长值规则</span>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-4 overflow-y-auto max-h-[calc(80vh-80px)]">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">等级规则</h3>
            <div className="space-y-3">
              {levels.map((level) => (
                <div key={level.name} className="bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-800">{level.name}</span>
                    <span className="text-sm text-gray-500">
                      {level.maxGrowth === -1 ? `${level.minGrowth}+` : `${level.minGrowth}-${level.maxGrowth}`} 成长值
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {level.benefits.map((benefit) => (
                      <span key={benefit} className="px-2 py-1 bg-white text-xs text-gray-600 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">保级规则</h3>
            <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
              <li className="flex items-start gap-2">
                <span className="text-primary-500">•</span>
                <span>会员等级每3个月进行一次评估</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500">•</span>
                <span>评估周期内满足对应等级条件即可保级</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500">•</span>
                <span>黄金及以上会员需保持订单评价率≥80%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500">•</span>
                <span>无恶意取消订单记录</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">降级规则</h3>
            <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>评估周期内成长值未达到当前等级要求</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>3个月内订单完成量不足当前等级标准</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>恶意取消订单累计超过3次</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">•</span>
                <span>降级后成长值重新计算，有效期重新开始</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrowthRuleModal
