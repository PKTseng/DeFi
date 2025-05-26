import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend)

interface VolumeChartProps {
  data: { x: string; y: number }[]
  xLabelType?: 'time' | 'date'
}

const VolumeChart: React.FC<VolumeChartProps> = ({ data, xLabelType = 'date' }) => {
  const chartData = {
    labels: data.map((d) => d.x),
    datasets: [
      {
        label: '24h 交易量 (BTC)',
        data: data.map((d) => d.y),
        borderColor: '#8dc647',
        backgroundColor: 'rgba(141,198,71,0.1)',
        tension: 0.3,
        pointRadius: 0,
        fill: true,
      },
    ],
  }
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: 'index' as const, intersect: false },
    },
    scales: {
      x: {
        display: true,
        grid: { color: '#333' },
        ticks: {
          color: '#8dc647',
          callback: function (_: unknown, index: number) {
            // Show fewer ticks for long date ranges
            if (xLabelType === 'time') {
              return data[index]?.x
            } else {
              // For date, only show every ~1/7th label to avoid clutter
              const step = Math.ceil(data.length / 7)
              return index % step === 0 ? data[index]?.x : ''
            }
          },
          maxRotation: 0,
          autoSkip: false,
        },
      },
      y: { display: true, grid: { color: '#333' }, ticks: { color: '#8dc647' } },
    },
  }
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-[#8dc647] mb-4">交易量走勢</h2>
      <Line data={chartData} options={options} height={120} />
    </div>
  )
}

export default VolumeChart
