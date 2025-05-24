import { useIsFetching } from '@tanstack/react-query'
import { LoaderCircle } from 'lucide-react'

const GlobalLoading = () => {
  const isFetching = useIsFetching()
  if (!isFetching) return null
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <LoaderCircle className="animate-spin w-12 h-12 text-[#8dc647]" />
        <span className="text-white font-bold text-lg">載入中...</span>
      </div>
    </div>
  )
}

export default GlobalLoading
