import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface HourlyDataChartProps {
  price: number[]
}

const HourlyDataChart: React.FC<HourlyDataChartProps> = ({ price }) => {
  const chartData = price.map((value, index) => {
    const dayIndex = Math.floor(index / 24)
    const hour = index % 24
    const days = ['日', '一', '二', '三', '四', '五', '六']
    return {
      index: index,
      時間: `第 ${dayIndex + 1} 天 ${hour}:00`,
      日期: `週 ${days[dayIndex % 7]}`,
      小時: hour,
      數值: value,
    }
  })

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean
    payload?: Array<{ value: number }>
    label?: string
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold">{label}</p>
          <p className="text-orange-300">
            數值: {payload[0].value.toLocaleString('zh-TW', { maximumFractionDigits: 2 })}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* 主圖表 */}
      <div className="rounded-lg shadow-md">
        <ResponsiveContainer width="100%" height={500}>
          <LineChart data={chartData} margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="時間"
              angle={-45}
              textAnchor="end"
              height={80}
              interval={11}
              tick={{ fill: '#ffffff' }}
              stroke="#ffffff"
            />
            <YAxis
              domain={['dataMin - 1000', 'dataMax + 1000']}
              tickFormatter={(value) => value.toLocaleString('zh-TW')}
              tick={{ fill: '#ffffff' }}
              stroke="#ffffff"
            />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="數值" stroke="#3B82F6" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default HourlyDataChart
