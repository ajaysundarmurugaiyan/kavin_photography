import React from 'react';

const PrePostWedding = () => {
  const images = [
    'https://imgmedia.lbb.in/media/2023/07/64ba509fcaed286aa8d090d2_1689931935431.jpg',
    'https://imgmedia.lbb.in/media/2023/07/64ba509fcaed286aa8d090d2_1689931935431.jpg',
    'https://imgmedia.lbb.in/media/2023/07/64ba509fcaed286aa8d090d2_1689931935431.jpg',
    'https://imgmedia.lbb.in/media/2023/07/64ba509fcaed286aa8d090d2_1689931935431.jpg',
  ];

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex overflow-x-auto space-x-6">
        {images.map((imageUrl, index) => (
          <div key={index} className="flex-shrink-0 w-1/2 sm:w-1/3 lg:w-1/4">
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover rounded-tl-3xl rounded-br-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrePostWedding;
