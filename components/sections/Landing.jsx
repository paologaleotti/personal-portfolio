import { Box } from "@chakra-ui/react";
import { Button, Flex, Image, Stack, Center } from "@chakra-ui/react";
import LandingButtons from "../ui/landing/LandingButtons";
import PortfolioTitle from "../ui/landing/PortfolioTitle";
import Skills from "../ui/landing/Skills";

function Landing(props) {
	return (
		<Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
			<Flex p={8} flex={1} align={"center"} justify={"center"}>
				<Stack spacing={6} w={"full"} maxW={"lg"}>
					<PortfolioTitle />
					<LandingButtons
						onProjClick={props.onProjClick}
						onContactClick={props.onContactClick}
					/>

					<Skills />
				</Stack>
			</Flex>
			<Flex flex={1}>
				<Image
					alt={"Login Image"}
					objectFit={"cover"}
					src={
						"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"
					}
					opacity="50%"
				/>
			</Flex>
		</Stack>
	);
}

export default Landing;
