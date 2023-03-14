import useWindowSize from "../hooks/use-window-size";
import Underlined from "./Underlined";
import Circled from "./Circled";
import Shine from "./Shine";
import Days90 from "./Days90";

const ResponsiveSquiggle = (props) => {
	const view = useWindowSize();
	const el = props.domElement;
	let color = el.dataset.color || "#0BBDFF";
	let duration = el.dataset.duration || "2s";
	let delay = el.dataset.delay || "0s";

	let style = { position: "absolute" };

	if (el.dataset.rotate) {
		style.transform = `rotate(${el.dataset.rotate})`;
	}

	switch (props.type) {
		case "underlined":
			style.top = `${el.offsetTop + el.offsetHeight}px`;
			style.left = `${el.offsetLeft}px`;
			return (
				<Underlined
					style={style}
					width={el.offsetWidth}
					stroke={color}
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
					duration={duration}
					begin={delay}
					windowWidth={view[0]}
				/>
			);
		case "shine":
			return (
				<Shine
					style={style}
					stroke={color}
					duration={duration}
					begin={delay}
					windowWidth={view[0]}
				/>
			);
		case "90days":
			style = {
				position: "absolute",
			};
			return (
				<Days90 style={style} stroke={color} windowWidth={view[0]} />
			);
		default:
			return null;
	}
};

export default ResponsiveSquiggle;
