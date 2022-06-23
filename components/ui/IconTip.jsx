import { Tooltip } from "@chakra-ui/react";
import React from "react";

function IconTip(props) {
	return (
		<Tooltip label={props.lab} bgColor="gray.600" color={"white"}>
			<span>{props.children}</span>
		</Tooltip>
	);
}

export default IconTip;
