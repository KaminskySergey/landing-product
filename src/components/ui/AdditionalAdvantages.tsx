import { additionalAdvantages } from "../../const/const";

interface IAdditionalAdvantages {}

export function AdditionalAdvantages({}: IAdditionalAdvantages) {
    return <section className="py-[64px] lg:py-[94px] bg-gray-100">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold mb-6">Особливості</h2>
        <ul className="additional-advantages grid grid-cols-1 md:grid-cols-2  gap-4">
            {additionalAdvantages.map((advantage) => (
                <li key={advantage.id} className="bg-white flex flex-col p-4 rounded-lg shadow-lg">
                    <span className="block text-gray-800 font-bold text-center">
                        <b>{advantage.title}</b>
                    </span>
                    <p className="text-gray-600 text-center font-semibold mt-2">{advantage.description}</p>
                </li>
            ))}
        </ul>
    </div>
</section>
}
