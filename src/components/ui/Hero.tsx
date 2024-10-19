import Gallery from "./Gallery";
import { GalleryMobile } from "./GalleryMobile";

interface IHero {
    scrollToForm: () => void
}

export function Hero({ scrollToForm }: IHero) {
    return <section className="py-[16px] lg:py-[64px] bg-[#E6F1FB]">
        <div className="sm:px-4 md:px-8 mx-auto flex flex-col md:flex-row gap-4 items-center max-w-[1440px] ">

            <div className="w-full md:w-1/2 mt-12 mb-6 md:mb-0 md:mt-0 ml-0  justify-center">
                <GalleryMobile />
                <Gallery />
            </div>
            <div className="w-full md:w-1/2">
                <div className="">

                    <h1 className="mb-6 text-3xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Килимок з підігрівом</span> Folem KM Чорний від USB (Power Bank).</h1>

                </div>
                <div>
                    <div className="flex flex-col gap-2 space-y-2">
                        <div className="">
                            <span className="text-2xl text-red-500 font-semibold line-through">870 грн</span>
                            <span className="ml-6 text-4xl font-bold text-green-500">499 грн</span>
                        </div>

                        <button onClick={scrollToForm} className="relative inline-flex  md:w-[300px]  justify-center px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium text-lg rounded-lg shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
                            Замовити
                            <span className="absolute top-[-15px] right-[-15px] transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xl font-bold px-2 py-1 rounded-full animate-scale">
                                -43%
                            </span>
                        </button>
                    </div>

                </div>
                <div className="mt-8">
                    <div className="text-[18px] font-semibold">Можлива електронна оплата</div>
                    <div className="h-[80px] mt-2 flex gap-3">
                        <div className="bodyelectro">
                            <img src="/mastercard.svg" alt="mastercard" className="h-full" />
                        </div>
                        <div className="bodyelectro">
                            <img src="/visa.svg" alt="visa" className="h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
