import React, { Fragment, useState } from 'react';
import WeddingPhotos from './OurServices/WeddingPhotos';
import BabyShoots from './OurServices/BabyShoots';
import MaternityShoots from './OurServices/MaternityShoots';
import CorporateShoots from './OurServices/CorporateShoots';
import PubertyShoots from './OurServices/PubertyShoots';
import PrePostWedding from './OurServices/Pre&PostWedding';

const OurServices = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleClick = (e, item) => {
    e.preventDefault();
    setSelectedItem(item);
  };

  return (
    <Fragment>

      <div className="p-4 sm:p-5">
        <ul className="grid grid-cols-2 gap-5 text-wrap sm:grid-cols-3 lg:grid-cols-6">
          <li 
            onClick={(e) => handleClick(e, 0)}
            className={`btnstyle cursor-pointer ${selectedItem === 0 ? 'bg-orange-500 text-white' : 'bg-white '} p-4 text-center`}
          >
            <a href="/" className="block text-sm sm:text-sm p-2 justify-center items-center ">
              Pre & Post Wedding
            </a>
          </li>
          {/* <li 
            onClick={(e) => handleClick(e, 2)}
            className={`btnstyle cursor-pointer ${selectedItem === 2 ? 'bg-orange-500 text-white' : 'bg-white '} p-4 text-center`}
          >
            <a href="/" className="block text-sm sm:text-sm p-2">
              Post-Wedding
            </a>
          </li> */}
                    <li 
            onClick={(e) => handleClick(e, 1)}
            className={`btnstyle cursor-pointer ${selectedItem === 1 ? 'bg-orange-500 text-white' : 'bg-white '} p-4 text-center`}
          >
            <a href="/" className="flex flex-col text-sm sm:text-sm">
              <span>Wedding </span>
              <span>Photography</span>
            </a>
          </li>
          <li 
            onClick={(e) => handleClick(e, 3)}
            className={`btnstyle cursor-pointer ${selectedItem === 3 ? 'bg-orange-500 text-white' : 'bg-white '} p-4 text-center align-center`}
          >
            <a href="/" className="block text-sm sm:text-sm p-2">
              Puberty Shoots
            </a>
          </li>

          <li 
            onClick={(e) => handleClick(e, 4)}
            className={`btnstyle cursor-pointer ${selectedItem === 4 ? 'bg-orange-500 text-white' : 'bg-white '} p-4 text-center`}
          >
            <a href="/" className="block text-sm sm:text-sm p-2">
              Baby Shoots
            </a>
          </li>
          <li 
            onClick={(e) => handleClick(e, 5)}
            className={`btnstyle cursor-pointer ${selectedItem === 5 ? 'bg-orange-500 text-white' : 'bg-white '} p-4 text-center`}
          >
            <a href="/" className="block text-sm sm:text-sm p-2">
              Maternity Shoots
            </a>
          </li>
          <li 
            onClick={(e) => handleClick(e, 6)}
            className={`btnstyle cursor-pointer ${selectedItem === 6 ? 'bg-orange-500 text-white' : 'bg-white '} p-4 text-center`}
          >
            <a href="/" className="block text-sm sm:text-sm p-2">
              Corporate Shoots
            </a>
          </li>

        </ul>

        <div className="p-4 sm:p-8">
          {selectedItem === 0 && <PrePostWedding />}
          {selectedItem === 1 && <WeddingPhotos />}
          {selectedItem === 3 && <PubertyShoots />}
          {selectedItem === 4 && <BabyShoots />}
          {selectedItem === 5 && <MaternityShoots />}
          {selectedItem === 6 && <CorporateShoots />}
        </div>
      </div>
    </Fragment>
  );
}

export default OurServices;
