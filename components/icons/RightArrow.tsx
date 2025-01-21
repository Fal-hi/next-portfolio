import { IconProps } from "@/interfaces/common";

const RightArrow = ({
  width = 16,
  height = 16,
  className = "fill-black",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        className={className}
        d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z"
      />
    </svg>
  );
};

export default RightArrow;
