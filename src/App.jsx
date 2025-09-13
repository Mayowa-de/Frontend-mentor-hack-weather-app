import { useState } from "react";
import "./index.css";
import Header from "./Hero/Header.jsx";
import Title from "./Hero/title";
import TodayCloud from "./Hero/todayCloud";
import SubCloud from "./Hero/SubCloud.jsx";
import HourCast from "./Hero/HourCast.jsx";
import DailyForeCast from "./Hero/DailyForeCast.jsx";

function App() {
  const [unit, setUnit] = useState('Celsius (C)');
const [selected, setSelected] = useState({
  temperature: 'Celsius (C)',
  wind: 'Km/h',
  precipitation: 'Millimeters (mm)'
});

// Pass as props

  return (
    <>
      <div className=" items-center flex mb-10 flex-col pb-10 px-24 ">
        <Header unit={unit} setUnit={setUnit} selected={selected} setSelected={setSelected} />
        <Title />
        <div className="flex gap-7">
          <div className="flex flex-col ">
            <TodayCloud />
            <SubCloud />
            <DailyForeCast/>
          </div>
          <HourCast />
        </div>
      </div>
    </>
  );
}

export default App;
