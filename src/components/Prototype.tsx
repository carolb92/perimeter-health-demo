export default function Prototype() {
	return (
		<div className="flex flex-col items-center justify-center h-full w-[75%] gap-y-4">
			<h1 className="text-white text-5xl font-title uppercase">
				Perimeter Health
			</h1>
			<h2 className="text-white text-2xl">Welcome to the interactive demo!</h2>
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
				className="border border-white rounded-xl"
			></iframe>
		</div>
	);
}
