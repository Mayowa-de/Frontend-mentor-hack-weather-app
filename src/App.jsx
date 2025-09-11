import "./index.css";
import Header from "./Hero/Header.jsx";
import Title from "./Hero/title";
import TodayCloud from "./Hero/todayCloud";
import SubCloud from "./Hero/SubCloud.jsx";
import HourCast from "./Hero/HourCast.jsx";
import DailyForeCast from "./Hero/DailyForeCast.jsx";

function App() {
  return (
    <>
      <div className=" items-center flex mb-10 flex-col pb-10 px-24 ">
        <Header />
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
