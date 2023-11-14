import React from "react";
import LRC from "../../images/benefitIMG/1LRC.jpg";
import LMC from "../../images/benefitIMG/2LMC.jpg";
import ZTE from "../../images/benefitIMG/3ZTE.jpg";
import TFB from "../../images/benefitIMG/4TFB.jpg";
import PDDP from "../../images/benefitIMG/5PDDP.jpg";
import DQ from "../../images/benefitIMG/6DQ.jpg";
import CCH from "../../images/benefitIMG/7CCH.jpg";
import NNP from "../../images/benefitIMG/8NNP.jpg";
import "./Benefits.css";

const Benefits = () => {
  return (
    <>
      <div className="benefit">
        <div className="benefitHead">
          <h1>BENEFITS OF ELECTRIC VEHICLES</h1>
          <p>
            Transport is a fundamental requirement of modern life, but the
            traditional combustion engine is quickly becoming outdated. Petrol
            or diesel vehicles are highly polluting and are being quickly
            replaced by fully electric vehicles. Fully electric vehicles (EV)
            have zero tailpipe emissions and are much better for the
            environment. The electric vehicle revolution is here, and you can be
            part of it. Will your next vehicle be an electric one?
          </p>
        </div>

        <div className="benefitContainer">
          <h2>Lower running costs</h2>
          <div className="detail">
            <img src={LRC} alt="" />
            <p>
              The running cost of an electric vehicle is much lower than an
              equivalent petrol or diesel vehicle. Electric vehicles use
              electricity to charge their batteries instead of using fossil
              fuels like petrol or diesel. Electric vehicles are more efficient,
              and that combined with the electricity cost means that charging an
              electric vehicle is cheaper than filling petrol or diesel for your
              travel requirements. Using renewable energy sources can make the
              use of electric vehicles more eco-friendly. The electricity cost
              can be reduced further if charging is done with the help of
              renewable energy sources installed at home, such as solar panels.
            </p>
          </div>
        </div>

        <div className="benefitContainer">
          <h2>Low maintenance cost</h2>
          <div className="detail">
            <p>
              Electric vehicles have very low maintenance costs because they
              don't have as many moving parts as an internal combustion vehicle.
              The servicing requirements for electric vehicles are lesser than
              the conventional petrol or diesel vehicles. Therefore, the yearly
              cost of running an electric vehicle is significantly low.
            </p>
            <img src={LMC} alt="" />
          </div>
        </div>

        <div className="benefitContainer">
          <h2>Zero Tailpipe Emissions</h2>
          <div className="detail">
            <img src={ZTE} alt="" />
            <p>
              Driving an electric vehicle can help you reduce your carbon
              footprint because there will be zero tailpipe emissions. You can
              reduce the environmental impact of charging your vehicle further
              by choosing renewable energy options for home electricity.
            </p>
          </div>
        </div>

        <div className="benefitContainer">
          <h2>Tax and financial benefits</h2>
          <div className="detail">
            <p>
              Registration fees and road tax on purchasing electric vehicles are
              lesser than petrol or diesel vehicles. There are multiple policies
              and incentives offered by the government depending on which state
              you are in.
            </p>
            <img src={TFB} alt="" />
          </div>
        </div>

        <div className="benefitContainer">
          <h2>Petrol and diesel use is destroying our planet</h2>
          <div className="detail">
            <img src={PDDP} alt="" />
            <p>
              The availability of fossil fuels is limited, and their use is
              destroying our planet. Toxic emissions from petrol and diesel
              vehicles lead to long-term, adverse effects on public health. The
              emissions impact of electric vehicles is much lower than petrol or
              diesel vehicles. From an efficiency perspective, electric vehicles
              can covert around 60% of the electrical energy from the grid to
              power the wheels, but petrol or diesel cars can only convert
              17%-21% of the energy stored in the fuel to the wheels. That is a
              waste of around 80%. Fully electric vehicles have zero tailpipe
              emissions, but even when electricity production is taken into
              account, petrol or diesel vehicles emit almost 3 times more carbon
              dioxide than the average EV. To reduce the impact of charging
              electric vehicles, India is ambitious to achieve about 40 percent
              cumulative electric power installed capacity from non-fossil
              fuel-based energy resources by the year 2030. Therefore, electric
              vehicles are the way forward for Indian transport, and we must
              switch to them now.
            </p>
          </div>
        </div>

        <div className="benefitContainer">
          <h2>Electric Vehicles are easy to drive and quiet</h2>
          <div className="detail">
            <p>
              Electric vehicles don't have gears and are very convenient to
              drive. There are no complicated controls, just accelerate, brake,
              and steer. When you want to charge your vehicle, just plug it in
              to a home or public charger. Electric vehicles are also quiet, so
              they reduce noise pollution that traditional vehicles contribute
              to.
            </p>
            <img src={DQ} alt="" />
          </div>
        </div>

        <div className="benefitContainer">
          <h2>Convenience of charging at home</h2>
          <div className="detail">
            <img src={CCH} alt="" />
            <p>
              Imagine being at a busy fuel station during peak hours, and you
              are getting late to reach your workplace. These problems can
              easily be overcome with an electric vehicle. Simply plug your
              vehicle in at your home charger for 4-5 hours before you plan to
              go. If you are able to get a charger where you park at home, it is
              very convenient to plan your journeys in advance. What if you
              forget to plug in your machine someday? Then you can easily take
              the help of fast chargers or even battery swapping services if you
              are on a two-wheeler on the road.
            </p>
          </div>
        </div>

        <div className="benefitContainer">
          <h2>No noise pollution</h2>
          <div className="detail">
            <p>
              Electric vehicles have the silent functioning capability as there
              is no engine under the hood. No engine means no noise. The
              electric motor functions so silently that you need to peek into
              your instrument panel to check if it is ON. Electric vehicles are
              so silent that manufacturers have to add false sounds in order to
              make them safe for pedestrians.
            </p>
            <img src={NNP} alt="" />
          </div>
        </div>
        
      </div>
    </>
  );
};
export default Benefits;
