import { useState, useEffect } from "react";
import Prototype from "./components/Prototype";
import PasswordCard from "./components/PasswordCard";
import ChooseYourAdventure from "./components/ChooseYourAdventure";

export type Side = "a" | "b" | null;

export default function App() {
	const [shallPass, setShallPass] = useState(false);
	const [userInput, setUserInput] = useState("");
	const hashedPassword =
		"f94308e1bc3c79b3a45f29d3da3aea6ff6737959c908a2e07bde7d546d3462ec";
	const [side, setSide] = useState<Side>(null);

	// when the app loads, check localStorage for the "authenticated" key
	useEffect(() => {
		const isAuthenticated = localStorage.getItem(
			"perimeterHealth_authenticated"
		);
		if (isAuthenticated) {
			setShallPass(true);
		}
	}, []);

	let content;
	if (side === null) {
		content = <ChooseYourAdventure setSide={setSide} />;
	} else if (side === "a") {
		content = (
			<Prototype
				side={side}
				setSide={setSide}
				iframeSrc="https://embed.figma.com/proto/RewC7Agb2jK195DjMBSjoa/Perimeter-Health-UI?node-id=74-2671&scaling=scale-down&content-scaling=fixed&page-id=74%3A2329&starting-point-node-id=74%3A2671&embed-host=share"
			/>
		);
	} else {
		content = (
			<Prototype
				side={side}
				setSide={setSide}
				iframeSrc="https://embed.figma.com/proto/RewC7Agb2jK195DjMBSjoa/Perimeter-Health-UI?node-id=297-7648&scaling=scale-down&content-scaling=fixed&page-id=297%3A7647&starting-point-node-id=297%3A7648&embed-host=share"
			/>
		);
	}

	return (
		<div className="flex justify-center h-full">
			{shallPass ? (
				<div className="flex flex-col justify-center items-center gap-y-4">
					<h1 className="font-title text-6xl">PERIMETER HEALTH</h1>
					{content}
				</div>
			) : (
				<PasswordCard
					userInput={userInput}
					setUserInput={setUserInput}
					hashedPassword={hashedPassword}
					setShallPass={setShallPass}
				/>
			)}
		</div>
	);
}
