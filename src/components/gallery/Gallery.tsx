import React from "react";
import Image from "next/image";
import { gallery } from "../../data/gallery";

const Gallery = () => {
    return (
        <div className="grid grid-cols-4 w-full p-16 justify-center items-center gap-5">
            {gallery.map((photo, index) => (
                <div
                    key={index}
                    className={`rounded-3xl overflow-hidden border-5 flex justify-center items-center border-[#72A0C7]
                        ${index === 0 ? "col-span-2 row-span-2" : ""}
                        ${index === 5 || index === 8 || index === 7 ? "row-span-4" : "" }
                        ${index === 6 || index === 9 ? "row-span-2" : ""}
                        
                    `}
                >
                    <Image
                        src={photo.src}
                        alt={photo.alt}
                    />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
