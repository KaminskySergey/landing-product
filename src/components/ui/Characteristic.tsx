
interface ICharacteristic {}

export function Characteristic({}: ICharacteristic) {
    return <section  className="py-[64px] lg:py-[94px]">
        <div className="bg-white py-12">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
    <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
      <img src="/public/kover.jpg" alt="Коврик з підігрівом Folem KM" className="w-full h-auto rounded-lg shadow-md" />
    </div>

    <div className="flex-1">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
        Характеристики
      </h2>

      <ul className="space-y-4">
        <li className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
          <span className="text-gray-800">Розмір:</span>
          <span className="text-gray-600 font-bold">43.25 х 43.25 см</span>
        </li>

        <li className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
          <span className="text-gray-800">Довжина кабеля:</span>
          <span className="text-gray-600 font-bold">50 см</span>
        </li>

        <li className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
          <span className="text-gray-800">Живлення:</span>
          <span className="text-gray-600 font-bold">USB 5В2A</span>
        </li>

        <li className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
          <span className="text-gray-800">Рекомендована ємність Power Bank:</span>
          <span className="text-gray-600 font-bold">10 000 mAh</span>
        </li>

        <li className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
          <span className="text-gray-800">Кількість режимів підігріву:</span>
          <span className="text-gray-600 font-bold">3</span>
        </li>

        <li className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
          <span className="text-gray-800">Приблизний час роботи від Power Bank:</span>
          <span className="text-gray-600 font-bold">11-17 годин</span>
        </li>

        <li className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
          <span className="text-gray-800">Прання:</span>
          <span className="text-gray-600 font-bold">Ручне</span>
        </li>

        <li className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
          <span className="text-gray-800">Комплектація:</span>
          <span className="text-gray-600 font-bold">Коврик, чехол для Power Bank</span>
        </li>

        <li className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
          <span className="text-gray-800">Матеріал поверхні килимка:</span>
          <span className="text-gray-600 font-bold">Хлопок</span>
        </li>
      </ul>
    </div>
  </div>
</div>



    </section>
}
