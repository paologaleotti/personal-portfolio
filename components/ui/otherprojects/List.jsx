import { UnorderedList, ListItem, Text, ScaleFade } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

function List() {
	const [listRef, listInView] = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	return (
		<ScaleFade initialScale={0.9} in={listInView}>
			<Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
				<b>Progetti principali</b>
			</Text>
			<br />

			<UnorderedList ref={listRef} pl={2} color="gray.400">
				<ListItem pb={2}>
					Dashboard <b>NodeRED</b> per la gestione domotica che riceve
					e invia informazioni per controllare allarme,
					condizionatore, pompa di calore e umidificatore in modo
					automatico
				</ListItem>
				<ListItem pb={2}>
					Applicazione web in <b>Python</b> che elabora e visualizza i
					dati raccolti da varie ESP32 collegati ad un{" "}
					<b>Raspberry Pi</b> tramite <b>MQTT</b>
				</ListItem>
				<ListItem pb={2}>
					Simulazione di un sistema di irrigazione automatica
					utilizzando <b>Arduino</b> con applicazione web full-stack
					in <b>PHP</b> per il monitoraggio
				</ListItem>
			</UnorderedList>
		</ScaleFade>
	);
}

export default List;
