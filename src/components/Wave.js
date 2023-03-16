const Wave = (props) => {
  return (
    <svg
      width="294"
      height="38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props.style || null}
    >
      <path
        d="M4 25.2431C23 22.2654 25.8722 5.5986 44.5 4.10774C63.1278 2.61688 72.7376 17.0022 80.6816 22.2654C94.3776 31.3392 109.294 6.80268 123.038 6.80268C138.832 6.80268 141.567 21.678 155.021 25.2434C161.02 26.8331 178.5 10.1024 184.578 6.80268C190.656 3.50292 210.645 1.09202 227.151 20.7764C232.814 27.53 239.654 33.6047 248.136 33.6047C261.192 33.6047 270.956 0.61761 290 15.0587"
        stroke={props.stroke || "#0BBDFF"}
        strokeWidth={props.strokeWidth || 8}
        strokeLinecap="round"
        strokeDasharray={340}
        strokeDashoffset={0}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={`340;0;0;-340`}
          dur={props.duration || "4s"}
          begin={props.begin || "0s"}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default Wave;
