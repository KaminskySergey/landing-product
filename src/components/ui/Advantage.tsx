
interface IAdvantage { }

export function Advantage({ }: IAdvantage) {
    return <section className="py-[64px] lg:py-[94px] bg-gray-100">
        <div className="">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Переваги
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-500 text-white rounded-full">
                            <img src="/public/free-icon-warm.png" alt="warm" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">3 режими підігріву</h3>
                        <p className="text-gray-600">
                            Вибирайте з трьох рівнів температури для досягнення ідеального тепла в будь-яких умовах.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-red-500 text-white rounded-full">
                        <img src="/public/free-icon-usb.png" alt="usb" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Живлення від USB</h3>
                        <p className="text-gray-600">
                            Підключайте килимок до будь-якого USB-порту — ідеально для офісу, дому або подорожей.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-green-500 text-white rounded-full">
                        <img src="/public/free-icon-energy.png" alt="energy" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Енергоефективність</h3>
                        <p className="text-gray-600">
                            Килимок споживає мінімум енергії, забезпечуючи тепло без зайвих витрат.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-yellow-500 text-white rounded-full">
                        <img src="/public/free-icon-fast-time.png" alt="time" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Швидкий нагрів</h3>
                        <p className="text-gray-600">
                            Килимок нагрівається всього за кілька хвилин для швидкого комфорту.
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-purple-500 text-white rounded-full">
                        <img src="/public/free-icon-thumbs.png" alt="thumbs" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Компактність і портативність</h3>
                        <p className="text-gray-600">
                            Легко складається і переноситься, що робить його ідеальним для будь-якої подорожі.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-indigo-500 text-white rounded-full">
                        <img src="/public/free-icon-shield.png" alt="shield" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Безпека</h3>
                        <p className="text-gray-600">
                            Захист від перегріву забезпечує безпечне використання навіть при тривалому увімкненні.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
