type CopyrightProps = {
  width?: number
  height?: number
  fill?: string
}

const Copyright: React.FC<CopyrightProps> = ({
  width = 8,
  height = 8,
  fill = "#000000",
}: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 0.09375C3.22742 0.09375 2.47219 0.322848 1.82981 0.752072C1.18743 1.1813 0.686752 1.79137 0.391097 2.50514C0.0954425 3.21892 0.0180858 4.00433 0.168809 4.76207C0.319533 5.51981 0.691567 6.21584 1.23787 6.76214C1.78416 7.30843 2.48019 7.68047 3.23793 7.83119C3.99567 7.98192 4.78109 7.90456 5.49486 7.6089C6.20863 7.31325 6.81871 6.81258 7.24793 6.1702C7.67715 5.52782 7.90625 4.77258 7.90625 4C7.90419 2.96463 7.49197 1.97226 6.75986 1.24014C6.02774 0.508028 5.03537 0.0958145 4 0.09375ZM4 7.59375C3.28923 7.59375 2.59441 7.38298 2.00342 6.98809C1.41243 6.59321 0.951812 6.03194 0.67981 5.37527C0.407807 4.7186 0.336639 3.99601 0.475305 3.29889C0.61397 2.60177 0.956242 1.96143 1.45884 1.45883C1.96143 0.95624 2.60178 0.613968 3.2989 0.475303C3.99602 0.336637 4.7186 0.407805 5.37527 0.679808C6.03194 0.95181 6.59321 1.41243 6.9881 2.00342C7.38298 2.59441 7.59375 3.28922 7.59375 4C7.59272 4.9528 7.21376 5.86629 6.54002 6.54002C5.86629 7.21376 4.95281 7.59272 4 7.59375ZM2.59375 4C2.59375 4.29515 2.68662 4.58281 2.85919 4.82225C3.03177 5.06169 3.27531 5.24075 3.55531 5.33409C3.83531 5.42742 4.13758 5.43029 4.4193 5.34228C4.70102 5.25428 4.94791 5.07987 5.125 4.84375C5.13731 4.82733 5.15274 4.81351 5.17039 4.80305C5.18805 4.7926 5.20759 4.78572 5.2279 4.78282C5.24822 4.77992 5.2689 4.78105 5.28878 4.78614C5.30866 4.79123 5.32734 4.80019 5.34375 4.8125C5.36017 4.82481 5.374 4.84024 5.38445 4.85789C5.39491 4.87555 5.40178 4.89509 5.40468 4.9154C5.40758 4.93572 5.40646 4.9564 5.40136 4.97628C5.39627 4.99616 5.38731 5.01483 5.375 5.03125C5.15856 5.31984 4.8568 5.53301 4.51248 5.64057C4.16815 5.74813 3.79871 5.74462 3.45649 5.63055C3.11426 5.51647 2.81661 5.29761 2.60568 5.00497C2.39475 4.71233 2.28125 4.36074 2.28125 4C2.28125 3.63926 2.39475 3.28767 2.60568 2.99503C2.81661 2.70239 3.11426 2.48353 3.45649 2.36945C3.79871 2.25538 4.16815 2.25187 4.51248 2.35943C4.8568 2.46699 5.15856 2.68016 5.375 2.96875C5.38731 2.98517 5.39627 3.00384 5.40136 3.02372C5.40646 3.0436 5.40758 3.06428 5.40468 3.0846C5.40178 3.10491 5.39491 3.12445 5.38445 3.14211C5.374 3.15976 5.36017 3.17519 5.34375 3.1875C5.32734 3.19981 5.30866 3.20877 5.28878 3.21386C5.2689 3.21895 5.24822 3.22008 5.2279 3.21718C5.20759 3.21428 5.18805 3.2074 5.17039 3.19695C5.15274 3.18649 5.13731 3.17267 5.125 3.15625C4.99465 2.98092 4.82493 2.83867 4.62952 2.74096C4.43411 2.64326 4.21848 2.59283 4 2.59375C3.62704 2.59375 3.26936 2.74191 3.00563 3.00563C2.74191 3.26935 2.59375 3.62704 2.59375 4Z"
        fill={fill}
      />
    </svg>
  )
}

export default Copyright
