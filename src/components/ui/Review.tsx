import { reviews } from "../../const/const";

interface IReview { }



export function Review({ }: IReview) {
    return <section className="py-[64px] lg:py-[94px] bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Відгуки</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex">
                                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-3" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                                    <p className="text-yellow-500">{'⭐'.repeat(review.rating)}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-800">{review.date}</p>
                            </div>
                        </div>
                        <p className="text-gray-600">{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
}
