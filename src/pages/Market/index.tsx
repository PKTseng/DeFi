import { CoinMarketOverview } from '@/pages/Market/components/overview'
import { CoinMarketTable } from '@/pages/Market/components/table'
// import { CoinMarketStats } from '@/pages/Market/components/stats'
// import { CoinMarketChart } from '@/pages/Market/components/chart'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <div className="container w-full mx-auto">
        <CoinMarketOverview />

        {/* <div className="grid grid-cols-3 gap-4 py-8">
          <CoinMarketStats data={data.data} />
          <CoinMarketChart data={data.data} />
        </div> */}

        <div className="my-8">
          <CoinMarketTable />
        </div>
      </div>
    </main>
  )
}
