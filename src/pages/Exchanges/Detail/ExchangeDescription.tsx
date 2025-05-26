import React from 'react'

interface Props {
  description: string
}

const ExchangeDescription: React.FC<Props> = ({ description }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold text-[#8dc647] mb-4">交易所介紹</h2>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
)

export default ExchangeDescription
