import { advantage } from "../../const/const";

interface IAdvantage { }

export function Advantage({ }: IAdvantage) {
    return  <section className="py-[64px] lg:py-[94px] bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Переваги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {advantage.map((el) => (
                    <div
                        key={el.id}
                        className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105"
                    >
                        <div className={`flex items-center justify-center w-16 h-16 mb-4  text-white rounded-full`}>
                            <img src={el.icon} alt={el.title} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{el.title}</h3>
                        <p className="text-gray-600 font-semibold">{el.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
}
