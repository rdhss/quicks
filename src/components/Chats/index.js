import React from "react";
import './style.css'
import chatIcon from "../../assets/icons/groupChat.svg";
import { allChat } from "../allChats";

const Chats = ({ setFastVisa, dataChat, setChatClick, setCurrentChat }) => {
  
    const handleClick = (e) => {
        setChatClick(true)
        setCurrentChat(allChat?.filter((item)=> item.id === dataChat.id ))
        if(dataChat.id === 999){
          setFastVisa(true)
        }
      };

      
  return (
    <div
      id={dataChat.id}
      onClick={handleClick}
      className="py-6 cursor-pointer border-b-[1.5px] border-lightBrown flex gap-3"
    >
      <img src={chatIcon} alt="" />
      <div>
        <div className="flex gap-4">
          <p className=" text-skyblue font-semibold">{dataChat.name}</p>
          <p className="text-sm w-[140px]">January 1,2021 19:10</p>
        </div>
        <div className="text-sm text-primary">
          {dataChat.id !== 999 &&  <p className="font-bold">{dataChat?.chats.slice(-1)[0].name} :</p>}
          <p className="text-wraper">{dataChat?.chats.slice(-1)[0].text}</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
