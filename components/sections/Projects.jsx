import { Center, SimpleGrid, Button, Box, VStack } from "@chakra-ui/react";

import Project from "../ui/myprojects/Project";
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
		<Center minH={"100vh"} bgColor={"gray.700"}>
			<VStack zIndex={0} pt={10}>
				<SimpleGrid columns={[1, 2, 2]} spacingX={7} spacingY={7} p={7}>
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
