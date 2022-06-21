import Landing from "../components/sections/Landing";
import Projects from "../components/sections/Projects";

const PROJECTS = [
	{
		title: "OrderMe",
		desc: "App creata con React per ordinare cibo",
		imageSrc:
			"https://raw.githubusercontent.com/paologaleotti/order-me/master/src/assets/app-demo.gif",
		badges: ["React", "Firebase"],
	},
	{
		title: "forkBook",
		desc: "Cerca, salva e condividi le tue ricette preferite",
		imageSrc:
			"https://camo.githubusercontent.com/7b342db1a4edcd7b5c3cd863ca6379d1d9cceb100768f6e20e6410863e068246/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3833313437333532383536353236383532302f3938313937393739363534323232363434322f756e6b6e6f776e2e706e673f77696474683d383130266865696768743d343530",
		badges: ["JavaScript"],
	},
	{
		title: "ASCIIgame",
		desc: "Gioco minimale top-down scritto in C++ per un progetto universitario",
		imageSrc:
			"https://camo.githubusercontent.com/5d328692be0bb5860bd30e4019b534e351dbc5964186c96f8e35b2d452cb0500/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3833313437333532383536353236383532302f3938313939323433303930353732343932382f617363696967616d652e706e67",
		badges: ["C++"],
	},
	{
		title: "Assembler-Hack",
		desc: "Software che traduce un file .hack in un file binario",
		imageSrc:
			"https://camo.githubusercontent.com/0a29e33207c31863ccb0996bd4409b8af7c81fa53da1b4783a04f850c645098d/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3833313437333532383536353236383532302f3938313939353831393933363931353438362f756e6b6e6f776e2e706e67",
		badges: ["c", "nand2tetris"],
	},
];

export default function HomePage() {
	return (
		<>
			<Landing />
			<Projects projects={PROJECTS} />
		</>
	);
}
