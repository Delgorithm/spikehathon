import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

function LoaderSpinner() {
	const text = "SpikesHathon. SpikesHathon.";
	const characters = text.split("");

	const radius = 150;
	const fontSize = "1.4rem";
	const letterSpacing = 12.5;

	const [scope, animate] = useAnimate();

	useEffect(() => {
		const animateLoader = async () => {
			const letterAnimation = [];
			characters.forEach((_, i) => {
				letterAnimation.push([
					`.letter-${i}`,
					{ opacity: 0 },
					{ duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" },
				]);
			});
			characters.forEach((_, i) => {
				letterAnimation.push([
					`.letter-${i}`,
					{ opacity: 1 },
					{ duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" },
				]);
			});
			animate(letterAnimation, {
				ease: "linear",
				repeat: Infinity,
			});
			animate(
				scope.current,
				{ rotate: 360 },
				{ duration: 4, ease: "linear", repeat: Infinity }
			);
		};
		animateLoader();
	}, [animate, characters, scope]);

	return (
		<div className="flex justify-center items-center min-h-screen">
			<motion.div
				ref={scope}
				className="relative flex justify-center items-center"
				style={{ width: radius * 2, height: radius * 2 }}>
				<p aria-label={text} />
				<p aria-hidden="true">
					{characters.map((ch, i) => (
						<motion.span
							key={i}
							className={`letter-${i} absolute top-0`}
							style={{
								transformOrigin: `0 ${radius}px`,
								transform: `rotate(${i * letterSpacing}deg)`,
								fontSize,
							}}>
							{ch}
						</motion.span>
					))}
				</p>
			</motion.div>
		</div>
	);
}

export default LoaderSpinner;
