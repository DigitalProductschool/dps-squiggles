import useWindowSize from "../hooks/use-window-size";
import Underlined from "./Underlined";
import Shine from "./Shine";

const ResponsiveSquiggle = (props) => {
	const view = useWindowSize();
	const el = props.domElement;
	let style = null;
	let color = el.dataset.color || "#0BBDFF";

	switch (props.type) {
		case "underlined":
			style = {
				position: "absolute",
				top: `${el.offsetTop + el.offsetHeight}px`,
				left: `${el.offsetLeft}px`,
			};
			return (
				<Underlined
					style={style}
					width={el.offsetWidth}
					stroke={color}
					windowWidth={view[0]}
				/>
			);
		case "shine":
			style = {
				position: "absolute",
			};

			if (el.dataset.rotate) {
				style.transform = `rotate(${el.dataset.rotate})`;
			}

			return <Shine style={style} stroke={color} windowWidth={view[0]} />;
		default:
			return null;
	}
};

export default ResponsiveSquiggle;
