import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PasswordCardProps = {
	userInput: string;
	setUserInput: React.Dispatch<React.SetStateAction<string>>;
	hashedPassword: string;
	setShallPass: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PasswordCard({
	userInput,
	setUserInput,
	hashedPassword,
	setShallPass,
}: PasswordCardProps) {
	// get the SHA-256 hash of a string
	// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#converting_a_digest_to_a_hex_string
	async function digestInput(input: string) {
		const encoder = new TextEncoder();
		// encode as (utf-8) Uint8Array
		const inputUint8 = encoder.encode(input);
		// hash the input
		const hashBuffer = await crypto.subtle.digest("SHA-256", inputUint8);
		// convert buffer to byte array
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		// convert bytes to hex string
		const hashHex = hashArray
			.map((b) => b.toString(16).padStart(2, "0"))
			.join("");

		return hashHex;
	}

	async function checkPassword() {
		const hashedInput = await digestInput(userInput);
		if (hashedInput === hashedPassword) {
			localStorage.setItem("perimeterHealth_authenticated", "true");
			setShallPass(true);
		} else {
			alert("Incorrect password. Please try again.");
		}
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		// stop the form from submitting and refreshing the page to
		// ensure checkPassword() runs asynchronously without interruption
		e.preventDefault();
		checkPassword();
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>This page is password protected</CardTitle>
				<CardDescription>
					Please enter the password to view the content.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form
					className="flex flex-col gap-y-4 items-center"
					onSubmit={handleSubmit}
				>
					<Input
						type="password"
						placeholder="Password"
						className="w-full p-2 border border-gray-300 rounded-md"
						value={userInput}
						onChange={(e) => setUserInput(e.target.value)}
					/>
					<Button className="uppercase text-xs" type="submit">
						Open Sesame
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
