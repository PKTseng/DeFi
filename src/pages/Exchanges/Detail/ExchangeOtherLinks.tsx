import React from 'react'
import { ExternalLink } from 'lucide-react'

interface Props {
  other_url_1?: string
  other_url_2?: string
}

const ExchangeOtherLinks: React.FC<Props> = ({ other_url_1, other_url_2 }) => {
  if (!other_url_1 && !other_url_2) return null
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold text-[#8dc647] mb-4">其他資源</h3>
      <div className="space-y-2">
        {other_url_1 && (
          <a
            href={other_url_1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ExternalLink size={16} />
            <span className="text-sm">Medium</span>
          </a>
        )}
        {other_url_2 && (
          <a
            href={other_url_2}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ExternalLink size={16} />
            <span className="text-sm">Steemit</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default ExchangeOtherLinks
