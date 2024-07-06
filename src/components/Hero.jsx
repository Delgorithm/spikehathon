import socialProof from "../assets/socialProof.svg";
import imgPresentation from "../assets/Frame1171274997.png";

function Hero() {
	return (
		<section className="flex flex-col items-center justify-center gap-8">
			<p className="font-medium py-2 px-5 rounded-3xl bg-gradient-to-l from-[#3951E5] to-[#E693A5] text-white">
				Introducing a new online selling platform 🎉
			</p>
			<h1 className="text-6xl text-center font-black font-DGO">
				Best way to sell <br />
				your digital product
			</h1>
			<p className="text-center">
				Go From Zero to Hero with simple platform that helps <br /> creators
				like you sell their digital products online.
			</p>
			<form action="POST" className="flex gap-3">
				<label htmlFor="email" className="text-opacity-0 flex">
					<input
						type="email"
						name="email"
						placeholder="Your best email address"
						className="bg-slate-100 py-4 px-16 rounded-xl"
						required
					/>
				</label>
				<button className="bg-blue-600 text-white py-4 px-8 rounded-xl">
					Try it out
				</button>
			</form>
			<article className="flex gap-2">
				<img src={socialProof} alt="" />
				<p className="text-xs">
					<span className="font-bold">More than 100+</span> users are selling
					their products <br />
					online with simple & easy ways
				</p>
			</article>
			<article className="mt-20 py-8 pl-8 bg-gradient-to-r from-[#3951E5] to-[#E693A5] rounded-3xl">
				<img src={imgPresentation} alt="" className="w-[70rem]" />
			</article>
		</section>
	);
}

export default Hero;
