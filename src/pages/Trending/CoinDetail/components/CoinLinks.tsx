import React from 'react'

interface CoinLinksProps {
  homepage?: string
  blockchainSites?: string[]
  forum?: string
  subreddit?: string
  github?: string
}

const CoinLinks: React.FC<CoinLinksProps> = ({ homepage, blockchainSites, forum, subreddit, github }) => (
  <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
    <h2 className="text-xl font-bold text-[#8dc647] mb-4">官方連結</h2>
    <div className="space-y-3">
      {homepage && (
        <a
          href={homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-[#8dc647] hover:text-green-300 transition-colors duration-150 bg-gray-700/50 hover:bg-gray-600/50 px-3 py-2 rounded-lg"
        >
          官方網站
        </a>
      )}
      {blockchainSites &&
        blockchainSites.slice(0, 2).map(
          (site, index) =>
            site && (
              <a
                key={site}
                href={site}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-[#8dc647] hover:text-green-300 transition-colors duration-150 bg-gray-700/50 hover:bg-gray-600/50 px-3 py-2 rounded-lg"
              >
                區塊鏈瀏覽器 {index + 1}
              </a>
            )
        )}
      {forum && (
        <a
          href={forum}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-[#8dc647] hover:text-green-300 transition-colors duration-150 bg-gray-700/50 hover:bg-gray-600/50 px-3 py-2 rounded-lg"
        >
          討論區
        </a>
      )}
      {subreddit && (
        <a
          href={subreddit}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-[#8dc647] hover:text-green-300 transition-colors duration-150 bg-gray-700/50 hover:bg-gray-600/50 px-3 py-2 rounded-lg"
        >
          Reddit
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-[#8dc647] hover:text-green-300 transition-colors duration-150 bg-gray-700/50 hover:bg-gray-600/50 px-3 py-2 rounded-lg"
        >
          GitHub
        </a>
      )}
    </div>
  </div>
)

export default CoinLinks
