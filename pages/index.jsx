import Landing from "../components/sections/Landing";
import Projects from "../components/sections/Projects";
import Contacts from "../components/sections/Contacts";
import OtherProjects from "../components/sections/OtherProjects";
import { useRef } from "react";

const PROJECTS = [
	{
		title: "Portfolio",
		desc: "Tecnologie e sviluppo di questo sito web",
		imageSrc:
			"https://media.discordapp.net/attachments/828988349225631787/989597239536144393/covers.png",
		ghLink: "",
		badges: ["Next.js", "React", "Chakra-UI"],
	},
	{
		title: "OrderMe",
		desc: "Applicazione che permette di ordinare cibo",
		imageSrc:
			"https://media.discordapp.net/attachments/828988349225631787/989516919482744912/2.png",
		badges: ["React", "Firebase"],
		demoLink: "https://order-me.netlify.app/",
		ghLink: "https://github.com/paologaleotti/order-me",
	},
	{
		title: "forkBook",
		desc: "Cerca, salva e condividi le tue ricette preferite",
		imageSrc:
			"https://media.discordapp.net/attachments/828988349225631787/989516919289819206/1.png",
		badges: ["JavaScript"],
		demoLink: "https://forkbook.netlify.app/",
		ghLink: "https://github.com/paologaleotti/forkbook",
	},
	{
		title: "ASCIIgame",
		desc: "Gioco minimale per un progetto universitario",
		imageSrc:
			"https://media.discordapp.net/attachments/828988349225631787/989516919717654628/3.png",
		badges: ["C++"],
		ghLink: "https://github.com/paologaleotti/ASCII_game",
	},
	{
		title: "Assembler-Hack",
		desc: "Software che traduce un file .hack in un file binario",
		imageSrc:
			"https://media.discordapp.net/attachments/828988349225631787/989516919054942238/4.png",
		badges: ["c", "nand2tetris"],
		ghLink: "https://github.com/paologaleotti/Assembler-hack",
	},
];

export default function HomePage({ projectList }) {
	const projRef = useRef();
	const contactRef = useRef();

	const scrollToProjectsHandler = () => {
		window.scrollTo(0, projRef.current.offsetTop);
	};

	const scrollToContactsHandler = () => {
		window.scrollTo(0, contactRef.current.offsetTop);
	};

	return (
		<>
			<Landing
				onProjClick={scrollToProjectsHandler}
				onContactClick={scrollToContactsHandler}
			/>
			<div ref={projRef}>
				<Projects projects={projectList} />
			</div>

			<OtherProjects />

			<div ref={contactRef}>
				<Contacts projects={projectList} />
			</div>
		</>
	);
}

export async function getStaticProps(context) {
	return {
		props: { projectList: PROJECTS }, // will be passed to the page component as props
	};
}
