import React from "react";
import "./Statistics.css";
import evSales from "../../images/statIMG/EVsales2015-2030.png";
import evDemRes from "../../images/statIMG/EVdemandres.png";
import oilDisp from "../../images/statIMG/oilDisp.png";
import evBattery from "../../images/statIMG/evBattery.png";
import vcp from "../../images/statIMG/vcp.png";

const Statistics = () => {
  return (
    <>
      <div className="statistic">
        <div className="statHeader">
          <h1>Environmental Impact Statistics</h1>
          <p>
            Electric vehicles are the key technology to decarbonise road
            transport, a sector that accounts for over 15% of global
            energy-related emissions. Recent years have seen exponential growth
            in the sale of electric vehicles together with improved range, wider
            model availability and increased performance. Passenger electric
            cars are surging in popularity - we estimate that 18% of new cars
            sold in 2023 will be electric. If the growth experienced in the past
            two years is sustained, CO2 emissions from cars can by 2030 be put
            on a pathway aligned with the Net Zero Emissions by 2050 (NZE)
            Scenario. However, electric vehicles are not yet a global
            phenomenon. Sales in developing and emerging economies have been
            slow due to the relatively high purchase price of an electric
            vehicle and a lack of charging infrastructure availability.
          </p>
        </div>
        <div className="statisticContainer">
          <div>
            <h2>Country and regional highlights</h2>
            <p>
              China, Europe and the United States remain the leading electric
              vehicle markets Countries and regions making notable progress to
              advance electric cars include:
              <ul>
                <li>
                  Norway continues to lead in rates of electric vehicle (EV)
                  deployment, with the share of electric car sales reaching 88%
                  in 2022.
                </li>
                <li>
                  China accounted for nearly 60% of all new electric car
                  registrations globally in 2022. The share of electric cars in
                  total domestic car sales reached 29% in China in 2022, up from
                  16% in 2021, thereby achieving the 2025 national target of a
                  20% sales share for so-called new energy vehicles (NEVs)1 well
                  in advance.
                </li>
                <li>
                  The European Union adopted new CO2 standards for cars and vans
                  in March 2023, which require a 55% and 50% reduction in
                  emissions of new cars and vans by 2030 (compared to 2021), and
                  100% for both by 2035.
                </li>
                <li>
                  In the United States, the Inflation Reduction Act (IRA) has
                  triggered a rush by global electromobility companies to expand
                  US manufacturing operations. Between August 2022 and March
                  2023, major EV and battery makers announced cumulative
                  post-IRA investments of USD 52 billion in North American EV
                  supply chains, of which 50% is for battery manufacturing, and
                  about 20% each for battery components and EV manufacturing.
                </li>
              </ul>
              1 NEVs (China) include BEVs, PHEVs and fuel-cell electric
              vehicles.
            </p>
          </div>
        </div>

        <div className="statisticContainer">
          <div>
            <h2>Technology deployment</h2>
            <p>Global electric car sales exceeded 10 million in 2022</p>
          </div>
          <div className="stt">
            <p>
              Electric car sales saw another record year in 2022, achieving a
              14% sales share, despite supply chain disruptions, macro-economic
              and geopolitical uncertainty, and high commodity and energy
              prices. The growth in electric car sales took place in the context
              of globally contracting car markets: total car sales in 2022
              dipped by 3% relative to 2021. Electric car sales - including
              battery electric vehicles (BEVs) and plug-in hybrid electric
              vehicles (PHEVs) - exceeded 10 million last year, up 55% relative
              to 2021. In the course of just 5 years, from 2017 to 2022, EV
              sales jumped from around 1 million to more than 10 million. It
              previously took 5 years from 2012 to 2017 for EV sales to grow
              from around 100 000 to 1 million, underscoring the exponential
              nature of EV sales growth. In the Net Zero Scenario, electric car
              sales reach around 65% of total car sales in 2030. To get track
              with this scenario, electric car sales must increase by an average
              of around 25% per year from 2023 to 2030. For comparison, electric
              car sales increased by 55% in 2022 compared to 2021.
              Electrification is happening in other vehicle segments, though in
              2022 the electric sales share of buses and trucks was only around
              4% and 1%, respectively. For further data on historical and
              projected EV sales and stock, see the IEA Global EV Data Explorer.
            </p>
            <img src={evSales} alt="" />
          </div>
          <div className="colorH">
            <div className="color-box">
              <div className="color1"></div>
              <p>China</p>
            </div>
            <div className="color-box">
              <div className="color2"></div>
              <p>Europe</p>
            </div>
            <div className="color-box">
              <div className="color3"></div>
              <p>US</p>
            </div>
            <div className="color-box">
              <div className="color4"></div>
              <p>Other</p>
            </div>
            <div className="color-box">
              <div className="color5"></div>
              <p>Global</p>
            </div>
          </div>
        </div>

        <div className="statisticContainer">
          <div>
            <h2>Energy</h2>
            <p>
              Electric vehicles avoid oil consumption The global EV fleet
              consumed about 110 TWh of electricity in 2022, which accounts for
              less than 0.5% of current total final electricity consumption
              worldwide. The use of EVs displaced around 0.7 Mb/d (1.3 EJ) of
              oil in 2022. EVs would need to displace around 8 Mb/d (17 EJ) of
              oil in 2030 to be in step with the Net Zero Scenario.{" "}
            </p>
          </div>
          <div className="energyIMG">
            <img src={evDemRes} alt="" />
            <img src={oilDisp} alt="" />
          </div>
          <div>
            <div className="colorH">
              <div className="color-box">
                <div className="color1"></div>
                <p>Two/three-wheelers</p>
              </div>
              <div className="color-box">
                <div className="color2"></div>
                <p>Light-duty vehicles</p>
              </div>
              <div className="color-box">
                <div className="color3"></div>
                <p>Buses</p>
              </div>
              <div className="color-box">
                <div className="color4"></div>
                <p>Trucks</p>
              </div>
            </div>
          </div>
        </div>

        <div className="statisticContainer">
          <div>
            <h2>Technology manufacturing</h2>
            <p>
              Announced battery manufacturing capacity for 2030 would fulfil
              demand for electric vehicle batteries in the Net Zero Scenario
            </p> 
          </div>
          <div className="tm">
            <p>
              The lithium-ion automotive battery manufacturing capacity in 2022
              was roughly 1.5 TWh. According to Benchmark Mineral Intelligence
              (as of May 2023), the announced battery production capacity by
              private companies for EVs to be in place by 2030 amounts to 6.9
              TWh. In the Net Zero Scenario, battery demand for EVs, across all
              road segments, reaches around 5.5 TWh in 2030. Assuming an average
              utilisation rate of battery production facilities of 85%,
              announced capacity in 2030 would cover requirements in the Net
              Zero Scenario (6.5 TWh of capacity).
            </p>
            <img src={evBattery} alt="" />
          </div>
          <div className="colorH">
            <div className="color-box">
              <div className="color1"></div>
              <p>China</p>
            </div>
            <div className="color-box">
              <div className="color2"></div>
              <p>Europe</p>
            </div>
            <div className="color-box">
              <div className="color3"></div>
              <p>US</p>
            </div>
            <div className="color-box">
              <div className="color4"></div>
              <p>Rest of the world</p>
            </div>
            <div className="color-box">
              <div className="color5"></div>
              <p>NZE</p>
            </div>
          </div>
        </div>

        <div className="statisticContainer">
          <div>
            <h2>Innovation</h2>
            <p>
              Alternative battery chemistries are gaining prominence, helping
              ease pressure on critical mineral supply Critical mineral price
              volatility and supply chain constraints pose a possible obstacle
              in achieving the EV deployment levels needed to get on a pathway
              aligned with the Net Zero Scenario. Today, lithium-ion batteries
              account for almost the entire EV battery market, and most of the
              common chemistries rely on the critical minerals lithium, cobalt
              and nickel. In 2022, lithium iron phosphate (LFP) batteries - the
              only lithium-ion battery chemistry which does not use nickel or
              cobalt - reached their highest market share of the past decade, at
              just under 30%. This was in part due to price volatility of
              battery metals, making LFP batteries more attractive despite their
              lower energy density. Supply chains for sodium-ion (Na-ion)
              batteries - currently the only viable lithium-free battery
              alternative - are also being established, with over 100 GWh of
              manufacturing capacity operating or announced. The Na-ion battery
              developed by China's CATL is estimated to cost 30% less than an
              LFP battery, however, the current energy density of these
              batteries is lower than that of even the least energy-dense
              lithium-ion batteries.
            </p>
          </div>
        </div>

        <div className="statisticContainer">
          <div>
            <h2>Supporting infrastructure</h2>
            <p>
              The number of public charging points is increasing, but deployment
              must accelerate
            </p>
          </div>
          <div className="si">
            <p>
              While most charging demand is currently met by home charging,
              publicly accessible chargers are increasingly needed in order to
              provide the same level of convenience and accessibility as for
              refuelling conventional vehicles. At the end of 2022, there were
              2.7 million public charging points worldwide, more than 900,000 of
              which were installed in 2022, an increase of about 55% on 2021
              stock. At the end of 2022 China was home to about two-thirds of
              the global stock of public chargers. Europe ranks second, with
              around 540,000 total public chargers in 2022, a 50% increase from
              the previous year. By 2030, the Net Zero Scenario sees the
              installation of 17 million publicly available charging stations,
              which would entail a considerable increase on the 900,000 annual
              additions witnessed in 2022.
            </p>
            <img src={vcp} alt="" />
          </div>
          <div className="colorH">
            <div className="color-box">
              <div className="color1"></div>
              <p>China</p>
            </div>
            <div className="color-box">
              <div className="color2"></div>
              <p>Europe</p>
            </div>
            <div className="color-box">
              <div className="color3"></div>
              <p>US</p>
            </div>
            <div className="color-box">
              <div className="color4"></div>
              <p>Rest of the world</p>
            </div>
            <div className="color-box">
              <div className="color5"></div>
              <p>NZE</p>
            </div>
          </div>
        </div>

        <div className="statisticContainer">
          <div>
            <h2>Policy</h2>
            <p>
              More ambitious policy making sets the course for zero-emission
              driving
              <br />
              Newly adopted and proposed GHG standards and zero-emission vehicle
              (ZEV) mandates will ensure increased adoption of EVs in the
              future. Recent examples include:
              <ul>
                <li>
                  <strong>California</strong>, historically a leader in ZEV
                  policy, in 2022 and 2023 adopted new ZEV mandates for cars and
                  trucks that set a minimum ZEV sale shares for passenger
                  light-duty vehicles (LDVs) ranging from 35% in 2026 to 100% in
                  2035, and sets milestones for the sale of zero-emission
                  heavy-duty vehicles (HDVs) that reach 100% between 2035 and
                  2042, depending on the vehicle segment.
                </li>
                <li>
                  <strong>European Union</strong> CO2 standards for cars and
                  vans, adopted in March 2023, require a 55% and 50% reduction
                  in emissions of new cars and vans, respectively, by 2030
                  (compared to 2021), and 100% for both by 2035. In February
                  2023, the European Commission released proposed revisions of
                  the regulation on HDV emissions that would increase targets
                  for CO2 emissions reductions to 45% by 2030 relative to 2019,
                  65% by 2035, and 90% by 2040.
                </li>
                <li>
                  The <strong>United States</strong> Environmental Protection
                  Agency proposed in April 2023 new GHG emissions standards for
                  light- and medium-duty vehicles, which would reduce model year
                  2032 fleet emissions by 56% and 44% relative to the current
                  model year 2026 standards.
                </li>
              </ul>
              <br />
              <strong>
                Policy increasingly aims to boost manufacturing, not just
                deployment
              </strong>
              <br />
              Governments are increasingly announcing policies to support EV
              supply chains, including vehicle and battery manufacturing as well
              as critical mineral supply chains. Such policies include:
              <ul>
                <li>
                  The <strong>Indian</strong> Production Linked Incentive Scheme
                  on Advanced Chemistry Cell Battery Storage was announced in
                  late 2021 with the aim of reaching a cumulative 50 GWh in
                  domestic manufacturing. A similar scheme on Automobile and
                  Auto Components has the goal of encouraging industry
                  investment in domestic vehicle and vehicle component
                  manufacturing.
                </li>
                <li>
                  The <strong>United States</strong> Inflation Reduction Act
                  (IRA), passed in August 2022, introduced conditions for the
                  consumer Clean Vehicle Tax Credit, including that vehicle
                  final assembly must occur in North America. Meeting these
                  conditions opens eligibility for an incentive of up to USD
                  7,500 per vehicle: USD 3,750 if the battery meets the critical
                  mineral requirement, and another USD 3,750 if it meets the
                  component requirement.
                </li>
                <li>
                  The <strong>European Union</strong> proposed the Net Zero
                  Industry Act in March 2023, which aims for nearly 90% of the
                  European Union's annual battery demand to be met by domestic
                  manufacturers, with a combined manufacturing capacity of at
                  least 550 GWh in 2030, in line with the objectives of the
                  European Battery Alliance.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Statistics;
