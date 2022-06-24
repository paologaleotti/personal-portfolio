import { ScaleFade, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

function ContactHeader() {
	const [contactRef, contactInView] = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	return (
		<ScaleFade initialScale={0.9} in={contactInView}>
			<Heading
				ref={contactRef}
				fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
			>
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
					Contattami
				</Text>
			</Heading>
		</ScaleFade>
	);
}

export default ContactHeader;
