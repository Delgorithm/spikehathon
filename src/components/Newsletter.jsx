function Newsletter() {
	return (
		<section className="flex flex-col items-center justify-center mt-44 mx-52 pt-12 border shadow-xl rounded-3xl">
			<h2 className="text-5xl text-center font-DGO leading-[1.5]">
				Be the first to know about new features, <br />
				special offers, and more.
			</h2>
			<form action="POST" className="flex gap-3 py-10">
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
					Join waitlist
				</button>
			</form>
		</section>
	);
}

export default Newsletter;
