import React from 'react';

const ServiceSection = () => {
  return (
    <section className="service-section">
      <div className="service-wrapper">
        <div className="service-container">
          <div className="service-header">
            <p className="service-title">What We Do Best</p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-icon-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="service-icon"
                  >
                    <path d={service.iconPath} />
                  </svg>
                  <div className="service-name">{service.title}</div>
                </div>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-section {
          background-color: white;
          padding-bottom: 1.5rem;
          padding-top: 4rem;
        }

        .service-wrapper {
          max-width: 80rem;
          margin: 0 auto;
          padding: 1rem;
        }

        .service-container {
          background-color: white;
          padding: 1.5rem;
        }

        .service-header {
          margin-bottom: 4rem;
          text-align: center;
        }

        .service-title {
          margin-top: 0.5rem;
          font-size: 3rem;
          font-weight: bold;
          color: #1f2937;
          letter-spacing: -0.025em;
        }

        @media (min-width: 1024px) {
          .service-title {
            font-size: 4.5rem;
          }
        }

        .service-grid {
          display: flex;
          flex-wrap: wrap;
          margin: 3rem 0;
        }

        .service-item {
          width: 100%;
          padding: 2rem;
          border-bottom: 1px solid #d1d5db;
          box-sizing: border-box;
        }

        @media (min-width: 768px) {
          .service-item {
            width: 50%;
            border-right: 1px solid #d1d5db;
          }
        }

        @media (min-width: 1024px) {
          .service-item {
            width: 33.3333%;
          }
        }

        .service-icon-title {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .service-icon {
          height: 1.5rem;
          width: 1.5rem;
          color: #4f46e5;
        }

        .service-name {
          margin-left: 1rem;
          font-size: 1.25rem;
          font-weight: 500;
        }

        .service-description {
          color: #6b7280;
          line-height: 1.75;
        }
      `}</style>
    </section>
  );
};

const services = [
  {
    title: 'Dynamic & Vertical Balancing Machines',
    description:
      'High-precision balancing solutions for rotors, impellers, and other rotating components using microprocessor-based panels.',
    iconPath: 'M4 6h24v20H4z M20 4v4 M12 4v4',
  },
  {
    title: 'Universal Testing Machines',
    description:
      'Servo-controlled hydraulic and electronic UTM models for tensile, compression, and bending tests with PC connectivity.',
    iconPath: 'M2 6h28v16H2z M2 22h28v2H2z',
  },
  {
    title: 'Hardness Testing Equipment',
    description:
      'Rockwell, Brinell, and Vickers machines—semi and fully automatic—for accurate hardness measurement across industries.',
    iconPath: 'M12 2h8v28h-8z M6 6h20v2H6z',
  },
  {
    title: 'Metallurgical Sample Preparation',
    description:
      'Polishing, cutting, and specimen preparation machines for metallographic analysis with mirror-finish results.',
    iconPath: 'M16 3L4 16l12 13 12-13L16 3z',
  },
  {
    title: 'Calibration Services (NABL Accredited)',
    description:
      'Certified calibration for mechanical and material testing machines as per ISO/ASTM/IS standards with traceable reports.',
    iconPath: 'M16 4a12 12 0 1 1 0 24 12 12 0 0 1 0-24z',
  },
  {
    title: 'Data Acquisition & Analysis Software',
    description:
      'Custom software packages for real-time graphing, test data logging, and compliance reporting for all TRS systems.',
    iconPath: 'M3 6h26v20H3z M8 10h16v12H8z',
  },
];

export default ServiceSection;
