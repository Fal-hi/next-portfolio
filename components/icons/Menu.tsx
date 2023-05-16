type MenuProps = {
  width?: number;
  height?: number;
  className?: string;
};

const Menu: React.FC<MenuProps> = ({
  width = 15,
  height = 15,
  className = "fill-black",
}: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        className={className}
        d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
      />
    </svg>
  );
};

export default Menu;
