import { Stack, Button } from "@chakra-ui/react";

function LandingButtons(props) {
	return (
		<Stack direction={{ base: "column", md: "row" }} spacing={4}>
			<Button
				onClick={props.onProjClick}
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
				Progetti
			</Button>
			<Button rounded={10} size="lg" onClick={props.onContactClick}>
				Contatti
			</Button>
		</Stack>
	);
}

export default LandingButtons;
