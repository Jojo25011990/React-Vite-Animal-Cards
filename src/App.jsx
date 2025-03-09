import React from "react";
import Animal from "./components/Animal";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const App = () => {
	const containerHeading = useRef();

	useGSAP(
		() => {
			gsap.from(".heading__primary-span", {
				delay: 1,
				autoAlpha: 0,
				y: 50,
				rotate: 150,
				duration: 0.2,
				stagger: 0.2,
				ease: "power4.out",
			});
		},
		{ scope: containerHeading }
	);

	const animals = [
		{
			id: 1,
			name: "Black Puma",
			image: "https://images.unsplash.com/photo-1636025612898-c097ba497129?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 2,
			name: "Lion",
			image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 3,
			name: "Tiger",
			image: "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];

	return (
		<div className="animals">
			<h1 className="heading__primary" ref={containerHeading}>
				<span className="heading__primary-span">C</span>
				<span className="heading__primary-span">u</span>
				<span className="heading__primary-span">t</span>
				<span className="heading__primary-span">e</span>

				<span className="heading__primary-span">A</span>
				<span className="heading__primary-span">n</span>
				<span className="heading__primary-span">i</span>
				<span className="heading__primary-span">m</span>
				<span className="heading__primary-span">a</span>
				<span className="heading__primary-span">l</span>
				<span className="heading__primary-span">s</span>
			</h1>

			<div className="animals__wrapper">
				<Animal
					cuteAnimal={animals[0].image}
					animalName={animals[0].name}
				/>
				<Animal
					cuteAnimal={animals[1].image}
					animalName={animals[1].name}
				/>
				<Animal
					cuteAnimal={animals[2].image}
					animalName={animals[2].name}
				/>
			</div>
		</div>
	);
};

export default App;
