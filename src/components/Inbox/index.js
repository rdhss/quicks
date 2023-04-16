import React, {  useState } from "react";
import "./style.css";
import ListChat from "../ListChat";
import ChatValue from "../ChatValue";

const Inbox = () => {
  const [chatClick, setChatClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [dataChat, setDataChat] = useState([])
  const [currentChat, setCurrentChat] = useState([])
  const [fastVisa, setFastVisa] = useState(false)


  return (
    <div className="">
      {chatClick ? <ChatValue fastVisa={fastVisa} setChatClick={setChatClick} currentChat={currentChat}/> : <div className="px-[20px] py-[20px]"><ListChat setFastVisa={setFastVisa} dataChat={setDataChat} setChatClick={setChatClick}  setCurrentChat={setCurrentChat}/></div>}
    </div>
  );
};

export default Inbox;
