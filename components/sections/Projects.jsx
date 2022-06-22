import {
	Heading,
	Center,
	SimpleGrid,
	useBreakpointValue,
	Text,
} from "@chakra-ui/react";

import Project from "../ui/Project";
import { useRef } from "react";
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
		<Center minH={"100vh"} bgColor={"blue.600"} id="proj-section">
			<VStack>
				<Heading textShadow="4px 2px 20px #00000058" m={5}>
					Progetti
				</Heading>
				<SimpleGrid columns={[1, 2, 2]} spacingX={7} spacingY={7} p={7}>
					{projectList}
				</SimpleGrid>
			</VStack>
		</Center>
	);
}

export default Projects;
