type GithubProps = {
  width?: number
  height?: number
  className?: string
}

const Github: React.FC<GithubProps> = ({
  width = 10,
  height = 12,
  className = "fill-black",
}: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.96232 10.4325C3.96225 10.3959 3.95465 10.3597 3.94006 10.3266C3.92547 10.2934 3.90424 10.2641 3.87788 10.2406C3.85151 10.2172 3.82064 10.2002 3.78745 10.1908C3.75425 10.1815 3.71954 10.18 3.68575 10.1865C2.94044 10.334 1.9945 10.336 1.71982 9.51299C1.55082 9.07322 1.28003 8.68633 0.932785 8.38849C0.860967 8.34926 0.79622 8.29678 0.741535 8.23349C0.732663 8.1751 0.704669 8.12196 0.662529 8.08351C0.620389 8.04506 0.566832 8.0238 0.511379 8.02349H0.510441C0.448362 8.02349 0.388819 8.04976 0.344879 8.09654C0.300938 8.14332 0.276191 8.20678 0.276066 8.27299C0.27466 8.55799 0.608879 8.77149 0.708254 8.82799C0.956691 9.06549 1.15216 9.35999 1.28107 9.68849C1.44419 10.1785 1.942 10.936 3.4945 10.7245C3.49591 10.907 3.49825 11.001 3.50013 11.073L3.50247 11.22C3.50247 11.2863 3.52717 11.3499 3.57112 11.3968C3.61507 11.4437 3.67469 11.47 3.73685 11.47C3.79901 11.47 3.85862 11.4437 3.90258 11.3968C3.94653 11.3499 3.97122 11.2863 3.97122 11.22L3.96888 11.059C3.96353 10.8502 3.96134 10.6414 3.96232 10.4325ZM9.24419 2.61199C9.22939 2.592 9.21439 2.57216 9.19919 2.55249C9.2306 2.44749 9.25544 2.33899 9.27325 2.22999C9.34588 1.69342 9.28159 1.14589 9.08716 0.644994C9.07444 0.610986 9.05488 0.580372 9.02985 0.555317C9.00482 0.530261 8.97494 0.511375 8.94232 0.499994C8.87622 0.476494 8.2706 0.302494 7.00638 1.19099C5.94759 0.903946 4.8383 0.903946 3.7795 1.19099C2.51575 0.312994 1.91388 0.477494 1.84685 0.498494C1.81357 0.50963 1.78303 0.528501 1.75741 0.553748C1.7318 0.578995 1.71175 0.609988 1.69872 0.644494C1.50071 1.15299 1.43685 1.70957 1.51404 2.25399C1.53185 2.35399 1.55482 2.45249 1.582 2.54999C1.56593 2.57095 1.5503 2.59229 1.53513 2.61399C1.13843 3.15098 0.927357 3.8174 0.937473 4.50099C0.936535 4.65599 0.943098 4.81099 0.957629 4.96549C1.117 7.29749 2.52747 7.94649 3.74529 8.16799C3.66612 8.31983 3.60682 8.4825 3.56904 8.65149C3.55581 8.71527 3.56651 8.78204 3.59885 8.83751C3.6312 8.89298 3.68261 8.93275 3.74208 8.9483C3.80156 8.96385 3.86438 8.95395 3.91711 8.92072C3.96983 8.88749 4.00827 8.83357 4.02419 8.77049C4.06779 8.54049 4.17653 8.33049 4.33591 8.16949C4.37022 8.13764 4.39511 8.09583 4.40752 8.04915C4.41994 8.00247 4.41935 7.95295 4.40584 7.90662C4.39232 7.86029 4.36646 7.81916 4.3314 7.78824C4.29634 7.75732 4.25361 7.73795 4.20841 7.73249C2.91654 7.57599 1.57497 7.11999 1.42497 4.91999C1.41173 4.78079 1.40563 4.64091 1.40669 4.50099C1.39781 3.92713 1.57498 3.36759 1.90825 2.91699C1.94388 2.86599 1.98325 2.81999 2.02216 2.77399C2.05129 2.73963 2.07092 2.69733 2.07887 2.65178C2.08681 2.60624 2.08276 2.55923 2.06716 2.51599C2.02722 2.40328 1.99678 2.28698 1.97622 2.16849C1.92007 1.76667 1.95742 1.35629 2.08497 0.973494C2.64156 1.05593 3.16729 1.29592 3.60747 1.66849C3.63558 1.68883 3.66751 1.70236 3.70103 1.70815C3.73455 1.71393 3.76885 1.71183 3.80154 1.70199C4.8441 1.40032 5.94319 1.40032 6.98575 1.70199C7.01852 1.71181 7.05289 1.7139 7.08648 1.70811C7.12007 1.70233 7.15208 1.68881 7.18028 1.66849C7.61738 1.29163 8.14301 1.04986 8.69997 0.969494C8.82599 1.34675 8.86411 1.75103 8.81107 2.14749C8.79035 2.27342 8.75801 2.39686 8.7145 2.51599C8.69897 2.55928 8.69499 2.60631 8.70302 2.65186C8.71104 2.69741 8.73076 2.73969 8.75997 2.77399C8.80122 2.82249 8.842 2.87649 8.87857 2.92499C9.21258 3.37207 9.38996 3.92941 9.38013 4.50099C9.38107 4.64399 9.3745 4.78699 9.36044 4.92899C9.21185 7.11949 7.86513 7.57499 6.5681 7.73249C6.52286 7.73787 6.48007 7.75718 6.44495 7.78806C6.40983 7.81895 6.3839 7.86008 6.37033 7.90642C6.35676 7.95276 6.35613 8.00232 6.36853 8.04904C6.38092 8.09575 6.4058 8.13761 6.44013 8.16949C6.60185 8.33199 6.71013 8.54549 6.74903 8.77899C6.78888 8.94349 6.80763 9.11299 6.80435 9.28299V10.513C6.79966 10.8505 6.79966 11.104 6.79966 11.22C6.79966 11.2863 6.82435 11.3499 6.86831 11.3968C6.91226 11.4437 6.97187 11.47 7.03403 11.47C7.09619 11.47 7.15581 11.4437 7.19976 11.3968C7.24372 11.3499 7.26841 11.2863 7.26841 11.22C7.26841 11.105 7.26841 10.8545 7.2731 10.5165V9.28299C7.27664 9.07138 7.25299 8.86025 7.20279 8.65549C7.16757 8.48506 7.10964 8.32089 7.03075 8.16799C8.25372 7.94699 9.66982 7.29799 9.82732 4.97549C9.84279 4.81799 9.85029 4.65949 9.84888 4.50099C9.85954 3.81546 9.64569 3.14742 9.24419 2.61199Z"
        className={className}
      />
    </svg>
  )
}

export default Github