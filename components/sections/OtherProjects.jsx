import { Flex, Stack, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import IconGrid from "../ui/otherprojects/IconGrid";
import List from "../ui/otherprojects/List";
import OtherProjTitle from "../ui/otherprojects/OtherProjTitle";

function Landing() {
	const router = useRouter();

	const goBackHandler = (event) => {
		event.preventDefault();
		router.replace("/");
	};

	return (
		<Stack
			p={10}
			minH={"100vh"}
			direction={{ base: "column", md: "row" }}
			bgColor={"gray.700"}
		>
			<Flex flex={1} align={"center"} justify={"center"} zIndex={1}>
				<Stack spacing={6} w="full" maxW="lg">
					<OtherProjTitle />
					<List />
					<IconGrid />
				</Stack>
			</Flex>
		</Stack>
	);
}

export default Landing;
