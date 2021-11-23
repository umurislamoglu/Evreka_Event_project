import React, { useState } from "react";
import EventItem from "./EventItem";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const EventList = () => {
  const { evrekaData } = useContext(DataContext);
  const [current, setCurrent] = useState(0);

  return (
    <div>
      {evrekaData.map((data, idx) => {
        return (
          <EventItem
            idx={idx}
            setCurrent={setCurrent}
            current={current}
            data={data}
            key={idx}
            unchecked={data.details[4].value==="-"?true:false}
          />
        );
      })}
    </div>
  );
};

export default EventList;
