import React from "react";
import "./Resources.css";
import NLP from "../../images/resourceIMG/1NLP.png";
import SLP from "../../images/resourceIMG/2SLP.png";
import ECC from "../../images/resourceIMG/3ECC.png";
import SS from "../../images/resourceIMG/4SS.png";
import RA from "../../images/resourceIMG/5RA.png";
import M from "../../images/resourceIMG/6M.png";
import UL from "../../images/resourceIMG/7UL.png";
import SC from "../../images/resourceIMG/8SC.png";
import IBPP from "../../images/resourceIMG/9IBPP.png";
import TSLAP from "../../images/resourceIMG/10TSLAP.png";

const Resources = () => {
  return (
    <>
      <div className="resource">
        <div className="resourceHeader">
          <h1>RESOURCES</h1>
          <p>
            Discover a collection of knowledge repository of all you might need
            to know about the enabling ecosystem for electric mobility along
            with market updates.
          </p>
        </div>

        {/* resources */}
        <div className="card-container">
          <div className="card">
            <h2>National Level Policy</h2>
            <img src={NLP} alt="" />
            <p>
              The central government has developed policies for accelerating the
              adoption of electric vehicles. Here's everything you need to know
              about the key initiatives taken by the Government of India in this
              direction.
            </p>
            <button>
              <a href="https://e-amrit.niti.gov.in/national-level-policy">
                Read More
              </a>
            </button>
          </div>

          <div className="card">
            <h2>State Level Policies</h2>
            <img src={SLP} alt="" />
            <p>
              Most Indian states have devised their own policies and offer
              additional subsidies on top of central government subsidies to
              promote the adoption of electric mobility. Here's all you need to
              know about measures taken by the state governments.
            </p>
            <button>
              <a href="https://e-amrit.niti.gov.in/state-level-policies">
                Read More
              </a>
            </button>
          </div>

          <div className="card">
            <h2>Electricity Cost For Charging</h2>
            <img src={ECC} alt="" />
            <p>
              Electric vehicles are cheaper to run in comparison to petrol or
              diesel vehicles. Here's all you need to know about the cost you
              will need to pay to your local power distribution company to
              charge your electric vehicle.
            </p>
            <button>
              <a href="https://e-amrit.niti.gov.in/electricity-cost-for-charging">
                Read More
              </a>
            </button>
          </div>

          <div className="card">
            <h2>Standards And Specifications</h2>
            <img src={SS} alt="" />
            <p>
              Electric vehicles and their chargers comply to stringent safety
              and quality standards. Here's the brief of standards adopted in
              India.
            </p>
            <button>
              <a href="https://e-amrit.niti.gov.in/standards-and-specifications">
                Read More
              </a>
            </button>
          </div>

          <div className="card">
            <h2>Reports And Articles</h2>
            <img src={RA} alt="" />
            <p>
              Getting access to insightful reports and articles doesn't always
              have to be cumbersome. Here's the repository of downloadable
              reports and relevant articles.
            </p>
            <button>
              <a href="https://e-amrit.niti.gov.in/reports-and-articles">
                Read More
              </a>
            </button>
          </div>

          <div className="card">
            <h2>Media</h2>
            <img src={M} alt="" />
            <p>
              Catching up on the latest trends and developments in the electric
              vehicle space has never been so easy. Here are your newsletters to
              get all updates on the electric mobility space.
            </p>
            <button>
              <a href="https://e-amrit.niti.gov.in/media">Read More</a>
            </button>
          </div>

          <div className="card">
            <h2>Useful Links</h2>
            <img src={UL} alt="" />
            <p>
              Curious to learn more? Here's the link to the relevant websites to
              assist you in your search of relevant information on electric
              vehicles.
            </p>
            <button>
              <a href="https://e-amrit.niti.gov.in/useful-links">Read More</a>
            </button>
          </div>

          <div className="card">
            <h2>Skill Centre</h2>
            <img src={SC} alt="" />
            <p>
              The Skill Centre outlines the training institutes, centers of
              excellence and vocational trainings offered by government and
              private institutes for upskilling or reskilling to flatten your
              learning curve.
            </p>
            <button>
              <a href="https://e-amrit.niti.gov.in/skill-center">Read More</a>
            </button>
          </div>

          <div className="card">
            <h2>International Best Practices On Policies</h2>
            <img src={IBPP} alt="" x />
            <p>
              Comparative experience among different countries can provide
              valuable lessons on the best practices required to develop
              effective policies in the electric vehicle sector. Here's all you
              need to know about the international best practices and the key
              lessons on e-mobility policies.
            </p>
            <button>
              <a href="https://e-amrit.niti.gov.in/international-best-practices-on-policies">
                Read More
              </a>
            </button>
          </div>

          <div className="card">
            <h2>Template For State Level EV Awareness Portals</h2>
            <img src={TSLAP} alt="" />
            <p>
              The prototype portal can be used by other states to develop EV
              awareness platforms for their respective states. This state web
              portal intends to complement the e-AMRIT portal on raising
              awareness on EVs at the State level.
            </p>
            <button>
              <a href="https://e-amrit.niti.gov.in/ev-awareness-web-portal/">
                Read More
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Resources;
