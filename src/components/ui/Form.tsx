import { useState, forwardRef } from "react";
import Modal from "./Modal";
import { ModalSuccess } from "./ModalSuccess";
import { ModalError } from "./ModalError";


interface IForm { }

export const Form = forwardRef<HTMLDivElement, IForm>((_, ref) => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: ""
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const sendMessageToTelegram = async (message: string) => {
        const botToken = import.meta.env.VITE_API_BOT_TOKEN;
        const chatId = import.meta.env.VITE_ID_CHAT;
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const params = {
            chat_id: chatId,
            text: message
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params),
            });

            const data = await response.json();
            if (!data.ok) {
                throw new Error("Ошибка отправки в Telegram");
            }

            return true;
        } catch (error) {
            console.error("Error", error);
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const message = `Нове замовлення: \nІм'я: ${formData.firstName}\nПрізвище: ${formData.lastName}\nТелефон: ${formData.phoneNumber}`;
        const isSent = await sendMessageToTelegram(message);

        if (isSent) {
            setIsError(false);
        } else {
            setIsError(true);
        }

        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return <>
        <section ref={ref} className="bg-gradient-to-r from-blue-500 to-purple-500 py-12 px-2">
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Форма замовлення</h2>
                <form action="#" method="POST" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4">

                        <div>
                            <label className="block text-gray-600 mb-1" htmlFor="firstName">Ім'я</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Ім'я"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 mb-1" htmlFor="lastName">Прізвище</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Прізвище"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 mb-1" htmlFor="phoneNumber">Номер телефону</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Номер телефону"
                                required
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 transition duration-200"
                            >
                                Зробити замовлення
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>

        {isModalOpen && (
            isError ? (
                <Modal onClose={closeModal}>

                    <ModalError />
                </Modal>
            ) : (
                <Modal onClose={closeModal}>

                    <ModalSuccess />
                </Modal>
            )
        )}
    </>
})