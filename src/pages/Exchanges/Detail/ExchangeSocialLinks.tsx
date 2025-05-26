import React from 'react'
import { Globe, FacebookIcon, MessageCircle, Twitter, ExternalLink } from 'lucide-react'

interface Props {
  url: string
  facebook_url?: string
  reddit_url?: string
  twitter_handle?: string
}

const ExchangeSocialLinks: React.FC<Props> = ({ url, facebook_url, reddit_url, twitter_handle }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
    <h3 className="text-xl font-bold text-[#8dc647] mb-4">官方連結</h3>
    <div className="space-y-3">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-3 bg-gray-700 hover:bg-[#8dc647]/20 rounded-lg transition-colors group"
      >
        <Globe className="text-[#8dc647] group-hover:text-white" size={20} />
        <span className="text-gray-300 group-hover:text-white">官方網站</span>
        <ExternalLink className="ml-auto text-gray-500 group-hover:text-[#8dc647]" size={16} />
      </a>
      {facebook_url && (
        <a
          href={facebook_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-gray-700 hover:bg-[#8dc647]/20 rounded-lg transition-colors group"
        >
          <FacebookIcon className="text-[#8dc647] group-hover:text-white" size={20} />
          <span className="text-gray-300 group-hover:text-white">Facebook</span>
          <ExternalLink className="ml-auto text-gray-500 group-hover:text-[#8dc647]" size={16} />
        </a>
      )}
      {reddit_url && (
        <a
          href={reddit_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-gray-700 hover:bg-[#8dc647]/20 rounded-lg transition-colors group"
        >
          <MessageCircle className="text-[#8dc647] group-hover:text-white" size={20} />
          <span className="text-gray-300 group-hover:text-white">Reddit</span>
          <ExternalLink className="ml-auto text-gray-500 group-hover:text-[#8dc647]" size={16} />
        </a>
      )}
      {twitter_handle && (
        <a
          href={`https://twitter.com/${twitter_handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-gray-700 hover:bg-[#8dc647]/20 rounded-lg transition-colors group"
        >
          <Twitter className="text-[#8dc647] group-hover:text-white" size={20} />
          <span className="text-gray-300 group-hover:text-white">Twitter</span>
          <ExternalLink className="ml-auto text-gray-500 group-hover:text-[#8dc647]" size={16} />
        </a>
      )}
    </div>
  </div>
)

export default ExchangeSocialLinks
