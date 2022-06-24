import {
	Heading,
	Center,
	SimpleGrid,
	useBreakpointValue,
	Text,
	Button,
	Box,
} from "@chakra-ui/react";

import Project from "../ui/myprojects/Project";
import ProjectPort from "../ui/myprojects/ProjectPort";
import { VStack } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

function Projects(props) {
	const projectList = props.projects.map((pr, id) => (
		<Project
			key={id}
			title={pr.title}
			desc={pr.desc}
			imageSrc={pr.imageSrc}
			badges={pr.badges}
			demoLink={pr.demoLink}
			ghLink={pr.ghLink}
		/>
	));

	return (
		<Center minH={"100vh"} bgColor={"blue.600"}>
			<VStack zIndex={0}>
				<Heading fontSize={"4xl"} mt={5} mb={5}>
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
							bg: "gray.800",
							zIndex: -1,
							opacity: "90%",
						}}
					>
						Progetti
					</Text>
				</Heading>

				<SimpleGrid columns={[1, 2, 2]} spacingX={7} spacingY={7} p={7}>
					<ProjectPort
						title="Portfolio"
						desc="Come ho costruito questo sito web"
						imageSrc="https://media.discordapp.net/attachments/828988349225631787/989597239536144393/covers.png"
						badges={["Next.js", "React", "Chakra-UI"]}
					/>
					{projectList}
				</SimpleGrid>
				<Box pb={10} pt={5}>
					<Button
						onClick={props.onModalOpen}
						rightIcon={<FiArrowRight />}
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
						Altri progetti
					</Button>
				</Box>
			</VStack>
		</Center>
	);
}

export default Projects;
