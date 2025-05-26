import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getCoinsById } from '@/api/coins'
import ReturnButton from '@/components/ReturnButton'
import CoinHeader from './components/CoinHeader'
import CoinPriceInfo from './components/CoinPriceInfo'
import CoinMarketStats from './components/CoinMarketStats'
import CoinDescription from './components/CoinDescription'
import CoinLinks from './components/CoinLinks'
import CoinCategories from './components/CoinCategories'
// import { coinsDetail as data } from '@/mock/coins/coinsDetail'

const TrendingCoinDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading, error } = useQuery({
    queryKey: ['coinDetail', id],
    queryFn: () => getCoinsById(id as string),
  })

  const formatPrice = (price: number | undefined | null, currency = 'usd') => {
    if (price === undefined || price === null) return 'N/A'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
      minimumFractionDigits: 2,
      maximumFractionDigits: 8,
    }).format(price)
  }

  const formatPercentage = (percentage: number | undefined | null) => {
    if (percentage === undefined || percentage === null) return 'N/A'
    const value = parseFloat(percentage.toFixed(2))
    const color = value >= 0 ? 'text-green-400' : 'text-red-400'
    return <span className={color}>{value}%</span>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!data) {
    return <div>暫無資料</div>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <div className="container mx-auto max-w-5xl">
        <ReturnButton />

        <CoinHeader
          image={data.image?.large}
          name={data.name}
          symbol={data.symbol}
          marketCapRank={data.market_cap_rank}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <CoinPriceInfo
              currentPrice={data.market_data?.current_price?.usd}
              priceChange24h={data.market_data?.price_change_percentage_24h}
              ath={data.market_data?.ath?.usd}
              atl={data.market_data?.atl?.usd}
              priceChangePercentages={[
                { label: '7d', value: data.market_data?.price_change_percentage_7d },
                { label: '14d', value: data.market_data?.price_change_percentage_14d },
                { label: '30d', value: data.market_data?.price_change_percentage_30d },
                { label: '1y', value: data.market_data?.price_change_percentage_1y },
              ]}
              formatPrice={formatPrice}
              formatPercentage={formatPercentage}
            />
            <CoinMarketStats
              marketCap={data.market_data?.market_cap?.usd}
              totalVolume={data.market_data?.total_volume?.usd}
              circulatingSupply={data.market_data?.circulating_supply}
              totalSupply={data.market_data?.total_supply}
              symbol={data.symbol}
              formatPrice={formatPrice}
            />
            {data.description?.en && <CoinDescription description={data.description.en} />}
          </div>
          <div className="space-y-6">
            <CoinLinks
              homepage={data.links?.homepage?.[0]}
              blockchainSites={data.links?.blockchain_site}
              forum={data.links?.official_forum_url?.[0]}
              subreddit={data.links?.subreddit_url}
              github={data.links?.repos_url?.github?.[0]}
            />
            {data.categories && data.categories.length > 0 && <CoinCategories categories={data.categories} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingCoinDetail
