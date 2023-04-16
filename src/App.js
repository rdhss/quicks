import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navIcon from "./assets/icons/navIcon.png";
import task from "./assets/icons/task.png";
import inbox from "./assets/icons/inbox.png";
import inboxActive from "./assets/icons/inboxActived.png";
import taskActive from "./assets/icons/taskActived.png";
import api from "./assets/icons/api.svg";
import { useEffect, useState } from "react";
import Inbox from "./components/Inbox";
import Modal from "./components/Modal";
import Task from "./components/Task";
import simple from "./assets/icons/simpleQuick.svg";
import Api from "./components/API";

function App() {
  const [spread, setSpread] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("");
  const [splash, setSplash] = useState(false);
  // const current
  const getCurrentMenu = (menu) => {
    switch (menu) {
      case "inbox":
        return <Inbox />;
      case "task":
        return <Task />;
      case "api":
        return <Api />;
      default:
        return <p>error</p>;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSplash(true);
    }, 1800);
  }, []);

  return (
    <div className="bg-screen w-screen h-screen flex overflow-hidden">
      <div
        className={`h-screen w-screen animate-fading  bg-[#0F8A69] overflow-hidden absolute z-50 ${
          splash && "hidden"
        }`}
      >
        <img className="animate-slide-top" src={simple} alt="" />
      </div>
      <nav className="w-56 border-r-[1px] border-white"></nav>
      <main className="w-full relative">
        <div className="h-10 w-full relative">
          <input
            type="text"
            className="h-full w-full bg-primary text-white pl-12 outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="text-white absolute left-4 top-[0.7rem]"
          />
        </div>
        <nav className="absolute flex gap-1 right-8 bottom-4">
          {spread &&
          <div className="relative">
            <p
              className={`absolute text-white top-[-1.3rem] text-xs left-[0.68rem] ${
                menuActive && "hidden"
              }`}
            >
              API
            </p>
            <img
              onClick={() => {
                setMenuActive(true);
                setCurrentMenu("api");
              }}
              src={api}
              width={41}
              alt=""
              className="cursor-pointer mr-2"
            />
          </div>
          
          }
          <div
            className={`
            spread z-10 flex transition-all 
            ${spread === true ? "mr-0 opacity-100" : "mr-[-60px] opacity-0"}
            ${menuActive === true ? "z-40 mr-[-45px] gap-1" : ""}
            ${currentMenu === "task" ? "flex-row-reverse" : "flex-row"}
            `}
          >
            <div className="relative">
              <p
                className={`absolute text-white top-[-1.3rem] text-xs left-[0.68rem] ${
                  menuActive && "hidden"
                }`}
              >
                Task
              </p>
              <img
                onClick={() => {
                  setMenuActive(true);
                  setCurrentMenu("task");
                }}
                src={currentMenu === "task" ? taskActive : task}
                width={currentMenu === "inbox" ? 42 : 46}
                alt=""
                className="cursor-pointer"
              />
            </div>
            <div className="relative">
              <p
                className={`absolute text-white top-[-1.3rem] text-xs left-[0.48rem] ${
                  menuActive && "hidden"
                }`}
              >
                Inbox
              </p>
              <img
                onClick={() => {
                  setMenuActive(true);
                  setCurrentMenu("inbox");
                }}
                g
                src={currentMenu === "inbox" ? inboxActive : inbox}
                width={menuActive === true ? 42 : 46}
                alt=""
                className="cursor-pointer"
              />
            </div>
          </div>
          <img
            onClick={() => setSpread(!spread)}
            src={navIcon}
            width={46}
            alt=""
            className={`cursor-pointer z-30 ${menuActive && "opacity-60"}`}
          />
        </nav>
        {currentMenu !== "" ? (
          <Modal>{getCurrentMenu(currentMenu)}</Modal>
        ) : null}
      </main>
    </div>
  );
}

export default App;
