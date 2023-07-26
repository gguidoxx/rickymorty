import { Link } from "react-router-dom";
import { MainPage } from "./components/mainPage";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { LandinPage } from "./components/LandinPage";

function App() {
  return (
    <>
      <div className={" bg-gray-950 min-h-screen dark:text-white"}>
        <Routes>
          <Route path={"/characters"} element={<MainPage />} />
          <Route path="/" element={<LandinPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
