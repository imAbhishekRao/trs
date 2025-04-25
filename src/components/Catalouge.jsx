import React from "react";
import { Link } from "react-router-dom";
import VBM from "../lmage/vbm.jpeg";
import utm from "../lmage/utm.jpeg";
import POL from "../lmage/POL.jpeg";
import htm from "../lmage/htm.jpeg";
import itm from "../lmage/itm.jpeg";
import flux from "../lmage/flux.jpeg";
import ee2 from "../lmage/ee2.jpeg";
import misc from "../lmage/misc.jpeg";
import visual from "../lmage/visual.jpeg";
import flow from "../lmage/flow.jpeg";
import horizontal from "../lmage/horizonatal.jpeg";
import Navbar from "../components/NavBar";


const machines = [
  {
    category: "Vertically Balancing Machines",
    image: VBM,
    route: "/vertical-balancing-machine"
  },
  {
    category: "Universal Testing Machines",
    image: utm,
    route: "/utm"
  },
  {
    category: "Polishing Machines",
    image: POL,
    route: "/polishingmachines"
  },
  {
    category: "Hardness Testing Machines",
    image: htm,
    route: "/hardnesstestingmachines"
  },
  {
    category: "Impact Testing Machines",
    image: itm,
    route: "/impacttestingmachines"
  },
  {
    category: "NDT Magnetic Particle Testers",
    image: flux,
    route: "/ndtmagnetic"
  },
  {
    category: "Extensometers",
    image: ee2,
    route: "/extensometers"
  },
  {
    category: "Optical & Analysis Equipment",
    image: visual,
    route: "/metallurgicalmicroscope" // Link to MicroscopeProduct here
  },
  {
    category: "Sample Cutting Machines",
    image: misc,
    route: "/samplecuttingmachines"
  },
  {
    category: "Flow & Detection Systems",
    image: flow,
    route: "/flowdetection"
  },
  {
    category: "Balancing – Horizontal",
    image: horizontal,
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
              <img src={machine.image} alt={machine.category} className="machine-image" />
              <div className="card-content">
                <h2>{machine.category}</h2>
                <div className="spacer" />
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
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .machine-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .machine-image {
          width: 100%;
          height: auto;
        }

        .card-content {
          padding: 20px;
        }

  .explore-button {
  width: 100%; /* Full width of card */
  padding: 10px 0; /* Optional: reduce horizontal padding */
  font-size: 16px;
  background-color: #1a3e6f;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
}

        .explore-button:hover {
          background-color: #14325a;
        }
      `}</style>
    </>
  );
};

export default MachineDisplay;
