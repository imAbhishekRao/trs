import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";

const machines = [
  {
    category: "Vertically Balancing Machines",
    image: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Untitled%20design%20(47).png?raw=true",
    route: "/vertical-balancing-machine"
  },
  {
    category: "Universal Testing Machines",
    image: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Untitled%20design%20(48).png?raw=true",
    route: "/utm"
  },
  {
    category: "Polishing Machines",
    image: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Untitled%20design%20(7).jpg?raw=true",
    route: "/polishingmachines"
  },
  {
    category: "Hardness Testing Machines",
    image: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Untitled%20design%20(8).jpg?raw=true",
    route: "/hardnesstestingmachines"
  },
  {
    category: "Impact Testing Machines",
    image: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Untitled%20design%20(10).jpg?raw=true",
    route: "/impacttestingmachines"
  },
  {
    category: "NDT Magnetic Particle Testers",
    image: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Untitled%20design%20(11).jpg?raw=true",
    route: "/ndtmagnetic"
  },
  {
    category: "Extensometers",
    image: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/WhatsApp%20Image%202025-06-05%20at%2013.10.55.jpeg?raw=true",
    route: "/extensometers"
  },
  {
    category: "Optical & Analysis Equipment",
    image: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Untitled%20design%20(12).jpg?raw=true",
    route: "/metallurgicalmicroscope"
  },
  {
    category: "Sample Cutting Machines",
    image: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Untitled%20design%20(13).jpg?raw=true",
    route: "/samplecuttingmachines"
  },
  {
    category: "Flow & Detection Systems",
    image: "https://github.com/imAbhishekRao/Photos_storage_for_clients/blob/main/Untitled%20design%20(14).jpg?raw=true",
    route: "/flowdetection"
  },
  {
    category: "Balancing – Horizontal",
    image: "https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/f582de93a36f9e2af66d300aea76e1f9ae62272c/Untitled%20design%20(15).jpg",
    route: "/horizontal-balancing-machine"
  }
];

const MachineDisplay = () => {
  return (
    <>
      <Navbar />
      <section className="machine-section">
        <div className="machine-header">
          <h1>Our Product Categories</h1>
          <p>Explore our range of machines</p>
        </div>

        <div className="machine-grid">
          {machines.map((machine, index) => (
            <div key={index} className="machine-card">
              <div className="image-wrapper">
                <img
                  src={machine.image}
                  alt={machine.category}
                  className="machine-image"
                />
              </div>
              <div className="card-content">
                <h2>{machine.category}</h2>
                <Link to={machine.route}>
                  <button className="explore-button">Explore Product</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .machine-section {
          padding: 80px 20px;
          background-color: #f5f5f5;
        }

        .machine-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 40px auto;
        }

        .machine-header h1 {
          font-size: 36px;
          color: #1a3e6f;
          margin-bottom: 10px;
        }

        .machine-header p {
          font-size: 18px;
          color: #555;
        }

        .machine-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .machine-card {
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          transition: box-shadow 0.3s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .machine-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 100%; /* 1:1 aspect ratio */
        }

        .machine-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-content {
          padding: 20px;
          text-align: center;
        }

        .card-content h2 {
          font-size: 18px;
          font-weight: 600;
          color: #1a3e6f;
          margin-bottom: 12px;
        }

        .explore-button {
          width: 100%;
          padding: 10px 0;
          font-size: 16px;
          background-color: #1a3e6f;
          color: #fff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .explore-button:hover {
          background-color: #14325a;
        }
      `}</style>
    </>
  );
};

export default MachineDisplay;
