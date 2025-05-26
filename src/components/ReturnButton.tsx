import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

function ReturnButton() {
  const navigate = useNavigate()

  return (
    <Button
      onClick={() => navigate(-1)}
      className="group text-[#8dc647] hover:text-white hover:bg-[#8dc647]/90 border border-[#8dc647] bg-transparent px-4 py-2 rounded-full font-bold flex items-center gap-2 mb-8 shadow transition-all duration-200"
    >
      <span className="group-hover:-translate-x-1 transition-transform">←</span> 回上一頁
    </Button>
  )
}

export default ReturnButton
