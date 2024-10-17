import { useState } from "react";


const Gallery = () => {
    const [currentImage, setCurrentImage] = useState("kover.jpg");

    const images = [
        "kover.jpg",
        "kover-2.jpg",
        "kover-with-cat.jpg",
        "kover-4.jpg",
        "kover-5.jpg"
    ];

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="mb-4">
                <img
                    className="h-auto w-full max-w-full rounded-lg object-contain object-center md:h-[480px] bg-white p-2"
                    src={`/public/${currentImage}`}
                    alt={`${currentImage}`}
                />
            </div>
            <div className="grid grid-cols-5 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="flex justify-center p-2">
                        <img
                            src={`/public/${image}`} 
                            className="object-contain object-center h-20 max-w-full rounded-lg cursor-pointer bg-white p-1 border-2 border-gray-300 hover:border-gray-500 transition duration-150"
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