import { storeFeatures } from "../../const/const";

interface IStoreFeatures { }

export function StoreFeatures({ }: IStoreFeatures) {
    return <section className="py-[32px] lg:py-[64px] bg-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ul className=" grid grid-cols-2 md:grid-cols-4 gap-4">
                {storeFeatures.map((el) => (
                    <li key={el.id} className=" flex flex-col items-center">
                        <img src={el.imgSrc} alt={el.title} className="w-[80px] h-[80px]" />
                        <span className="block text-gray-800 font-bold text-center p-4">
                            <b>{el.title}</b> <br />{el.description}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </section>
}
