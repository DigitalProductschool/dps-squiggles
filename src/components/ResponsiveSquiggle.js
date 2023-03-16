import useWindowSize from "../hooks/use-window-size";
import Underlined from "./Underlined";
import Circled from "./Circled";
import Shine from "./Shine";
import Days90 from "./Days90";
import Wave from "./Wave";
import SadFace from "./SadFace";

const ResponsiveSquiggle = (props) => {
	const view = useWindowSize();
	const el = props.domElement;
	let color = el.dataset.color || "#0BBDFF";
	let duration = el.dataset.duration || "2s";
	let delay = el.dataset.delay || "0s";
	let strokeWidth = parseInt(el.dataset.stroke) || 8;

	let style = { position: "absolute" };

	if (el.dataset.rotate) {
		style.transform = `rotate(${el.dataset.rotate})`;
	}

	switch (props.type) {
		case "underlined":
			style.top = `${el.offsetTop + el.offsetHeight - 4}px`;
			style.left = `${el.offsetLeft}px`;
			return (
				<Underlined
					style={style}
					width={el.offsetWidth}
					stroke={color}
					strokeWidth={strokeWidth}
					duration={duration}
					begin={delay}
					windowWidth={view[0]}
				/>
			);
		case "circled": // w=274, h=112
			style.top = `${el.offsetTop + el.offsetHeight / 2 - 56}px`;
			style.left = `${el.offsetLeft + el.offsetWidth / 2 - 137}px`;
			return (
				<Circled
					style={style}
					stroke={color}
					strokeWidth={strokeWidth}
					duration={duration}
					begin={delay}
				/>
			);
		case "shine":
			let direction = el.dataset.direction || "out";
			return (
				<Shine
					style={style}
					stroke={color}
					strokeWidth={strokeWidth}
					duration={duration}
					direction={direction}
					begin={delay}
				/>
			);
		case "wave":
			style.top = `${el.offsetTop + el.offsetHeight - 2}px`;
			style.left = `${el.offsetLeft + el.offsetWidth / 2 - 147}px`;
			return (
				<Wave
					style={style}
					stroke={color}
					strokeWidth={strokeWidth}
					duration={duration}
					begin={delay}
				/>
			);
		case "90days":
			style = {
				position: "absolute",
			};
			return (
				<Days90
					style={style}
					stroke={color}
					strokeWidth={strokeWidth}
					duration={duration}
					begin={delay}
				/>
			);
		case "sadface":
			return (
				<SadFace
					style={style}
					stroke={color}
					strokeWidth={strokeWidth}
					duration={duration}
					begin={delay}
				/>
			);
		default:
			return null;
	}
};

export default ResponsiveSquiggle;
