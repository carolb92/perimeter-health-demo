export default function Prototype() {
	// style="border: 1px solid rgba(0, 0, 0, 0.1);"
	// min-zoom
	const styles = {
		border: "1px solid white",
		borderRadius: "10px",
	};
	return (
		<div className="flex flex-col items-center justify-center h-full w-[75%] gap-y-4">
			<h1 className="text-white text-2xl">
				Welcome to the Perimeter Health interactive demo!
			</h1>
			<div className="w-[70%]">
				<p className="text-white">
					To navigate the prototype, first click on the arrows in the top right
					corner of the iframe below to expand the prototype to fit your screen.
					Then, click on the hotspots to start interacting.
				</p>
			</div>
			<iframe
				width="800"
				height="450"
				src="https://embed.figma.com/proto/RewC7Agb2jK195DjMBSjoa/Perimeter-Health-UI?node-id=74-2671&scaling=scale-down&content-scaling=fixed&page-id=74%3A2329&starting-point-node-id=74%3A2671&embed-host=share"
				allowFullScreen
				style={styles}
			></iframe>
		</div>
	);
}
