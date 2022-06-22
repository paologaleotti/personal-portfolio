import React from "react";
import { Heading, Text, useBreakpointValue } from "@chakra-ui/react";

function PortfolioTitle() {
	return (
		<>
			<Heading fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}>
				<Text
					as={"span"}
					position={"relative"}
					_after={{
						content: "''",
						width: "full",
						height: useBreakpointValue({
							base: "20%",
							md: "30%",
						}),
						position: "absolute",
						bottom: 1,
						left: 0,
						bg: "blue.600",
						zIndex: -1,
					}}
				>
					Paolo Galeotti
				</Text>
				<br />
				<Text color={"gray.600"} as={"span"}>
					#webdeveloper
				</Text>
			</Heading>
			<Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
				Aspirante sviluppatore di applicazioni <b>Web</b> e{" "}
				<b>mobile</b>, appassionato a tutto il mondo informatico.
			</Text>
		</>
	);
}

export default PortfolioTitle;
