import { IconProps } from "@/interfaces/common";

const Dot = ({
  width = 4,
  height = 4,
  className = "stroke-black",
}: IconProps) => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.704106"
        y="3.78087"
        width={width}
        height={height}
        transform="rotate(-50.2807 0.704106 3.78087)"
        className={className}
      />
    </svg>
  );
};

export default Dot;
