import { ScaleFade, Box, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

function ContactDesc() {
	const [descRef, descInView] = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	return (
		<ScaleFade initialScale={0.9} in={descInView}>
			<Box ref={descRef}>
				<Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
					Ti è piaciuto il mio portfolio?{" "}
					<b>Non esitare a contattarmi!</b>
				</Text>
				<br />

				<Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
					Sono al momento in cerca di una posizione come{" "}
					<b>Sviluppatore Web</b> nella zona di Imola (BO).
				</Text>
			</Box>
		</ScaleFade>
	);
}

export default ContactDesc;
