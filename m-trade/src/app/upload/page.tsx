import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center m-5 p-0 bg-white">
      <div className="bg-slate-100 w-full h-full">
        <form className="p-10 border-t-2 w-full h-full">
          <h1 className="text-2xl w-full  border-2 p-3 mb-5">
            Upload your data
          </h1>
          <label className="text-2xl">Your URL:</label>
          <input className="w-full  border-2 p-3 mb-5" />
          <label className="text-2xl">Description</label>
          <input className="w-full  border-2 p-3 mb-5" />
          <label className="text-2xl">Your URL:</label>
          <input className="w-full  border-2 p-3 mb-5" />
          <div className="w-full flex justify-around">
            <input
              className="w-full bg-green-500"
              type="submit"
              value="Get Data"
            />
            <input className="w-full bg-red-500" type="submit" value="Clear" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
