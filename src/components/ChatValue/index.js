import {
  faArrowLeft,
  faClose,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { dummyvalue } from "../allChats";

const ChatValue = ({ fastVisa, setChatClick }) => {
  const [dummyValues, setDummyValues] = useState(dummyvalue);
  const [idClick, setIdClick] = useState();
  const [values, setValues] = useState("");
  const [replyText, setReplyText] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [editActive, setEditActive] = useState(false);
  const [messageNew, setMessageNew] = useState(true);

  const lastChat = useRef();

  const handleEdit = (e) => {
    // eslint-disable-next-line eqeqeq
    if (idClick === e.target.id) {
      setIdClick("");
    } else {
      setIdClick(e.target.id);
    }
  };

  const test = (e) => {
    if (e.currentTarget.scrollTop < 308) {
      setMessageNew(true);
    } else {
      setMessageNew(false);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (values === "") {
      setValues("");
    } else if(replyText !== ""){
      setDummyValues([
        ...dummyValues,
        {
          id: Math.random(),
          reply : replyText,
          name: "You",
          text: values,
          colorCont: "#EEDCFF",
          color: "#9B51E0",
        },
      ]);
      setValues("");
      setReplyText("");
    } else {
      setDummyValues([
        ...dummyValues,
        {
          id: Math.random(),
          name: "You",
          text: values,
          colorCont: "#EEDCFF",
          color: "#9B51E0",
        },
      ]);
      setValues("");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      lastChat.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }, 10);
  }, [dummyValues]);

  return (
    <div className="animate-slide-left relative">
      <header className="flex items-center gap-7 px-[17px] py-[10px] top-0 border-b-[1px] border-black z-50">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => {
            setChatClick(false);
          }}
          className="font-extralight mt-1 cursor-pointer"
          size="xs"
        />
        <div>
          <p className="text-skyblue text-sm">
            I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
          </p>
          <p className="text-xs">3 Participant</p>
        </div>
        <FontAwesomeIcon
          icon={faClose}
          onClick={() => {
            setChatClick(false);
          }}
          className="ml-20 mt-1 cursor-pointer"
        />
      </header>
      <main
        onScroll={test}
        className="overflow-scroll h-[320px] overflow-x-hidden px-3 relative"
      >
        {fastVisa ? (
          <div className={`flex flex-col py-3`}>
            <p className={`text-xs font-bold text-skyblue`}>FastVisa Support</p>
            <div className={`flex gap-3 `}>
              <div
                id="12"
                className={`w-80 text-xs p-2 rounded-md bg-[#F8F8F8]`}
              >
                <p>
                  Hey there. Welcome to your inbox! Contact us for more
                  information and help about anything! We’ll send you a response
                  as soon as possible.
                </p>
                <p className="mt-2">19:32</p>
              </div>
              <div className="relative">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faEllipsis}
                  onClick={handleEdit}
                />
                {editActive ? (
                  <div className="rounded-md border-2 w-20 absolute bg-white">
                    <p className="border-b-2 pl-3 pt-1 text-skyblue">Edit</p>
                    <p className="pl-3 pb-1 text-red-600">Delete</p>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="absolute bottom-0 w-full bg-[#E9F3FF] text-sm py-3 px-5 left-0 flex">
              <div className="loader-blue scale-50"></div>
              <p className="ml-3">
                Please wait while we connect you with one of our team ...
              </p>
            </div>
          </div>
        ) : (
          <>
            {dummyValues.map((item, key) => (
              <div
                className={`${
                  item.name === "You" && "items-end"
                } flex flex-col py-3`}
              >
                {key === 0 || key === 2 || item.id === 3 ? (
                  <div className="flex w-full relative items-center justify-between">
                    <div
                      className={`border-b-2 ${
                        item.id === 3 ? "border-red-600" : "border-primary"
                      } w-full`}
                    ></div>
                    <p
                      id="new message"
                      className={`w-96 text-sm text-center ${
                        item.id === 3 && "text-red-600"
                      }`}
                    >
                      {item.id === 3 ? "Mew Message" : "Today June 09, 2021"}
                    </p>
                    <div
                      className={`border-b-2 w-full ${
                        item.id === 3 ? "border-red-600" : "border-primary"
                      } `}
                    ></div>
                  </div>
                ) : null}
                <p
                  className={`text-xs font-bold`}
                  style={{ color: item.color }}
                >
                  {item.name}
                </p>
                {item.reply  ?
                  <div className="w-80 text-xs p-2 rounded-md bg-[#F2F2F2] mb-1">{item.reply}</div>
                      :
                    null
                }
                <div
                  className={`flex gap-3 ${
                    item.name === "You" && "flex-row-reverse"
                  }`}
                >
                  <div
                    id={item.id}
                    style={{ backgroundColor: item.colorCont }}
                    className={`w-80 text-xs p-2 rounded-md`}
                  >
                    <p>{item.text}</p>
                    <p className="mt-2">19:32</p>
                  </div>
                  <div className="relative">
                    <FontAwesomeIcon
                      id={item.id}
                      className="cursor-pointer"
                      icon={faEllipsis}
                      onClick={handleEdit}
                    />
                    {item.id === Number(idClick) && item.name === "You" ? (
                      <div className="rounded-md border-2 w-20 absolute bg-white">
                        <p className="border-b-2 pl-3 pt-1 text-skyblue">
                          Edit
                        </p>
                        <p className="pl-3 pb-1 text-red-600">Delete</p>
                      </div>
                    ) : null}
                    {item.id === Number(idClick) && item.name !== "You" ? (
                      <div className="rounded-md border-2 w-20 absolute bg-white">
                        <p className="border-b-2 pl-3 pt-1 text-skyblue cursor-pointer">
                          Share
                        </p>
                        <p
                          className="pl-3 pb-1 text-skyblue cursor-pointer"
                          onClick={() => {setReplyText(item.text); setIdClick(0)}}
                        >
                          Reply
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {messageNew && fastVisa === false && (
          <a
            href="#newText"
            className="fixed bottom-14 rounded-md left-[41%] bg-[#E9F3FF] text-skyblue p-2"
          >
            New Message
          </a>
        )}
        <h1 id="newText" ref={lastChat}>
          {" "}
        </h1>
      </main>
      <form className="mt-2 px-3 flex gap-3 relative" onSubmit={handleSend}>
        {replyText !== "" && (
          <div className="text-wraper2 absolute top-[-5rem] px-2 pt-1 rounded-md text-xs pb-3 bg-[#F2F2F2] border-lightBrown border-[1px]">
            <FontAwesomeIcon className="absolute right-4 cursor-pointer" onClick={()=> setReplyText('')} icon={faClose}/>
            <p className="font-semibold mb-[1px]">Replying to Mary Hilda</p>
            <p className="">{replyText}</p>
          </div>
        )}
        <input
          type="text"
          value={values}
          onChange={(e) => setValues(e.target.value)}
          placeholder="Type a new message"
          className="z-30 w-full border-[1.5px] border-lightBrown rounded-md outline-none px-5 py-[5px]"
        />
        <button className="w-32 bg-skyblue rounded-md text-white">Send</button>
      </form>
    </div>
  );
};

export default ChatValue;
