import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import TaskDetail from "../TaskDetail";
import { allTask } from "../allTask";

const Task = () => {
  const [mytask, setMytask] = useState(false);
  const [listTask, setListTask] = useState(allTask);
  const [loading, setLoading] = useState(true);

  const lastTask = useRef()

  const handleNewTask = () => {
    setListTask([
      ...listTask,
      {
        id: Math.random(),
        done: false,
        title: "",
        date: "",
        desc: "",
        sticker: [],
      },
    ]);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  useEffect(()=> {
    // setTimeout(() => {
        lastTask.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
          });
    //   }, 100);
  },[listTask.length])

  return (
    <div>
      <header className="h-14 w-full relative flex justify-between px-5">
        <div className="">
          <button
            onClick={() => setMytask(!mytask)}
            className="bg-white p-2 rounded-md border-lightBrown border-[1px] ml-20 mt-3"
          >
            My Task <FontAwesomeIcon icon={faChevronDown} />
          </button>
          {mytask && (
            <div className="bg-white z-30 absolute left-12 mt-2 border-lightBrown border-[1px] rounded-md font-semibold">
              <p
                onClick={() => setMytask(!mytask)}
                className="p-2 cursor-pointer border-lightBrown border-b-[1px] pr-20"
              >
                Personal Errands
              </p>
              <p onClick={() => setMytask(!mytask)} className="p-2 cursor-pointer">
                Urgent To-Do
              </p>
            </div>
          )}
        </div>
        <button
          onClick={handleNewTask}
          className="bg-skyblue text-white px-5 rounded-md my-1 mt-3"
        >
          New Task
        </button>
      </header>
      {loading ? (
        <div className="flex justify-center items-center h-[380px]">
          <div className="flex flex-col justify-center">
            <div className="loader ml-3"></div>
            <p className="mt-6 mr-2">Loading Task List ...</p>
          </div>
        </div>
      ) : (
        <main className="px-5 h-[380px] overflow-scroll overflow-x-hidden animate-slide-top">
          {listTask.map((item) => (
            <TaskDetail
              dataTask={item}
              setListTask={setListTask}
              listTask={listTask}
            />
          ))}
          <h1 ref={lastTask}> </h1>
        </main>
      )}
    </div>
  );
};

export default Task;
