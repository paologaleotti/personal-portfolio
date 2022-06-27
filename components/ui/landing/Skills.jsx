import { Box, Text, Stack, SimpleGrid, Tooltip } from "@chakra-ui/react";
import {
	SiCplusplus,
	SiGit,
	SiJavascript,
	SiLinux,
	SiNextdotjs,
	SiReact,
	SiRedux,
} from "react-icons/si";
import IconTip from "../IconTip";

function Skills() {
	const iconSize = 27;
	const icons = [
		{ label: "JavaScript", el: <SiJavascript size={iconSize} /> },
		{ label: "React", el: <SiReact size={iconSize} /> },
		{ label: "Redux", el: <SiRedux size={iconSize} /> },
		{ label: "Next.js", el: <SiNextdotjs size={iconSize} /> },
		{ label: "C/C++", el: <SiCplusplus size={iconSize} /> },
		{ label: "Linux", el: <SiLinux size={iconSize} /> },
		{ label: "Git", el: <SiGit size={iconSize} /> },
	];

	return (
		<Stack>
			<Box mt={{ sm: "5rem", md: "8rem", lg: "8rem" }} mb={3}>
				<Text
					fontSize={{ base: "md", lg: "lg" }}
					color={"gray.500"}
					opacity="70%"
				>
					<b>Skills</b>
				</Text>
			</Box>
			<SimpleGrid columns={[5, 9, 9]} spacing={7} opacity="35%" pl={1}>
				{icons.map((icon, id) => (
					<IconTip key={id} lab={icon.label}>
						{icon.el}
					</IconTip>
				))}
			</SimpleGrid>
		</Stack>
	);
}

export default Skills;
