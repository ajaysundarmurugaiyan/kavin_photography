// import React, { Fragment, useState } from "react";
// import WeddingPhotos from "./OurServices/WeddingPhotos";
// import BabyShoots from "./OurServices/BabyShoots";
// import MaternityShoots from "./OurServices/MaternityShoots";
// import CorporateShoots from "./OurServices/CorporateShoots";
// import PubertyShoots from "./OurServices/PubertyShoots";
// import PrePostWedding from "./OurServices/Pre&PostWedding";

// const OurServices = () => {
//   const [selectedItem, setSelectedItem] = useState(0);

//   const handleClick = (e, item) => {
//     e.preventDefault();
//     setSelectedItem(item);
//   };

//   return (
//     <Fragment>
//       <div className="p-4 sm:p-5">
//         <ul className="grid grid-cols-2 gap-5 text-wrap sm:grid-cols-3 lg:flex lg:justify-evenly">
//           <li
//             onClick={(e) => handleClick(e, 0)}
//             className={`btnstyle cursor-pointer ${
//               selectedItem === 0 ? "bg-orange-500 text-white" : "bg-white "
//             } p-4 text-center`}
//           >
//             <a
//               href="/"
//               className="flex flex-wrap text-sm sm:text-lg md:pt-2 lg:pt-0 justify-center items-center "
//             >
//               Pre & Post Wedding
//             </a>
//           </li>
//           <li
//             onClick={(e) => handleClick(e, 1)}
//             className={`btnstyle cursor-pointer ${
//               selectedItem === 1 ? "bg-orange-500 text-white" : "bg-white "
//             } p-4 text-center`}
//           >
//             <a
//               href="/"
//               className="flex text-sm sm:text-lg justify-center items-center"
//             >
//               Wedding Photography
//             </a>
//           </li>
//           <li
//             onClick={(e) => handleClick(e, 3)}
//             className={`btnstyle cursor-pointer ${
//               selectedItem === 3 ? "bg-orange-500 text-white" : "bg-white "
//             } p-4 text-center align-center`}
//           >
//             <a href="/" className="flex text-sm sm:pt-3 lg:pt-0 sm:text-lg justify-center items-center">
//               Puberty Shoots
//             </a>
//           </li>

//           <li
//             onClick={(e) => handleClick(e, 4)}
//             className={`btnstyle cursor-pointer ${
//               selectedItem === 4 ? "bg-orange-500 text-white" : "bg-white "
//             } p-4 text-center`}
//           >
//             <div className="flex text-sm sm:text-lg justify-center items-center">
//               Baby Shoots
//             </div>
//           </li>
//           <li
//             onClick={(e) => handleClick(e, 5)}
//             className={`btnstyle cursor-pointer ${
//               selectedItem === 5 ? "bg-orange-500 text-white" : "bg-white "
//             } p-4 text-center`}
//           >
//             <a href="/" className="flex text-sm sm:text-lg justify-center items-center">
//               Maternity Shoots
//             </a>
//           </li>
//           <li
//             onClick={(e) => handleClick(e, 6)}
//             className={`btnstyle cursor-pointer ${
//               selectedItem === 6 ? "bg-orange-500 text-white" : "bg-white "
//             } p-4 text-center`}
//           >
//             <a href="/" className="flex text-sm sm:text-lg justify-center items-center">
//               Corporate Shoots
//             </a>
//           </li>
//         </ul>

//         <div className="p-4 sm:p-8">
//           {selectedItem === 0 && <PrePostWedding />}
//           {selectedItem === 1 && <WeddingPhotos />}
//           {selectedItem === 3 && <PubertyShoots />}
//           {selectedItem === 4 && <BabyShoots />}
//           {selectedItem === 5 && <MaternityShoots />}
//           {selectedItem === 6 && <CorporateShoots />}
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default OurServices;


import React, { useState } from "react";
import WeddingPhotos from "./OurServices/WeddingPhotos";
import BabyShoots from "./OurServices/BabyShoots";
import MaternityShoots from "./OurServices/MaternityShoots";
import CorporateShoots from "./OurServices/CorporateShoots";
import PubertyShoots from "./OurServices/PubertyShoots";
import PrePostWedding from "./OurServices/Pre&PostWedding";

const services = [
  {
    title: "Pre & Post Wedding",
    component: <PrePostWedding />,
    image: "path/to/prepostwedding.jpg", // Update with actual image paths
  },
  {
    title: "Wedding Photography",
    component: <WeddingPhotos />,
    image: "path/to/weddingphotos.jpg", // Update with actual image paths
  },
  {
    title: "Puberty Shoots",
    component: <PubertyShoots />,
    image: "path/to/pubertyshoots.jpg", // Update with actual image paths
  },
  {
    title: "Baby Shoots",
    component: <BabyShoots />,
    image: "path/to/babyshoots.jpg", // Update with actual image paths
  },
  {
    title: "Maternity Shoots",
    component: <MaternityShoots />,
    image: "path/to/maternityshoots.jpg", // Update with actual image paths
  },
  {
    title: "Corporate Shoots",
    component: <CorporateShoots />,
    image: "path/to/corporateshoots.jpg", // Update with actual image paths
  },
];

const OurServices = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleNext = () => {
    setSelectedItem((prevItem) => (prevItem + 1) % services.length);
  };

  const handlePrev = () => {
    setSelectedItem((prevItem) =>
      prevItem === 0 ? services.length - 1 : prevItem - 1
    );
  };

  return (
    <div className="sm:p-5">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="p-4 text-center flex-1">
          <h2 className="text-lg sm:text-xl md:text-2xl mb-4 font-merriweather">
          <button onClick={handlePrev}className="sm:p-5 p-2 text-lg sm:text-xl md:text-2xl font-merriweather mb-4 md:mb-0 md:mr-4">←</button>
            {services[selectedItem].title}
            <button onClick={handleNext}className="sm:p-5 p-2 text-lg sm:text-xl md:text-2xl font-merriweather mt-4 md:mt-0 md:ml-4">→</button>
          </h2>
          <div className="border mt-4 sm:mt-6 md:mt-10">
            {/* Uncomment and use this image tag if you want to display images */}
            {/* <img
              src={services[selectedItem].image}
              alt={services[selectedItem].title}
              className="w-full h-auto mb-4"
            /> */}
            {services[selectedItem].component}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;



