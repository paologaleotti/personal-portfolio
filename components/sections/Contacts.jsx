import { Flex, Image, Stack, Show } from "@chakra-ui/react";

import ContactHeader from "../ui/contacts/ContactHeader";
import ContactDesc from "../ui/contacts/ContactDesc";
import ContactButtons from "../ui/contacts/ContactButtons";

function Landing() {
	return (
		<Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
			<Show above="md">
				<Flex flex={0.7}>
					<Image
						alt="Login Image"
						objectFit="cover"
						h="100vh"
						src="/images/wall2.jpg"
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
