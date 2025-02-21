import { useEffect } from "react";

export default function SideSelect({
	partner,
	imgSrc,
}: {
	partner: string;
	imgSrc: string;
}) {
	console.log("imgSrc:", imgSrc);
	console.log("side select rendered");

	useEffect(() => {
		console.log("side select rendered");
	});
	return (
		<div className="w-3/4 flex flex-col items-center gap-y-4 text-center">
			<h2>Click here to view the {partner} partner demo.</h2>
			<img
				src={imgSrc}
				alt={`${partner.toUpperCase()} Partner Demo`}
				className="w-full h-auto"
			/>
		</div>
	);
}
