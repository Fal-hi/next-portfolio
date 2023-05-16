type LeftArrowProps = {
  width?: number
  height?: number
  className?: string
}

const LeftArrow: React.FC<LeftArrowProps> = ({
  width = 16,
  height = 16,
  className = "fill-black",
}: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path className={className} d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"/></svg>
  )
}

export default LeftArrow
