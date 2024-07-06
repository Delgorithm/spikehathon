import logoApp from "../assets/Subtract.svg";
import logoTwitter from "../assets/twitter-61.svg";
function Navbar() {
	return (
		<nav className="flex justify-between items-center p-3 my-10 mx-[025em] rounded-2xl bg-black text-white">
			<a href="#" className="flex items-center gap-2 text-xl">
				<img src={logoApp} alt="Logo of the App" className="size-8" />
				Sell
			</a>
			<a href="#" className="flex items-center gap-4">
				<img
					src={logoTwitter}
					alt="Twitter redirection to their main page"
					className="size-8"
				/>
				Follow us on Twitter
			</a>
		</nav>
	);
}

export default Navbar;
