import { SimpleGrid, Text, ScaleFade } from "@chakra-ui/react";
import IconTip from "../IconTip";
import { useInView } from "react-intersection-observer";
import {
	SiMysql,
	SiRaspberrypi,
	SiArduino,
	SiNodered,
	SiPython,
	SiEclipsemosquitto,
	SiPhp,
} from "react-icons/si";

function IconGrid() {
	const iconSize = 27;
	const icons = [
		{ label: "PHP", el: <SiPhp size={iconSize} /> },
		{ label: "MySQL", el: <SiMysql size={iconSize} /> },
		{ label: "Python", el: <SiPython size={iconSize} /> },
		{ label: "Raspberry Pi", el: <SiRaspberrypi size={iconSize} /> },
		{ label: "Arduino", el: <SiArduino size={iconSize} /> },
		{ label: "NodeRED", el: <SiNodered size={iconSize} /> },
		{ label: "MQTT/Mosquitto", el: <SiEclipsemosquitto size={iconSize} /> },
	];

	const [gridRef, gridInVIew] = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	return (
		<ScaleFade initialScale={0.9} in={gridInVIew}>
			<Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
				<b>Tecnologie utilizzate</b>
			</Text>
			<br />

			<SimpleGrid
				ref={gridRef}
				columns={[5, 9, 9]}
				spacing={7}
				opacity="60%"
				pl={1}
			>
				{icons.map((icon, id) => (
					<IconTip key={id} lab={icon.label}>
						{icon.el}
					</IconTip>
				))}
			</SimpleGrid>
		</ScaleFade>
	);
}

export default IconGrid;
