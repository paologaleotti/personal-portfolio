import {
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import PortfolioTitle from "../ui/PortfolioTitle";

function Landing(props) {
	return (
		<Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
			<Flex p={8} flex={1} align={"center"} justify={"center"}>
				<Stack spacing={6} w={"full"} maxW={"lg"}>
					<PortfolioTitle />

					<Stack
						direction={{ base: "column", md: "row" }}
						spacing={4}
					>
						<Button
							onClick={props.onProjClick}
							size="lg"
							rounded={10}
							bg={"blue.400"}
							color={"white"}
							boxShadow={
								"0px 1px 25px 0px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 45%)"
							}
							_hover={{
								bg: "blue.500",
							}}
							_active={{
								bg: "blue.600",
							}}
						>
							Progetti
						</Button>
						<Button rounded={10} size="lg">
							Contatti
						</Button>
					</Stack>
				</Stack>
			</Flex>
			<Flex flex={1}>
				<Image
					alt={"Login Image"}
					objectFit={"cover"}
					src={
						"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"
					}
					opacity="70%"
				/>
			</Flex>
		</Stack>
	);
}

export default Landing;
