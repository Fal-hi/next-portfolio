import { IconProps } from "@/interfaces/common";

const Instagram = ({
  width = 13,
  height = 13,
  className = "fill-black",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 3.92188C5.9901 3.92188 5.49164 4.07308 5.06767 4.35637C4.6437 4.63966 4.31326 5.0423 4.11812 5.51339C3.92299 5.98448 3.87194 6.50286 3.97141 7.00297C4.07089 7.50307 4.31643 7.96245 4.67699 8.32301C5.03755 8.68357 5.49693 8.92911 5.99703 9.02859C6.49714 9.12807 7.01552 9.07701 7.48661 8.88188C7.9577 8.68674 8.36034 8.3563 8.64363 7.93233C8.92692 7.50836 9.07812 7.0099 9.07812 6.5C9.07812 5.81624 8.8065 5.16048 8.32301 4.67699C7.83952 4.1935 7.18376 3.92188 6.5 3.92188ZM6.5 8.60938C6.08281 8.60938 5.67498 8.48566 5.32809 8.25388C4.98121 8.0221 4.71084 7.69266 4.55119 7.30722C4.39154 6.92178 4.34977 6.49766 4.43116 6.08848C4.51255 5.6793 4.71345 5.30345 5.00845 5.00845C5.30345 4.71345 5.6793 4.51255 6.08848 4.43116C6.49766 4.34977 6.92178 4.39154 7.30722 4.55119C7.69266 4.71084 8.0221 4.98121 8.25388 5.32809C8.48566 5.67498 8.60938 6.08281 8.60938 6.5C8.60938 7.05944 8.38714 7.59597 7.99155 7.99155C7.59597 8.38714 7.05944 8.60938 6.5 8.60938ZM9.07812 0.875H3.92188C3.11379 0.875 2.33881 1.19601 1.76741 1.76741C1.19601 2.33881 0.875 3.11379 0.875 3.92188V9.07812C0.875 9.47825 0.95381 9.87445 1.10693 10.2441C1.26005 10.6138 1.48448 10.9497 1.76741 11.2326C2.33881 11.804 3.11379 12.125 3.92188 12.125H9.07812C9.47825 12.125 9.87445 12.0462 10.2441 11.8931C10.6138 11.74 10.9497 11.5155 11.2326 11.2326C11.5155 10.9497 11.74 10.6138 11.8931 10.2441C12.0462 9.87445 12.125 9.47825 12.125 9.07812V3.92188C12.125 3.52175 12.0462 3.12555 11.8931 2.75589C11.74 2.38622 11.5155 2.05034 11.2326 1.76741C10.9497 1.48448 10.6138 1.26005 10.2441 1.10693C9.87445 0.95381 9.47825 0.875 9.07812 0.875ZM11.6562 9.07812C11.6562 9.76189 11.3846 10.4176 10.9011 10.9011C10.4176 11.3846 9.76189 11.6562 9.07812 11.6562H3.92188C3.23811 11.6562 2.58236 11.3846 2.09887 10.9011C1.61537 10.4176 1.34375 9.76189 1.34375 9.07812V3.92188C1.34375 3.23811 1.61537 2.58236 2.09887 2.09887C2.58236 1.61537 3.23811 1.34375 3.92188 1.34375H9.07812C9.76189 1.34375 10.4176 1.61537 10.9011 2.09887C11.3846 2.58236 11.6562 3.23811 11.6562 3.92188V9.07812ZM10.0156 3.45312C10.0156 3.54584 9.98813 3.63646 9.93663 3.71355C9.88512 3.79063 9.81191 3.85071 9.72626 3.88619C9.6406 3.92167 9.54635 3.93095 9.45543 3.91287C9.3645 3.89478 9.28097 3.85014 9.21542 3.78458C9.14986 3.71903 9.10522 3.6355 9.08713 3.54457C9.06905 3.45364 9.07833 3.35939 9.11381 3.27374C9.14929 3.18809 9.20937 3.11488 9.28645 3.06337C9.36354 3.01187 9.45417 2.98438 9.54688 2.98438C9.6712 2.98438 9.79042 3.03376 9.87833 3.12167C9.96624 3.20958 10.0156 3.3288 10.0156 3.45312Z"
        className={className}
      />
    </svg>
  );
};

export default Instagram;
