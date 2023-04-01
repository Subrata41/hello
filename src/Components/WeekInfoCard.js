import React, { useState, useEffect } from "react";
import { UseWeatherAppContext } from "../Context/Context";

import SingleCardComponents from "./SingleCard";
const WeekInfoCard = () => {
  let {
    state: { daily },
    dispatch,
  } = UseWeatherAppContext();
  const [selectedCard, setSelectedCard] = useState(0);
  //console.log('daily', daily, 'current',current, UseWeatherAppContext());
  const updateCurrent = () => {
    return dispatch({
      type: "SET_CURRENT",
      payload: daily[selectedCard],
    });
  };
  useEffect(() => {
    updateCurrent();

  }, [daily, selectedCard]);
  return (
    <>
      <div className="cardWrap">
        <ul className="cardList">
          {daily && daily.length > 0
            ? daily.map((item, index) => {
                if (index < 7) {
                  return (
                    <SingleCardComponents
                      className={index === selectedCard ? "active" : ""}
                      onClick={() => {
                        setSelectedCard(index);
                        updateCurrent();
                      }}
                      item={item}
                      key={index}
                    />
                  );
                }
                return "";
              })
            : ""}
        </ul>
      </div>
    </>
  );
};

export default WeekInfoCard;
