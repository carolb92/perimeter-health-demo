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
	password: string;
	setShallPass: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PasswordCard({
	userInput,
	setUserInput,
	password,
	setShallPass,
}: PasswordCardProps) {
	function checkPassword() {
		if (userInput === password) {
			setShallPass(true);
		} else {
			alert("Incorrect password. Please try again.");
		}
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
					onSubmit={checkPassword}
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
