import socialProof from "../assets/socialProof.svg";
import imgPresentation from "../assets/Frame1171274997.png";

function Hero() {
	return (
		<section className="xxs:text-sm xxs:py-12 xxs:mx-3 xxs:text-center flex flex-col items-center justify-center gap-8">
			<p className="font-medium py-2 px-5 rounded-3xl bg-gradient-to-l from-[#3951E5] to-[#E693A5] text-white shadow-md">
				Introducing a new online selling platform 🎉
			</p>
			<h1 className="xxs:text-5xl xxs:leading-[3.5rem] xl:text-6xl xl:leading-normal text-center font-black font-DGO">
				Best way to sell <br />
				your digital product
			</h1>
			<p className="xxs:text-[1.2em] xxs:leading-6 xl:text-base xl:leading-normal xl:text-center">
				Go From Zero to Hero with simple platform that helps <br /> creators
				like you sell their digital products online.
			</p>
			<form
				action="POST"
				className="flex gap-3 bg-white p-2 border rounded-xl shadow-2xl">
				<label htmlFor="email" className="text-opacity-0 flex">
					<input
						type="email"
						name="email"
						placeholder="Your best email address"
						className="bg-slate-100 xxs:py-4 xxs:px-3 xl:py-4  xl:px-16 rounded-xl"
						required
					/>
				</label>
				<button className="bg-blue-600 text-white xxs=py-4 xxs:px-4 xl:py-4 xl:px-8 rounded-xl">
					Try it out
				</button>
			</form>
			<article className="flex xxs:flex-col xl:flex-row xxs:items-center xxs:gap-10 xl:gap-2">
				<img
					src={socialProof}
					alt="Users' profil pictures"
					className="xxs:w-32 xl:w-24"
				/>
				<p className="xxs:text-[1.1em] xl:text-xs">
					<span className="font-bold">More than 100+</span> users are selling
					their products <br />
					online with simple & easy ways
				</p>
			</article>
			<article className="relative mt-20 py-8 pl-8 bg-gradient-to-r from-[#3951E5] to-[#E693A5] rounded-3xl">
				<img
					src={imgPresentation}
					alt="Application's features"
					className="w-[70rem]"
				/>
			</article>
		</section>
	);
}

export default Hero;
