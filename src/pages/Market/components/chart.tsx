import type { GlobalListData } from '@/types/global'
import { useState } from 'react'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from 'recharts'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function CoinMarketChart({ data }: { data: GlobalListData }) {
  const [chartType, setChartType] = useState('dominance')

  // Prepare data for dominance chart
  const dominanceData = Object.entries(data.market_cap_percentage)
    .slice(0, 5)
    .map(([symbol, percentage]) => ({
      name: symbol.toUpperCase(),
      value: percentage,
    }))

  // Colors for the chart
  const colors = ['#8dc647', '#f7931a', '#627eea', '#e84142', '#2775ca']

  return (
    <div className="rounded-xl bg-[#222531] p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">市佔率圖表</h2>
        <Tabs value={chartType} onValueChange={setChartType} className="w-auto">
          <TabsList className="h-8 bg-[#2c2f3b]">
            <TabsTrigger value="dominance" className="text-xs h-6 px-3">
              市佔率
            </TabsTrigger>
            <TabsTrigger value="volume" className="text-xs h-6 px-3">
              交易量
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dominanceData} layout="vertical" margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={40} />
            <Tooltip
              contentStyle={{ backgroundColor: '#2c2f3b', border: 'none', borderRadius: '8px' }}
              formatter={(value) => [typeof value === 'number' ? `${value.toFixed(2)}%` : `${value}%`, '市佔率']}
              labelStyle={{ color: '#fff' }}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
              {dominanceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
