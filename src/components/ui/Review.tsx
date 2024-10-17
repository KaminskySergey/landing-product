
interface IReview { }

export function Review({ }: IReview) {
    return <section className="py-[64px] lg:py-[94px] bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Відгуки</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                        <img src="/user.png" alt="user1" className="w-12 h-12 rounded-full mr-3" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Олена</h3>
                            <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <p className="text-gray-600">Купила коврик для роботи з дому, і він просто чудовий! Тепло і комфортно. Рекомендую всім!</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                        <img src="/user.png" alt="user2" className="w-12 h-12 rounded-full mr-3" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Андрій</h3>
                            <p className="text-yellow-500">⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <p className="text-gray-600">Коврик відмінно підійшов для прохолодних днів. Тримає тепло на довгий час, але чекав більше режимів.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                        <img src="/user.png" alt="user3" className="w-12 h-12 rounded-full mr-3" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Світлана</h3>
                            <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <p className="text-gray-600">Мені дуже подобається цей коврик! Я використовую його під час перегляду телевізора, і він дійсно допомагає розслабитися.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                        <img src="/user.png" alt="user4" className="w-12 h-12 rounded-full mr-3" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Максим</h3>
                            <p className="text-yellow-500">⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <p className="text-gray-600">Цей коврик — справжня знахідка! Легко користуватися, і він дійсно зігріває. Єдине, чого не вистачає — це автоматичного вимкнення.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                        <img src="/user.png" alt="user5" className="w-12 h-12 rounded-full mr-3" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Ірина</h3>
                            <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <p className="text-gray-600">Неймовірний коврик! Дуже м'який і приємний на дотик. Ідеально підходить для холодних зимових вечорів.</p>
                </div>
            </div>
        </div>
    </section>
}
