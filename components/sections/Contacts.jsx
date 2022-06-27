import { Flex, Image, Stack, Show } from "@chakra-ui/react";

import ContactHeader from "../ui/contacts/ContactHeader";
import ContactDesc from "../ui/contacts/ContactDesc";
import ContactButtons from "../ui/contacts/ContactButtons";

function Landing(props) {
	return (
		<Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
			<Show above="md">
				<Flex flex={0.7}>
					<Image
						alt={"Login Image"}
						objectFit={"cover"}
						h="100vh"
						src={
							"https://images.unsplash.com/photo-1572890017012-5cd15e03c670?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
						}
						opacity="50%"
					/>
				</Flex>
			</Show>

			<Flex p={8} flex={1} align={"center"} justify={"center"}>
				<Stack spacing={6} w={"full"} maxW={"lg"}>
					<ContactHeader />
					<ContactDesc />
					<ContactButtons />
				</Stack>
			</Flex>
		</Stack>
	);
}

export default Landing;
