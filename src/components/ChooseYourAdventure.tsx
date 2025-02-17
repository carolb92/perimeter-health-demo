import SideSelect from "./SideSelect";
import React from "react";
import { Side } from "../App";
import sideA from "../assets/side-a.png";
import sideB from "../assets/side-b.png";

export default function ChooseYourAdventure({
	setSide,
}: {
	setSide: React.Dispatch<React.SetStateAction<Side>>;
}) {
	return (
		<div className="flex gap-x-8 justify-center">
			<div
				onClick={() => setSide("a")}
				className="flex justify-center cursor-pointer"
			>
				<SideSelect partner="lab" imgSrc={sideA} />
			</div>
			<div
				onClick={() => setSide("b")}
				className="flex justify-center cursor-pointer"
			>
				<SideSelect partner="pharma" imgSrc={sideB} />
			</div>
		</div>
	);
}
