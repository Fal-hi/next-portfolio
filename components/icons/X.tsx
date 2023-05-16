type XProps = {
  width?: number
  height?: number
  className?: string
}

const X: React.FC<XProps> = ({
  width = 16,
  height = 16,
  className = "#fill-black",
}: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 15 15"><path className={className} fillRule="evenodd" d="M6.793 7.5L4.146 4.854l.708-.708L7.5 6.793l2.646-2.647l.708.708L8.207 7.5l2.647 2.646l-.708.707L7.5 8.207l-2.646 2.646l-.708-.707L6.793 7.5Z" clipRule="evenodd"/></svg>
  )
}

export default X
