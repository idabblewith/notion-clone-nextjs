"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
	return (
		<div className="max-w-3xl space-y-4">
			<h1 className="text-3xl sm:text-5xl md:text-6xl">
				Your Ideas, Documents & Plans. Unified. Welcome to{" "}
				<span className="underline">Notion</span>
			</h1>
			<h3 className="text-base sm:text-cl md:text-2xl font-medium">
				Notion is the connected workspace where better, faster work
				happens.
			</h3>
			<Button>
				Get Started
				<ArrowRight className="h-4 w-4 ml-2" />
			</Button>
		</div>
	);
};
export default Heading;
