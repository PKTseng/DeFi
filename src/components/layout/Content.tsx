import React from 'react'

interface ContentProps {
  children: React.ReactNode
}

function Content({ children }: ContentProps) {
  return <main>{children}</main>
}

export default Content
