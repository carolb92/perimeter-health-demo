import React from "react";
import { Side } from "../App";
import { Button } from "@/components/ui/button";

export default function LabPartnerPrototype({
	setSide,
	iframeSrc,
	side,
}: {
	setSide: React.Dispatch<React.SetStateAction<Side>>;
	iframeSrc: string;
	side: Side;
}) {
	// style="border: 1px solid rgba(0, 0, 0, 0.1);"
	// min-zoom
	const styles = {
		border: "1px solid white",
		borderRadius: "10px",
	};
	return (
		<div className="flex flex-col items-center justify-center h-full w-[75%] gap-y-4">
			<h2 className="text-white text-2xl">
				{`Welcome to the Perimeter Health ${
					side === "a" ? "Lab" : "Pharma"
				} Partner interactive demo!`}
			</h2>
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
				src={iframeSrc}
				allowFullScreen
				style={styles}
			></iframe>
			<Button
				onClick={() => setSide((prevSide) => (prevSide === "a" ? "b" : "a"))}
				className="uppercase text-xs text-black"
				variant="outline"
			>
				{`Click here to view the ${
					side === "a" ? "pharma" : "lab"
				} partner prototype`}
			</Button>
		</div>
	);
}
