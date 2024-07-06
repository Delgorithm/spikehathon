import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import ScrollFadeIn from "./animations/ScrollFadeIn";
import { Suspense, useEffect, useState } from "react";
import LoaderSpinner from "./animations/LoaderSpinner";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{isLoading ? (
				<LoaderSpinner />
			) : (
				<Suspense fallback={<LoaderSpinner />}>
					<div className="absolute inset-0 -z-10 xl:h-[245svh] w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:5rem_5rem]">
						<div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_100%_100px,#d5c5ff,transparent)]">
							<Navbar />
							<ScrollFadeIn>
								<Hero />
							</ScrollFadeIn>
							<ScrollFadeIn>
								<Features />
							</ScrollFadeIn>
							<ScrollFadeIn>
								<Newsletter />
							</ScrollFadeIn>
							<ScrollFadeIn>
								<Footer />
							</ScrollFadeIn>
						</div>
					</div>
				</Suspense>
			)}
		</>
	);
}

export default App;
