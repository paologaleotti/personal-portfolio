import {
	Badge,
	Button,
	Center,
	Flex,
	Heading,
	Image,
	Link,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";

export default function Project(props) {
	const badgeList = props.badges.map((badge, id) => (
		<Badge
			key={id}
			px={2}
			py={1}
			borderRadius={10}
			bg={"gray.700"}
			opacity="70%"
			fontWeight={"400"}
		>
			{badge}
		</Badge>
	));

	return (
		<Center>
			<Stack
				borderWidth="1px"
				borderRadius="10"
				w={{ md: "540px" }}
				height={{ md: "20rem" }}
				direction={{ base: "column", md: "row" }}
				bg={"gray.800"}
				boxShadow={"1xl"}
				padding={4}
			>
				<Flex flex={1} bg="blue.200" borderRadius={10}>
					<Image
						borderRadius={5}
						objectFit="cover"
						boxSize="100%"
						src={props.imageSrc}
						alt="Project"
					/>
				</Flex>
				<Stack
					flex={1}
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					p={1}
					pt={2}
				>
					<Heading fontSize={"2xl"} fontFamily={"body"} margin={2}>
						{props.title}
					</Heading>
					<Text
						textAlign={"center"}
						color={useColorModeValue("gray.700", "gray.400")}
						px={3}
					>
						{props.desc}
					</Text>
					<Stack
						align={"center"}
						justify={"center"}
						direction={"row"}
						mt={10}
						pt={2}
					>
						{badgeList}
					</Stack>

					<Stack
						width={"100%"}
						mt={"2rem"}
						direction={"row"}
						padding={2}
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<Button
							flex={1}
							fontSize={"sm"}
							rounded={10}
							_hover={{
								bg: "gray.600",
							}}
							_active={{
								bg: "gray.400",
							}}
						>
							GitHub
						</Button>
						<Button
							flex={1}
							fontSize={"sm"}
							rounded={10}
							bg={"blue.400"}
							color={"white"}
							boxShadow={
								"0px 1px 25px -8px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 20%)"
							}
							_hover={{
								bg: "blue.500",
							}}
							_active={{
								bg: "blue.600",
							}}
						>
							Demo
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Center>
	);
}
