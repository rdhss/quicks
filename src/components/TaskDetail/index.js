import {
  faSquare,
  faSquareCheck,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { faChevronUp, faEllipsis, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pen from "../../assets/icons/pen.svg";
import penmuted from "../../assets/icons/nodesc.svg";
import bookmark from "../../assets/icons/bookmark.svg";
import nobookmark from "../../assets/icons/nobooks.svg";
import React, { useEffect,useState } from "react";

const listSticker = [
  {id : 1, color : '#E5F1FF', text : 'Important ASAP'},
  {id : 2, color : '#FDCFA4', text : 'Offline Meeting'},
  {id : 3, color : '#F9E9C3', text : 'Virtual Meeting'},
  {id : 4, color : '#AFEBDB', text : 'ASAP'},
  {id : 5, color : '#CBF1C2', text : 'Client Related'},
  {id : 6, color : '#CFCEF9', text : 'Self Task'},
  {id : 7, color : '#F9E0FD', text : 'Appointments'},
  {id : 8, color : '#9DD0ED', text : 'Court Related'},
]

const TaskDetail = ({ dataTask, listTask, setListTask }) => {
    const [editDesc, setEditDesc] = useState(false)
    const [editValue, setEditValue] = useState(dataTask.desc)
    const [deleteTask, setDeleteTask] = useState(false)
    const [extend, setExtend] = useState(true)
    const [stickerList, setStickerList] = useState(false)
// eslint-disable-next-line no-mixed-operators
const descRef = React.useRef();
const dateRef = React.useRef();
  const handleDone = () => {
    if (dataTask.done === true) {
      setListTask(
        listTask.map((item) =>
          item.id === dataTask.id ? { ...item, done: false } : item
        )
      );
    } else {
        setListTask(
          listTask.map((item) =>
            item.id === dataTask.id ? { ...item, done: true } : item
          )
        )
    }
  };


  const isInclude = (id) => {
    const list = dataTask.sticker.map((item) => {
      return item.id
    })
    if(list.includes(id)){
      return true
    } else {
      return false
    }
  }


  const handleSticker = (e) => {

    // eslint-disable-next-line eqeqeq
    const test = listSticker.filter((item)=> item.id == e.target.id)
    if(isInclude(Number(e.target.id))){
      setListTask(
        listTask.map((item) =>
          item.id === dataTask.id ? { ...item, sticker: item.sticker.filter((item) => item.id !== Number(e.target.id)) } : item
        )
      )
    } else {
      setListTask(
        listTask.map((item) =>
          item.id === dataTask.id ? { ...item, sticker: [...item.sticker, test[0]] } : item
        )
      )

    }

  }


  const handleDate = (e) => {
    setListTask(
      listTask.map((item) =>
        item.id === dataTask.id ? { ...item, date: e.target.value } : item
      )
    );
  }

  const handleNewTitle = (e) => {
    if( e.key === 'Enter'){
      setListTask(
          listTask.map((item) =>
            item.id === dataTask.id ? { ...item, title: e.target.value } : item
          )
        )
      setEditDesc(false)

  }
  }

  const handleDelete = () => {
      setListTask(
        listTask.filter((item) => 
          item.id !== dataTask.id
        )
      )
      setDeleteTask(false)
  }

  const handleEdit =(e)=> {
    if( e.key === 'Enter'){
        setListTask(
            listTask.map((item) =>
              item.id === dataTask.id ? { ...item, desc: editValue } : item
            )
          )
        setEditDesc(false)

    }
}

  useEffect(() => {
    descRef.current?.focus();
  }, [editDesc])
  

  return (
    <div className="border-b-2 border-lightBrown py-5 " >
      <div className="flex items-center gap-2 justify-between">
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={dataTask.done ? faSquareCheck : faSquare}
          onClick={handleDone}
        />
        {dataTask.title === '' ?
        <input onKeyDown={handleNewTitle} type="text" className="text-sm w-[300px] outline-none border-lightBrown border-[1px] p-2 rounded-md"/>  
        :
        <p className={`font-semibold text-sm w-[300px] ${dataTask.done ? 'line-through text-lightBrown' : ''}`}>{dataTask.title}</p>
      }
        <p className="text-red-600 text-sm">2 Days Left</p>
        <p className="text-sm">{dataTask.date.split("-").reverse().join("/")}</p>
        <FontAwesomeIcon className="cursor-pointer" onClick={()=> setExtend(!extend)} icon={extend ? faChevronUp : faChevronDown} />
        <div className="relative cursor-pointer">
        <FontAwesomeIcon icon={faEllipsis} onClick={()=> setDeleteTask(!deleteTask)}/>
        {deleteTask  ?
         <p onClick={handleDelete} className="cursor-pointer absolute text-red-600 left-[-4rem] top-7 py-2 pl-2 pr-9 border-[1px] bg-white border-lightBrown rounded-md">Delete</p>
          :
          null
        }
        </div>
      </div>
      {extend && 
      <>
      <div className="mt-3 pl-8 flex items-center gap-4">
        <FontAwesomeIcon className="text-skyblue cursor-pointer" icon={faClock} onClick={()=> dateRef.current?.focus()}/>
        <input
          ref={dateRef}
          value={dataTask.date}
          type="date"
          onChange={handleDate}
          className="border-lightBrown border-[1px] p-2 rounded-md outline-none"
        />
      </div>
      <div className="mt-3 pl-8 flex items-center gap-4">
        <img src={dataTask.desc === "" ? penmuted : pen} alt="" className="self-start pt-1 cursor-pointer" onClick={()=> {setEditDesc(true) } }/>
        {editDesc ?
        <textarea value={editValue} className="outline-none border-lightBrown border-[1px] p-2 rounded-md" onChange={(e)=> setEditValue(e.target.value)} name="" id="" cols={50} rows={5} ref={descRef} onKeyDown={handleEdit}></textarea>
        :
        <p className="w-[400px]">
          {dataTask.desc === "" ? "No Description" : dataTask.desc}
        </p>
        }
      </div>
      <div className="mt-3 pl-8 flex items-center gap-4 relative">
        <img src={dataTask.sticker.length > 0 ? bookmark : nobookmark} alt="" className="self-start pt-1 cursor-pointer" onClick={()=> {setStickerList(!stickerList) } }/>
        <div className="w-[400px] gap-3">
          {dataTask.sticker?.map((item)=> 
            <p style={{backgroundColor : item.color}} className={'p-2 rounded-md text-sm inline-block mr-3 mb-2'}>{item.text}</p>
          )}
        </div>
        {stickerList &&
        <div className="z-30 scale-75 absolute bottom-[-20rem] px-2 py-1 w-64 bg-white rounded-md border-[1px] border-lightBrown">
              {listSticker.map((item) => 
              <p onClick={handleSticker} style={{backgroundColor : item.color, borderColor : isInclude(item.id) && 'blue' }} id={item.id} className="mb-3 font-semibold border-[2px] py-1 px-1 rounded-md cursor-pointer">{item.text}</p>
              )}
              
        </div>
        }
      </div>
      </>
      }

    </div>
  );
};

export default TaskDetail;
