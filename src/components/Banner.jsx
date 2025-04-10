import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="https://img.freepik.com/premium-psd/youtube-video-thumbnail-web-banner-template-business-video-youtube-marketing-graphic-channel_797457-127.jpg?ga=GA1.1.1421844968.1744281387&semt=ais_hybrid&w=740"
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
