import React from 'react'
import { useParams } from 'react-router-dom'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import ReturnButton from '@/components/ReturnButton'
import { getExchangeById, getExchangeTickersById } from '@/api/exchanges'
import { useQuery } from '@tanstack/react-query'
import ExchangeHeader from './ExchangeHeader'
import ExchangeStats from './ExchangeStats'
import ExchangeDescription from './ExchangeDescription'
import ExchangeTickersTable from './ExchangeTickersTable'
import ExchangeSocialLinks from './ExchangeSocialLinks'
import ExchangeInfo from './ExchangeInfo'
import ExchangeOtherLinks from './ExchangeOtherLinks'
import ExchangeAllTickersTable from './ExchangeAllTickersTable'
import { exchangesDetailMock as exchangeDetail } from '@/mock/exchanges/detail'
import { exchangeTickers } from '@/mock/exchanges/tickers'

// import VolumeChart from './VolumeChart'
// import { exchangesVolumeChart } from '@/mock/exchanges/volumeChart'

const ExchangeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // const {
  //   data: exchangeDetail,
  //   isLoading: isLoadingDetail,
  //   error: errorDetail,
  // } = useQuery({
  //   queryKey: ['exchangeDetail', id],
  //   queryFn: () => getExchangeById(id!),
  // })

  // const {
  //   data: exchangeTickers,
  //   isLoading: isLoadingTickers,
  //   error: errorTickers,
  // } = useQuery({
  //   queryKey: ['exchangeTickers', id],
  //   queryFn: () => getExchangeTickersById(id!),
  // })

  // const dayOptions = [7, 14, 30, 90, 180, 365]
  // const [selectedDays, setSelectedDays] = useState(30)

  // const {
  //   data: exchangesVolumeChart,
  //   isLoading: isLoadingVolumeChart,
  //   error: errorVolumeChart,
  // } = useQuery({
  //   queryKey: ['exchangesVolumeChart', id, selectedDays],
  //   queryFn: () => getVolumeChartById(id!, { days: selectedDays }),
  // })

  const getTrustScoreColor = (score: number) => {
    if (score >= 9) return 'text-green-400 bg-green-400/20'
    if (score >= 7) return 'text-yellow-400 bg-yellow-400/20'
    return 'text-red-400 bg-red-400/20'
  }

  const getTrustScoreBadgeColor = (trustScore: string) => {
    switch (trustScore) {
      case 'green':
        return 'bg-green-500/20 text-green-300'
      case 'yellow':
        return 'bg-yellow-500/20 text-yellow-300'
      case 'red':
        return 'bg-red-500/20 text-red-300'
      default:
        return 'bg-gray-500/20 text-gray-300'
    }
  }

  const [tab, setTab] = React.useState('overview')

  const tabClass =
    'relative px-6 py-2 text-base font-semibold transition-colors duration-200 rounded-t-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8dc647] focus-visible:z-10 border-b-2 border-transparent data-[state=active]:border-[#8dc647] data-[state=active]:bg-gray-900 data-[state=active]:text-[#8dc647] data-[state=active]:shadow-lg data-[state=active]:font-bold text-gray-400 hover:text-[#8dc647] hover:bg-gray-800/60'

  const safeNumber = (n: number | null | undefined, fallback = 0) => n ?? fallback
  const safeString = (s: string | null | undefined) => s ?? undefined
  const safeBool = (b: boolean | null | undefined) => b ?? undefined

  // if (isLoadingDetail || isLoadingTickers) return <div>Loading...</div>
  // if (errorDetail) return <div>Error: {errorDetail.message}</div>
  // if (errorTickers) return <div>Error: {errorTickers.message}</div>
  // if (!exchangeDetail) return <div>暫無資料</div>

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <div className="container mx-auto max-w-7xl">
        <ReturnButton />
        {/* Header Section */}
        <ExchangeHeader
          image={exchangeDetail.image}
          name={exchangeDetail.name}
          year_established={safeNumber(exchangeDetail.year_established, undefined)}
          country={safeString(exchangeDetail.country)}
          centralized={!!exchangeDetail.centralized}
          has_trading_incentive={safeBool(exchangeDetail.has_trading_incentive)}
        />
        {/* Tabs Section */}
        <Tabs value={tab} onValueChange={setTab} className=" mt-6 mb-8">
          <TabsList className="border-b border-gray-700 bg-transparent flex gap-2 pb-0 mb-4">
            <TabsTrigger value="overview" className={tabClass}>
              簡介
            </TabsTrigger>
            <TabsTrigger value="markets" className={tabClass}>
              所有交易對
            </TabsTrigger>
            {/* <TabsTrigger value="volume" className={tabClass}>
              交易量走勢
            </TabsTrigger> */}
          </TabsList>

          <TabsContent value="overview">
            <ExchangeStats
              trust_score={safeNumber(exchangeDetail.trust_score)}
              trust_score_rank={safeNumber(exchangeDetail.trust_score_rank)}
              trade_volume_24h_btc={safeNumber(exchangeDetail.trade_volume_24h_btc)}
              coins={safeNumber(exchangeDetail.coins)}
              pairs={safeNumber(exchangeDetail.pairs)}
              getTrustScoreColor={getTrustScoreColor}
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <ExchangeDescription description={exchangeDetail.description} />
                {exchangeDetail.tickers && exchangeDetail.tickers.length > 0 && (
                  <ExchangeTickersTable
                    tickers={exchangeDetail.tickers
                      .slice(0, 10)
                      .map((t) => ({ ...t, trade_url: safeString(t.trade_url) }))}
                    getTrustScoreBadgeColor={getTrustScoreBadgeColor}
                  />
                )}
              </div>
              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                <ExchangeSocialLinks
                  url={exchangeDetail.url}
                  facebook_url={safeString(exchangeDetail.facebook_url)}
                  reddit_url={safeString(exchangeDetail.reddit_url)}
                  twitter_handle={safeString(exchangeDetail.twitter_handle)}
                />
                <ExchangeInfo
                  trade_volume_24h_btc_normalized={safeNumber(exchangeDetail.trade_volume_24h_btc_normalized)}
                  coins={safeNumber(exchangeDetail.coins)}
                  pairs={safeNumber(exchangeDetail.pairs)}
                  centralized={!!exchangeDetail.centralized}
                />
                <ExchangeOtherLinks
                  other_url_1={safeString(exchangeDetail.other_url_1)}
                  other_url_2={safeString(exchangeDetail.other_url_2)}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="markets">
            {exchangeTickers && exchangeTickers.tickers && (
              <ExchangeAllTickersTable
                tickers={exchangeTickers.tickers.map((t) => ({ ...t, trade_url: safeString(t.trade_url) }))}
                getTrustScoreBadgeColor={getTrustScoreBadgeColor}
              />
            )}
          </TabsContent>

          {/* <TabsContent value="volume">
            <div className="mb-4 flex flex-wrap gap-2 items-center">
              <span className="text-gray-400 text-sm">區間：</span>
              {dayOptions.map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDays(d)}
                  className={`px-3 py-1 rounded-lg border text-sm font-semibold transition-colors
                    ${
                      selectedDays === d
                        ? 'bg-[#8dc647] text-gray-900 border-[#8dc647]'
                        : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
                    }`}
                >
                  {d}天
                </button>
              ))}
            </div>
            {isLoadingVolumeChart ? (
              <div>Loading...</div>
            ) : errorVolumeChart ? (
              <div>Error</div>
            ) : (
              exchangesVolumeChart &&
              Array.isArray(exchangesVolumeChart) && (
                <VolumeChart
                  data={exchangesVolumeChart.map(([x, y]: [number, string]) => ({
                    x:
                      selectedDays === 1
                        ? new Date(Number(x)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                        : new Date(Number(x)).toLocaleDateString(),
                    y: Number(y),
                  }))}
                  xLabelType={selectedDays === 1 ? 'time' : 'date'}
                />
              )
            )}
          </TabsContent> */}
        </Tabs>
      </div>
    </div>
  )
}

export default ExchangeDetail
