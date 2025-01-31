import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollFadeIn = ({ children }) => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	React.useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={variants}>
			{children}
		</motion.div>
	);
};

export default ScrollFadeIn;
