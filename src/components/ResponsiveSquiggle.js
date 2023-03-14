import useWindowSize from "../hooks/use-window-size";
import Underlined from "./Underlined";

const ResponsiveSquiggle = (props) => {
	const view = useWindowSize();
	const el = props.domElement;

	const style = {
		position: "absolute",
		top: `${el.offsetTop + el.offsetHeight}px`,
		left: `${el.offsetLeft}px`,
	};

	return (
		<Underlined
			style={style}
			width={el.offsetWidth}
			windowWidth={view[0]}
		/>
	);
};

export default ResponsiveSquiggle;
