import { useState } from "react";
import Prototype from "./components/Prototype";
import PasswordCard from "./components/PasswordCard";

function App() {
	const [shallPass, setShallPass] = useState(false);
	const [userInput, setUserInput] = useState("");
	const password = "terminusdayus";

	return (
		<div className="flex justify-center h-full">
			{shallPass ? (
				<Prototype />
			) : (
				<PasswordCard
					userInput={userInput}
					setUserInput={setUserInput}
					password={password}
					setShallPass={setShallPass}
				/>
			)}
		</div>
	);
}

export default App;
