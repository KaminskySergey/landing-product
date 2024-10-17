import { useState } from "react";
import { images } from "../../const/const";


const Gallery = () => {
    const [currentImage, setCurrentImage] = useState("kover.jpg");

    

    return (
        <div className="max-w-7xl hidden md:block mx-auto p-4">
            <div className="mb-4">
                <img
                    className="h-auto w-full max-w-full rounded-lg object-contain object-center md:h-[480px] bg-white p-2"
                    src={`/${currentImage}`}
                    alt={`${currentImage}`}
                />
            </div>
            <div className="grid grid-cols-5 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="flex justify-center p-2">
                        <img
                            src={`/${image}`} 
                            className="object-contain object-center md:h-15 lg:h-20 max-w-full rounded-lg cursor-pointer bg-white p-1 border-2 border-gray-300 hover:border-gray-500 transition duration-150"
                            alt={`gallery-image-${index}`}
                            onClick={() => setCurrentImage(image)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;