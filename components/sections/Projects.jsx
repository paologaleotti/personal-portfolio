import {
	Heading,
	Center,
	SimpleGrid,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import Project from "../ui/Project";

function Projects() {
	return (
		<Center minH={"100vh"} bgColor={"blue.500"}>
			<SimpleGrid columns={[1, 2, 2]} spacingX={7} spacingY={7} p={7}>
				<Project
					title="OrderMe"
					desc="App creata con React per ordinare cibo"
					imageSrc="https://raw.githubusercontent.com/paologaleotti/order-me/master/src/assets/app-demo.gif"
					badges={["React", "Firebase"]}
				/>
				<Project
					title="OrderMe"
					desc="App creata con React per ordinare cibo"
					imageSrc="https://raw.githubusercontent.com/paologaleotti/order-me/master/src/assets/app-demo.gif"
					badges={["React", "Firebase"]}
				/>
				<Project
					title="OrderMe"
					desc="App creata con React per ordinare cibo"
					imageSrc="https://raw.githubusercontent.com/paologaleotti/order-me/master/src/assets/app-demo.gif"
					badges={["React", "Firebase"]}
				/>
				<Project
					title="OrderMe"
					desc="App creata con React per ordinare cibo"
					imageSrc="https://raw.githubusercontent.com/paologaleotti/order-me/master/src/assets/app-demo.gif"
					badges={["React", "Firebase"]}
				/>
			</SimpleGrid>
		</Center>
	);
}

export default Projects;
