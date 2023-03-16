const paths = {
  in: [
    "M4.8 56.8C14.7 66.3 25.5 72 35.7 80.3",
    "M74 4.6C75.1 15 75.6 25.3 79.2 35.2C80.3 38.3 81.8 41.9 81.8 45",
    "M158.9 9C156.2 21.7 150 36.1 150 49.4",
    "M225.3 65.7C215.6 70.6 206 75.7 196.4 80.7C192.7 82.6 189.7 83.9 187 87.3",
  ],
  out: [
    "M35.7 80.3 C 25.5 72 14.7 66.3 4.8 56.8",
    "M81.8 45 C 81.8 41.9 80.3 38.3 79.2 35.2 C 75.6 25.3 75.1 15 74 4.6",
    "M150 49.4 C 150 36.1 156.2 21.7 158.9 9",
    "M187 87.3 C 189.7 83.9 192.7 82.6 196.4 80.7 C 206 75.7 215.6 70.6 225.3 65.7",
  ],
};

const Shine = (props) => {
  const direction = props.direction || "out";
  return (
    <svg
      width={230}
      height={100}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style || null}
    >
      <path
        d={paths[direction][0]}
        stroke={props.stroke || "#0BBDFF"}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={100}
        strokeDashoffset={100}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={`100;0;0;0;0;0;100;100`}
          dur={props.duration || "2s"}
          begin={props.begin || "0s"}
          repeatCount="indefinite"
        />
      </path>
      <path
        d={paths[direction][1]}
        stroke={props.stroke || "#0BBDFF"}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={100}
        strokeDashoffset={100}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={`100;100;0;0;0;100;100`}
          dur={props.duration || "2s"}
          begin={props.begin || "0s"}
          repeatCount="indefinite"
        />
      </path>
      <path
        d={paths[direction][2]}
        stroke={props.stroke || "#0BBDFF"}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={100}
        strokeDashoffset={100}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={`100;100;100;0;0;100;100`}
          dur={props.duration || "2s"}
          begin={props.begin || "0s"}
          repeatCount="indefinite"
        />
      </path>
      <path
        d={paths[direction][3]}
        stroke={props.stroke || "#0BBDFF"}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={100}
        strokeDashoffset={100}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={`100;100;100;100;0;100;100`}
          dur={props.duration || "2s"}
          begin={props.begin || "0s"}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default Shine;
