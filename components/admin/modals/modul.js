import React from 'react';

const modul = () => {
  return (
    <>
      <div className="absolute w-1/2 h-1/2 border-4 top-48 left-[25%] bg-white">
        <div className="flex justify-center font-bold text-3xl p-6">
          <div>Add Symptons</div>
        </div>
        <div className="mx-12 space-y-3">
          <h3>Name :</h3>
          <input
            className="border-2 w-full mx-0"
            type="text"
            placeholder="Enter...."
          />
        </div>
        <div className="flex justify-end">
          <button className="rounded-none border-2 p-1 px-6 m-5 mx-12 bg-[#8FECFF] font-bold">
            Update
          </button>
        </div>
        <div className="flex h-64 justify-end items-end">
          <button className="rounded-none border-2 border-red-700 px-6 m-5 mx-12 text-red-800 font-bold">
            DELETE
          </button>
        </div>
      </div>
    </>
  );
};

export default modul;
