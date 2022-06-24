import { Box, Text, Stack, SimpleGrid, Tooltip } from "@chakra-ui/react";
import {
	SiC,
	SiCplusplus,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiLinux,
	SiNextdotjs,
	SiReact,
	SiRedux,
} from "react-icons/si";
import IconTip from "./IconTip";

function Skills() {
	const iconSize = 27;
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
				<IconTip lab="JavaScript">
					<SiJavascript size={iconSize} />
				</IconTip>

				<IconTip lab="React">
					<SiReact size={iconSize} />
				</IconTip>

				<IconTip lab="Redux">
					<SiRedux size={iconSize} />
				</IconTip>

				<IconTip lab="Next.js">
					<SiNextdotjs size={iconSize} />
				</IconTip>

				<IconTip lab="C/C++">
					<SiCplusplus size={iconSize} />
				</IconTip>

				<IconTip lab="Linux">
					<SiLinux size={iconSize} />
				</IconTip>

				<IconTip lab="Git">
					<SiGit size={iconSize} />
				</IconTip>
			</SimpleGrid>
		</Stack>
	);
}

export default Skills;
