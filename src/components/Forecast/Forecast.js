import React from "react";
import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import dropdown from '../../images/dropdown.png'

const DAY_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];


const Forecast = (props) => {
  const { data } = props;

  const daysWeek = new Date().getDay();
  const forecastdays = DAY_WEEK.slice(daysWeek, DAY_WEEK.length).concat(
    DAY_WEEK.slice(0, daysWeek)
  );
  return (
    <>
      <h3 className="title">Daily</h3>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, id) => (
          <AccordionItem key={id}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-section">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="item"
                    className="small-icon"
                  />
                  <p className="days">{forecastdays[id]}</p>
                  <p className="desc">{item.weather[0].description}</p>
                  <p className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </p>
                 <img src={dropdown} alt="dropdown"/>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="detail-grid">
                    <div className="grid-item">
                        <label>Pressure</label>
                        <label>{item.main.pressure}hPa</label>


                    </div>
                    <div className="grid-item">
                        <label>Humidity</label>
                        <label>{item.main.humidity}%</label>


                    </div>
                    <div className="grid-item">
                        <label>Clouds</label>
                        <label>{item.clouds.all}%</label>


                    </div>
                    <div className="grid-item">
                        <label>Wind Speed</label>
                        <label>{item.wind.speed}m/s</label>


                    </div>
                    <div className="grid-item">
                        <label>Sea Level</label>
                        <label>{item.main.sea_level}m</label>


                    </div>
                    <div className="grid-item">
                        <label>Feels like</label>
                        <label>{item.main.feels_like}m/s</label>


                    </div>
                    <div className="grid-item">
                        <label>Wind Speed</label>
                        <label>{Math.round(item.main.speed)}°C</label>


                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
