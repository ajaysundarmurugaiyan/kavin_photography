// import React from 'react';

// const Card = ({ title, content, imageUrl }) => (
//   <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
//     <img src={imageUrl} alt={title} className="w-full h-50% object-cover mb-4" />
//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <p>{content}</p>
//   </div>
// );

// const PubertyShoots = () => {
//   const cards = [
//     { title: 'Card 1', content: 'Content for card 1', imageUrl: 'https://i.pinimg.com/236x/ef/90/ae/ef90aedbb6dae11789587d6abb44299c.jpg' },
//     { title: 'Card 2', content: 'Content for card 2', imageUrl: 'https://i.pinimg.com/236x/ef/90/ae/ef90aedbb6dae11789587d6abb44299c.jpg' },
//     { title: 'Card 3', content: 'Content for card 3', imageUrl: 'https://i.pinimg.com/236x/ef/90/ae/ef90aedbb6dae11789587d6abb44299c.jpg' },
//     { title: 'Card 4', content: 'Content for card 4', imageUrl: 'https://i.pinimg.com/236x/ef/90/ae/ef90aedbb6dae11789587d6abb44299c.jpg' },
//     { title: 'Card 5', content: 'Content for card 5', imageUrl: 'https://i.pinimg.com/236x/ef/90/ae/ef90aedbb6dae11789587d6abb44299c.jpg' },
//     { title: 'Card 6', content: 'Content for card 6', imageUrl: 'https://i.pinimg.com/236x/ef/90/ae/ef90aedbb6dae11789587d6abb44299c.jpg' },
//     { title: 'Card 7', content: 'Content for card 7', imageUrl: 'https://i.pinimg.com/236x/ef/90/ae/ef90aedbb6dae11789587d6abb44299c.jpg' },
//     { title: 'Card 8', content: 'Content for card 8', imageUrl: 'https://i.pinimg.com/236x/ef/90/ae/ef90aedbb6dae11789587d6abb44299c.jpg' },
//   ];

//   return (
//     <div className="p-6 bg-gray-100">
//       <div className="flex overflow-auto gap-6">
//         {cards.map((card, index) => (
//           <Card
//             key={index}
//             title={card.title}
//             content={card.content}
//             imageUrl={card.imageUrl}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PubertyShoots;



import React from 'react';

const PrePostWedding = () => {
  const images = [
    'https://i.pinimg.com/236x/ef/90/ae/ef90aedbb6dae11789587d6abb44299c.jpg',
    'https://i.pinimg.com/236x/ef/90/ae/ef90aedbb6dae11789587d6abb44299c.jpg',
    'https://i.pinimg.com/236x/ef/90/ae/ef90aedbb6dae11789587d6abb44299c.jpg',
    'https://i.pinimg.com/236x/ef/90/ae/ef90aedbb6dae11789587d6abb44299c.jpg',
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
