import { Center, SimpleGrid, Button, Box, VStack } from "@chakra-ui/react";
import Project from "../ui/myprojects/Project";

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
		<Center minH={"100vh"} bgColor={"gray.700"}>
			<VStack zIndex={0} pt={10}>
				<SimpleGrid columns={[1, 2, 2]} spacingX={7} spacingY={7} p={7}>
					{projectList}
				</SimpleGrid>
			</VStack>
		</Center>
	);
}

export default Projects;
