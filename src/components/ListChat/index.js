import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Chats from "../Chats";
import { allChat } from "../allChats"

const ListChat = ({click, setChatClick, setCurrentChat, setFastVisa}) => {
  const [loading, setLoading] = useState(true)
  
  useEffect(()=> {   
    setTimeout(() => {
      setLoading(false)
      setFastVisa(false)
    }, 500); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="overflow-hidden animate-slide-right">
      <header>
        <div className="h-10 w-full relative">
          <input
            type="text"
            placeholder="Seacrh"
            className="w-full bg-white pl-9 py-1 border-lightBrown rounded-lg border-[1.5px]  outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            size="sm"
            className="text-lightBrown absolute right-9  top-[0.7rem]"
          />
        </div>
      </header>
      {
        loading ?
        <div className="flex justify-center items-center h-[380px]">
          <div className="flex flex-col justify-center">
          <div className="loader ml-3"></div>
          <p className="mt-6 mr-">Loading Chats ...</p>
          </div>
        </div>
        :
      <main className=" h-[380px] overflow-scroll overflow-x-hidden test">
        {allChat.map((item) => 
            <Chats setFastVisa={setFastVisa} setChatClick={setChatClick} setCurrentChat={setCurrentChat} onClick={click} dataChat={item}/>
        )}
      </main>
      }
    </div>
  );
};

export default ListChat;
