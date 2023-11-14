import React from "react";
import "./About.css";
import battery from "../../images/aboutIMG/battery-evs.png";
import fuelevs from "../../images/aboutIMG/fuelevs.png";
import hybrid from "../../images/aboutIMG/hybrid-evs.png";
import pluginHybrid from "../../images/aboutIMG/plugin-hybdid-evs.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="abouthead">
          <h1>About Electric Vehicles</h1>
          <p>
            Electric vehicles (EVs) are automobiles that are powered by electric
            motors using electrical energy stored in rechargeable batteries.
            They produce zero tailpipe emissions, helping to reduce
            environmental pollution and combat climate change.
          </p>
        </div>

        <div className="typeEV">
          <h1>TYPES OF ELECTRIC VEHICLES</h1>
          <p>There are four types of electric vehicles available:</p>
          <ul>
            <li>
              <strong>Battery Electric Vehicle (BEV) : </strong>Fully powered by
              electricity. These are more efficient compared to hybrid and
              plug-in hybrids.
            </li>
            <li>
              <strong>Hybrid Electric Vehicle :</strong>
              <ol>
                <li>
                  Hybrid Electric Vehicle (HEV) : The vehicle uses both the
                  internal combustion (usually petrol) engine and the
                  battery-powered motor powertrain. The petrol engine is used
                  both to drive and charge when the battery is empty. These
                  vehicles are not as efficient as fully electric or plug-in
                  hybrid vehicles.
                </li>
                <li>
                  Plug-in Hybrid Electric Vehicle (PHEV) : Uses both an internal
                  combustion engine and a battery charged from an external
                  socket (they have a plug). This means the vehicle's battery
                  can be charged with electricity rather than the engine. PHEVs
                  are more efficient than HEVs but less efficient than BEVs.
                </li>
              </ol>
            </li>
            <li>
              <strong>Fuel Cell Electric Vehicle (FCEV) : </strong>Electric
              energy is produced from chemical energy. For example, a hydrogen
              FCEV.
            </li>
          </ul>
        </div>

        {/* types of EV */}
        <p className="pOne">
          System Architecture of 4 types of electric cars is as follows :
        </p>
        <div className="aboutIMG">
          <div className="imgA">
            <img src={battery} alt="" />
          </div>
          <div className="imgA">
            <img src={hybrid} alt="" />
          </div>
          <div className="imgA">
            <img src={pluginHybrid} alt="" />
          </div>
          <div className="imgA">
            <img src={fuelevs} alt="" />
          </div>
        </div>

        {/* type EV explain */}
        <div className="aboutDetail">
          <div className="aboutContainer">
            <div>
              <h2>Battery Electric Vehicles (BEVs)</h2>
              <p>
                BEVs are also known as All-Electric Vehicles (AEV). Electric
                Vehicles using BEV technology run entirely on a battery-powered
                electric drivetrain. The electricity used to drive the vehicle
                is stored in a large battery pack which can be charged by
                plugging into the electricity grid. The charged battery pack
                then provides power to one or more electric motors to run the
                electric car. To find out more about BEVs, click below.
              </p>
              <button>
                <a href="">Battery electric vehicles</a>
              </button>
            </div>
            <div className="imgDetail">
              <img src={battery} alt="" />
            </div>
          </div>

          <div className="aboutContainer">
            <div>
              <h2>Hybrid Electric Vehicle (HEV):</h2>
              <p>
                HEVs are also known as series hybrid or parallel hybrid. HEVs
                have both engine and electric motor. The engine gets energy from
                fuel, and the motor gets electricity from batteries. The
                transmission is rotated simultaneously by both engine and
                electric motor. This then drives the wheels. To find out more
                about HEVs, click below.
              </p>
              <button>
                <a href="">Hybrid electric vehicle</a>
              </button>
            </div>
            <div className="imgDetail">
              <img src={hybrid} alt="" />
            </div>
          </div>

          <div className="aboutContainer">
            <div>
              <h2>Plug-in Hybrid Electric Vehicle (PHEV):</h2>
              <p>
                The PHEVs are also known as series hybrids. They have both
                engine and a motor. You can choose among the fuels, conventional
                fuel (such as petrol) or alternative fuel (such as bio-diesel).
                It can also be powered by a rechargeable battery pack. The
                battery can be charged externally. To find out more about PHEVs,
                click below.
              </p>
              <button>
                <a href="">Plug-in hybrid electric vehicle</a>
              </button>
            </div>
            <div className="imgDetail">
              <img src={pluginHybrid} alt="" />
            </div>
          </div>

          <div className="aboutContainer">
            <div>
              <h2>Fuel Cell Electric Vehicle(FCEV):</h2>
              <p>
                FCEVs are also known as Zero-Emission Vehicles. They employ
                'fuel cell technology' to generate the electricity required to
                run the vehicle. The chemical energy of the fuel is converted
                directly into electric energy. To find out more about FCEVs,
                click below.
              </p>
              <button>
                <a href="">Full cell electric vehicle</a>
              </button>
            </div>
            <div className="imgDetail">
              <img src={fuelevs} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
