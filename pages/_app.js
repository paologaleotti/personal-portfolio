import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { DarkMode } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
