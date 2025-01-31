import { useState, useEffect } from "react";
import Prototype from "./components/Prototype";
import PasswordCard from "./components/PasswordCard";

function App() {
	const [shallPass, setShallPass] = useState(false);
	const [userInput, setUserInput] = useState("");
	const hashedPassword =
		"f94308e1bc3c79b3a45f29d3da3aea6ff6737959c908a2e07bde7d546d3462ec";

	// when the app loads, check localStorage for the "authenticated" key
	useEffect(() => {
		const isAuthenticated = localStorage.getItem(
			"perimeterHealth_authenticated"
		);
		if (isAuthenticated) {
			setShallPass(true);
		}
	}, []);

	return (
		<div className="flex justify-center h-full">
			{shallPass ? (
				<Prototype />
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

export default App;
