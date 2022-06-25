import { ScaleFade } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

function OtherProjTitle() {
	const [titleRef, titleInView] = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	return (
		<ScaleFade initialScale={0.9} in={titleInView}>
			<Heading ref={titleRef}>Altri progetti</Heading>
			<br />

			<Text fontSize="lg" color="gray.400">
				Oltre a quelli mostrati, nel corso degli anni ho realizzato
				diversi progetti scolastici riguardanti{" "}
				<b>IoT, Database, back-end, reti ed elettronica.</b>
			</Text>
		</ScaleFade>
	);
}

export default OtherProjTitle;
