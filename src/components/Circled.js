const Circled = (props) => {
  const w = Math.ceil(props.width) || 274;
  const h = Math.ceil(props.height) || 112;
  const u = 2 * w + 2 * h; // approx circumference ;-)
  return (
    <svg
      width={w}
      height={h}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style || null}
    >
      <path
        d="M145.849 13.692c-23.895-3.677-47.505-3.967-67.55 2.586C56.83 23.297 40.179 29.62 27.324 38.93 14.468 48.24 11.795 54.297 9.73 60.248c-3.772 10.866-.074 17.629 10.336 23.627 34.038 19.613 80.745 18.629 118.534 18.629 39.811 0 73.844-12.5 106.536-34.427 8.935-5.993 26.748-21.319 15.941-32.995-14.256-15.402-32.563-15.1-52.628-15.1-18.841 0-49.392.58-66.531 8.809"
        stroke={props.stroke || "#0BBDFF"}
        strokeWidth={props.strokeWidth || 8}
        strokeLinecap="round"
        strokeDasharray={u}
        strokeDashoffset={0}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={`${u};0`}
          dur={props.duration || "2s"}
          begin={props.begin || "0s"}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default Circled;
