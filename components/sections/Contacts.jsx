import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import {
	Button,
	Flex,
	Image,
	Stack,
	Center,
	Text,
	Heading,
	useBreakpointValue,
} from "@chakra-ui/react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { FiMail, FiPaperclip } from "react-icons/fi";

function Landing(props) {
	return (
		<Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
			<Flex flex={0.7}>
				<Image
					alt={"Login Image"}
					objectFit={"cover"}
					src={
						"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"
					}
					opacity="50%"
				/>
			</Flex>
			<Flex p={8} flex={1} align={"center"} justify={"center"}>
				<Stack spacing={6} w={"full"} maxW={"lg"}>
					<Heading fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}>
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
					<Text
						fontSize={{ base: "md", lg: "lg" }}
						color={"gray.500"}
					>
						Ti è piaciuto il mio portfolio?{" "}
						<b>Non esitare a contattarmi!</b>
					</Text>
					<Text
						fontSize={{ base: "md", lg: "lg" }}
						color={"gray.500"}
					>
						Sono al momento in cerca di una posizione come{" "}
						<b>Sviluppatore Web</b> nella zona di Imola (BO).
					</Text>
					<SimpleGrid columns={[1, 3, 3]} spacing={5}>
						<Button
							colorScheme={"linkedin"}
							leftIcon={<SiLinkedin />}
							as="a"
							href="https://www.linkedin.com/in/paolo-galeotti2/"
							target="_blank"
							rel="noreferrer noopener"
						>
							LinkedIn
						</Button>
						<Button
							as="a"
							href="mailto:paologaleotti2002@gmail.com"
							target="_blank"
							rel="noreferrer noopener"
							leftIcon={<FiMail />}
						>
							Email
						</Button>
						<Button
							as="a"
							href="https://www.dropbox.com/s/c5tbdphpmrwbljd/CV__Paolo_Galeotti.pdf?dl=0"
							target="_blank"
							rel="noreferrer noopener"
							leftIcon={<FiPaperclip />}
						>
							Scarica CV
						</Button>
					</SimpleGrid>
				</Stack>
			</Flex>
		</Stack>
	);
}

export default Landing;
