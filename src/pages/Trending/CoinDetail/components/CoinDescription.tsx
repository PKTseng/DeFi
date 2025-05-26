import React from 'react'

interface CoinDescriptionProps {
  description: string
}

const CoinDescription: React.FC<CoinDescriptionProps> = ({ description }) => (
  <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
    <h2 className="text-2xl font-bold text-[#8dc647] mb-4">簡介</h2>
    <div
      className="prose prose-sm prose-invert max-w-none text-gray-300 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: description.replace(/\r\n/g, '<br />') }}
    />
  </div>
)

export default CoinDescription
