const StaggeredAnimation = (props) => {
	const paths = props.paths || [];

	const pathElements = paths.map((path) => {
		return (
			<path
				key={`p${path.key}`}
				id={`p${path.key}`}
				d={path.d}
				stroke={props.stroke || "#804FBB"}
				strokeWidth={props.strokeWidth || 8}
				strokeLinecap="round"
				strokeDasharray={path.length}
				strokeDashoffset={path.length}
			/>
		);
	});

	const animationElements = paths.map((path, i) => {
		return (
			<animate
				key={`p${path.key}`}
				id={`#p${path.key}anim`}
				xlinkHref={`#p${path.key}`}
				attributeName="stroke-dashoffset"
				values={`${path.length};0`}
				dur={props.duration || "2s"}
				fill="freeze"
				begin={i === 0 ? "0s" : `#p${paths[i - 1].key}anim.end + 0s`}
			/>
		);
	});

	return (
		<>
			{pathElements}
			{animationElements}
		</>
	);
};

export default StaggeredAnimation;
