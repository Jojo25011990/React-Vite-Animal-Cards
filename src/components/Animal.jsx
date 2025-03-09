import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Animal = (props) => {
	const containerCard = useRef();
	const tl = useRef();

	useGSAP(
		() => {
			tl.current = gsap
				.timeline()
				.from(".animate", {
					autoAlpha: 0,
					y: -150,
					duration: 1,
					stagger: 0.5,
					delay: 5.5,
					ease: "power4.out",
				})
				.from(".animal__title--card", {
					autoAlpha: 0,
				});
		},
		{ scope: containerCard }
	);

	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsActive(true);
		}, 5000);
	});

	return (
		<div className="animal" ref={containerCard}>
			<div className={`animal__overlay ${isActive ? "active" : ""}`}>
				<h2
					className={`animal__title animal__title--overlay ${
						isActive ? "active" : ""
					}`}
				>
					{props.animalName}
				</h2>
			</div>
			<h2 className="animal__title  animal__title--card">
				{props.animalName}
			</h2>
			<p className="animal__description animate">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Repellendus, repellat. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Rem, veritatis exercitationem eum voluptas non
				facere? Quam molestias quasi eos ipsum eveniet illo.
			</p>

			<img
				src={props.cuteAnimal}
				alt={props.animalName}
				className="animal__img animate"
			/>

			<a href="#" className="animal__btn animate">
				Click Me
			</a>
		</div>
	);
};

export default Animal;
