
interface IModalError { }

export function ModalError({ }: IModalError) {
    return <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
        <div className="bg-white p-6 md:mx-auto">
            <svg
                viewBox="0 0 24 24"
                className="text-red-600 w-16 h-16 mx-auto my-6"
            >
                <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                />
            </svg>
            <div className="text-center">
                <h3 className="md:text-3xl text-2xl text-gray-900 font-bold">Сталася помилка</h3>
                <p className="text-gray-600 font-bold my-2">На жаль, ваше замовлення не вдалося відправити.</p>
                <p className="text-black font-semibold text-2xl">Будь ласка, спробуйте ще раз!</p>
            </div>
        </div>
    </div>
}
