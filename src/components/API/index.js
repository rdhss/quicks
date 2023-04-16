import React, { useEffect, useState } from "react";
import api from "../../assets/icons/api.svg";
import axios from "axios";

const Api = () => {
  const [listUser, setListUser] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
    }).then(function (response) {
      setListUser(response.data);
    //   console.log(listUser);
    });
  });

  return (
    <div className="p-3 overflow-scroll h-[400px]">
      {listUser?.map((item) => (
        <div className="py-6 cursor-pointer border-b-[1.5px] border-lightBrown flex gap-3 px-5">
          <img src={api} alt="" width={30} />
          <div>
            <div className="flex gap-4">
              <p className=" text-skyblue font-semibold">{item.name}</p>
              <p className="text-sm w-[140px]">{item.website}</p>
            </div>
            <div className="text-sm text-primary">
              <p className="font-bold">Company : {item.company.name}</p>
              <p className="text-wraper">{item.address.zipcode}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Api;
