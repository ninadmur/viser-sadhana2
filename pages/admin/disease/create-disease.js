import React, { Component, useState } from "react";
import Modul from "../../../components/admin/modals/modul";
const CreateDisease = () => {
  const [data, setData] = useState();

  const info = [
    {
      name: "Somssesh",
      ByUser: "abc",
      AddedAt: 12,
      options: 123,
    },
  ];

  return (
    <div>
      <Modul />
      <div className="flex justify-end space-x-6 m-4 text-sm">
        <button className="border-2 px-5 py-2 bg-[#8FECFF] font-bold">
          Add Disease
        </button>
        <button
          className="border-2 px-5 py-2 bg-[#8FECFF] font-bold"
          onClick={() => setData()}
        >
          Add Symptons
        </button>
        <p>{data}</p>
      </div>
      <div>
        <div className="ml-9 ">
          <button className="border-2 px-5 py-2 font-bold bg-[#FFD753] hover:bg-[#FFF4CD]">
            Disease
          </button>
          <button className="border-2 px-5 py-2 font-bold bg-[#FFD753] hover:bg-[#FFF4CD]  ">
            Symptons
          </button>
        </div>
        <div className="border-b-2 space-y-1"></div>
        <div className="border-b-2 mt-[1px] space-y-1"></div>
      </div>
      <div>
        <ul className="flex space-x-36 justify-start pl-16 text-lg cursor-pointer p-4">
          <li>Name</li>
          <li>By User</li>
          <li>Added At</li>
          <li>Options</li>
        </ul>
      </div>
      <div className="border-b-2 space-y-1"></div>
      {info.map((x) => {
        return x.name;
      })}
    </div>
  );
};

export default CreateDisease;
