interface TitleProps {
  children: string
}

function Title({ children }: TitleProps) {
  return <h2 className="text-3xl font-extrabold mb-10 text-white tracking-wide flex items-center gap-3">{children}</h2>
}

export default Title
