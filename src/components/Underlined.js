const Underlined = (props) => {
  const w = Math.ceil(props.width) || 220;
  return (
    <svg
      width={w + 5}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style || null}
    >
      <path
        d={`M5 8.8c${Math.round((135 / 220) * props.width)}-2 ${Math.round(
          (180 / 220) * props.width
        )} 1.55 ${Math.round((210 / 220) * props.width)}-4`}
        stroke={props.stroke || "#0BBDFF"}
        strokeWidth={8}
        strokeLinecap="round"
        strokeDasharray={Math.ceil(props.width)}
        strokeDashoffset={0 /*Math.ceil(props.width)*/}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={`${w};0;0;${w}`}
          dur={props.duration || "2s"}
          begin={props.begin || "0s"}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default Underlined;
