import React from 'react';
import Phot from '../lmage/Photosi.svg';

const Banner = () => {
  return (
    <div className="banner">
      <img
        src={Phot}
        alt="Banner"
        className="banner-image"
      />

      <style jsx>{`
        .banner {
          width: 100%;
          overflow: hidden;
        }

        .banner-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default Banner;
