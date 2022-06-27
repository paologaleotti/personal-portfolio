import { Flex, Image, Stack, Show } from "@chakra-ui/react";
import LandingButtons from "../ui/landing/LandingButtons";
import PortfolioTitle from "../ui/landing/PortfolioTitle";
import Skills from "../ui/landing/Skills";

function Landing(props) {
	return (
		<Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
			<Flex
				mt={{ base: "-5rem", md: "0", lg: "0" }}
				p={8}
				flex={1}
				align={"center"}
				justify={"center"}
				zIndex={1}
			>
				<Stack spacing={6} w={"full"} maxW={"lg"}>
					<PortfolioTitle />
					<LandingButtons
						onProjClick={props.onProjClick}
						onContactClick={props.onContactClick}
					/>

					<Skills />
				</Stack>
			</Flex>
			<Show above="md">
				<Flex flex={1}>
					<Image
						alt={"Login Image"}
						objectFit={"cover"}
						src={"/images/wall1.jpg"}
						opacity="50%"
					/>
				</Flex>
			</Show>
		</Stack>
	);
}

export default Landing;
