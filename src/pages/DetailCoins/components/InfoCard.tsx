import React from 'react'

interface InfoCardProps {
  label: string
  value: React.ReactNode
  valueClassName?: string
}

const InfoCard: React.FC<InfoCardProps> = ({ label, value, valueClassName }) => (
  <div className="flex flex-col w-full h-full bg-gradient-to-br from-[#23272f] via-gray-800 to-[#23272f] rounded-2xl p-5 shadow border border-[#8dc647]/20 min-w-0">
    <div className="text-md text-gray-400 mb-2 font-semibold tracking-widest uppercase whitespace-nowrap">{label}</div>
    <div
      className={`flex-1 flex items-center text-ellipsis overflow-x-auto ${valueClassName ?? ''}`}
      style={{ minHeight: '2.5rem' }}
    >
      {value}
    </div>
  </div>
)

export default InfoCard
