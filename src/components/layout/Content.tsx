import React from 'react'

interface ContentProps {
  children: React.ReactNode
}

function Content({ children }: ContentProps) {
  return <main className="flex-1 w-full">{children}</main>
}

export default Content
