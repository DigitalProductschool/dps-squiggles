const SadFace = (props) => {
  return (
    <svg
      width={90}
      height={80}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style || null}
    >
      <path
        d="M14.7734 9.99219V19.6741"
        stroke={props.stroke || "#0BBDFF"}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={20}
        strokeDashoffset={20}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={`20;0;0;0;0`}
          dur={props.duration || "2s"}
          begin={props.begin || "0s"}
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M52.7734 5.84766C52.7734 9.34375 54.2353 12.2188 54.2353 15.5296"
        stroke={props.stroke || "#0BBDFF"}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={20}
        strokeDashoffset={20}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={`20;20;0;0;0`}
          dur={props.duration || "2s"}
          begin={props.begin || "0s"}
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M5.99238 73.6201C5.99238 65.5389 5.84593 61.2324 13.6268 56.7151C18.3802 53.9554 23.4742 50.5329 28.7331 48.7236C36.865 45.9259 43.4824 44.5742 52.0423 44.5742C65.1677 44.5742 79.1651 54.4029 84.9352 65.3213"
        stroke={props.stroke || "#0BBDFF"}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={110}
        strokeDashoffset={110}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={`110;110;110;0;0`}
          dur={props.duration || "2s"}
          begin={props.begin || "0s"}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default SadFace;
