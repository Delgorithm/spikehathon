import logoApp from "../assets/Subtractlogo.png";

function Footer() {
	return (
		<footer className="flex justify-between items-center mt-24 mx-52 pb-32">
			<a href="#" className="flex items-center gap-2 text-xl">
				<img src={logoApp} alt="Logo of the App" className="size-5" />
				Sell
			</a>
			<ul className="flex gap-16 font-medium">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Agencies</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">My Shortlist</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
