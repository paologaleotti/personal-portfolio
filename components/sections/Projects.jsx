import {
	Heading,
	Center,
	SimpleGrid,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import Project from "../ui/Project";

function Projects(props) {
	const projectList = props.projects.map((pr, id) => (
		<Project
			key={id}
			title={pr.title}
			desc={pr.desc}
			imageSrc={pr.imageSrc}
			badges={pr.badges}
		/>
	));

	return (
		<Center minH={"100vh"} bgColor={"blue.700"}>
			<SimpleGrid columns={[1, 2, 2]} spacingX={7} spacingY={7} p={7}>
				{projectList}
			</SimpleGrid>
		</Center>
	);
}

export default Projects;
