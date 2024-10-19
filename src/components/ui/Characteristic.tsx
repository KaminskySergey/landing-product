import { characteristics } from "../../const/const";

interface ICharacteristic { }


export function Characteristic({ }: ICharacteristic) {
  return (
    <section className="py-[64px] lg:py-[94px] bg-white">
      <div className=" py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
            <img
              src="/obo-1.jpg"
              alt="Коврик з підігрівом Folem KM"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
              Характеристики
            </h2>

            <ul className="space-y-4">
              {characteristics.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200"
                >
                  <span className="text-gray-800 max-w-[160px] lg:max-w-none ">{item.label}:</span>
                  <span className="text-gray-600 max-w-[100px] lg:max-w-none font-bold text-sm sm:text-base lg:text-lg leading-relaxed">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}