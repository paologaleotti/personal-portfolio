import { ScaleFade, Button, SimpleGrid } from "@chakra-ui/react";

import { SiLinkedin } from "react-icons/si";
import { FiMail, FiPaperclip } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

function ContactButtons() {
	const [buttonsRef, buttonsInView] = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	return (
		<ScaleFade initialScale={0.9} in={buttonsInView}>
			<SimpleGrid ref={buttonsRef} columns={[1, 3, 3]} spacing={5} mt={2}>
				<Button
					colorScheme={"linkedin"}
					leftIcon={<SiLinkedin />}
					as="a"
					href="https://www.linkedin.com/in/paolo-galeotti2/"
					target="_blank"
					rel="noreferrer noopener"
				>
					LinkedIn
				</Button>
				<Button
					as="a"
					href="mailto:paologaleotti2002@gmail.com"
					target="_blank"
					rel="noreferrer noopener"
					leftIcon={<FiMail />}
				>
					Email
				</Button>
				<Button
					as="a"
					href="https://www.dropbox.com/s/c5tbdphpmrwbljd/CV__Paolo_Galeotti.pdf?dl=0"
					target="_blank"
					rel="noreferrer noopener"
					leftIcon={<FiPaperclip />}
				>
					Scarica CV
				</Button>
			</SimpleGrid>
		</ScaleFade>
	);
}

export default ContactButtons;
