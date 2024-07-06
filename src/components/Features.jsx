import dollagIcon from "../assets/dollarIcon.svg";
import noodlesIcon from "../assets/noodlesIcon.svg";
import handloveIcon from "../assets/handloveIcon.svg";
import worldIcon from "../assets/worldIcon.svg";
import cartIcon from "../assets/cartIcon.svg";
import bagIcon from "../assets/bagIcon.png";
import circleIcon from "../assets/circleIcon.svg";
import circlenotfullIcon from "../assets/circlenotfullIcon.svg";
import { GoArrowRight } from "react-icons/go";

function Features() {
	return (
		<article className="flex flex-col items-center justify-center">
			<section className="xxs:mt-16 xl:mt-16 xl:py-16 xl:px-6 grid grid-cols-1 grid-rows-1 bg-white rounded-xl border shadow-lg">
				<h2 className="xxs:text-5xl xl:text-6xl xxs:text-center xl:text-left font-black font-DGO">
					Features
				</h2>
				<section className="relative xxs:p-10 xl:p-0 grid xxs:grid-cols-1 xxs:grid-rows-1 xl:grid-cols-3 xl:grid-rows-1 gap-16">
					<div></div>

					<section className="xxs:flex xxs:flex-col xxs:items-center xl:block xl:col-start-1">
						<img src={dollagIcon} alt="" className="w-16 flex" />
						<p className="font-bold my-4">Save time & Reduce cost</p>
						<p className="text-slate-500">
							Building your own online store, shopping cart,
							<br />
							checkout, and licensing is time-consuming
						</p>
					</section>

					<section className="xxs:flex xxs:flex-col xxs:items-center xl:block ">
						<img src={noodlesIcon} alt="" className="w-16" />
						<p className="font-bold my-4">More features</p>

						<p className="text-slate-500">
							We simplify all that by combining all of the
							<br />
							features and solutions you need to sell
						</p>
					</section>

					<section className="xxs:flex xxs:flex-col xxs:items-center xl:block col-start-1">
						<img src={handloveIcon} alt="" className="w-16" />
						<p className="font-bold my-4">Sell your popular product more</p>

						<p className="text-slate-500">
							Designed from the ground up to be easy to
							<br />
							use and quick to set up for sellers
						</p>
					</section>

					<section className="xxs:flex xxs:flex-col xxs:items-center xl:block ">
						<img src={worldIcon} alt="" className="w-16" />
						<p className="font-bold my-4">Sell it across the globe</p>

						<p className="text-slate-500">
							Expand into new global markets with ease when
							<br />
							you automatically display popular pricing
						</p>
					</section>

					<section className="flex items-center justify-around py-6 px-8 xl:col-start-3 xl:row-start-2 xl:absolute border shadow-lg rounded-lg">
						<div>
							<p className="text-blue-500 font-bold text-lg">Try for free</p>
							<p className="w-44 text-slate-500">*No credit card required</p>
						</div>
						<button className="p-5 ml-4 bg-blue-600 rounded-full active:opacity-65 transition-all ease-in-out">
							<GoArrowRight className="text-white text-2xl" />
						</button>
					</section>

					<section className="flex flex-col xl:col-start-3 my-6 xl:row-start-3 bg-white xl:absolute border shadow-lg rounded-lg xl:translate-x-32 xl:-translate-y-20">
						<section className="mx-5">
							<p className="text-center my-2 font-medium">Manage your store</p>
							<div className="flex items-center gap-4">
								<img src={bagIcon} alt="" />
								<div className="flex flex-col gap-2 my-8">
									<div className="w-48 h-4 bg-slate-100 rounded-xl"></div>
									<div className="w-24 h-4 bg-slate-100 rounded-xl"></div>
								</div>
								<img src={circleIcon} alt="" />
							</div>
							<div className="flex items-center gap-4">
								<img src={cartIcon} alt="" />
								<div className="flex flex-col gap-2">
									<div className="w-48 h-4 bg-slate-100 rounded-xl"></div>
									<div className="w-24 h-4 bg-slate-100 rounded-xl"></div>
								</div>
								<img src={circlenotfullIcon} alt="" />
							</div>
						</section>
					</section>
				</section>
			</section>
		</article>
	);
}

export default Features;
