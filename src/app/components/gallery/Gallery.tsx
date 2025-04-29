import React from 'react';

const CssGrid = () => {
    const boxStyle = 'bg-neutral-100 border-2 rounded-xl-p2 flex flex-col items-center justify-center';
<div className={boxStyle}>
    Content goes here
</div>

    const images = [
        '/images/IMG_0727.jpeg',
        '/images/IMG_0730.pdf',
        '/images/IMG_0736.pdf',
        '/images/IMG_0739.pdf',
        '/images/IMG_0747.pdf',
        '/images/IMG_0754.pdf',
        '/images/IMG_0757.pdf',
        '/images/IMG_0769.pdf',
        '/images/IMG_0773.pdf',
        '/images/IMG_0778.pdf',
        '/images/IMG_0782.pdf',
        '/images/IMG_0788.pdf',
    ]
    return (
        <div className="grid grid-cols-3 gap-4 auto-rows-[300px]">
        {images.map((file, index) => {
            const isPDF = file.endsWith('.pdf');

            return (
                <div key={index} className={boxStyle}>
                    {isPDF ? (
                        <a href={file} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                            View PDF {index + 1}
                        </a>
                    ) : (
                        <img src={file} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover rounded" />
                    )}
                </div>
            );
        })}
    </div>
    );
};
export default CssGrid; 
