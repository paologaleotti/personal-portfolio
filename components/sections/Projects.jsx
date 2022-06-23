import {
	Heading,
	Center,
	SimpleGrid,
	useBreakpointValue,
	Text,
} from "@chakra-ui/react";

import Project from "../ui/Project";
import ProjectPort from "../ui/ProjectPort";
import { VStack } from "@chakra-ui/react";

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
			</VStack>
		</Center>
	);
}

export default Projects;
