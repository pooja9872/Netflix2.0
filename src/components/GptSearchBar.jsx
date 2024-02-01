import React from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const getLanguages = useSelector((store) => store.config.lang);

  return (
    <div className="w-1/2 pt-[10%] m-auto">
      <form action="" className=" bg-black grid grid-cols-12">
        <input
          type="text"
          className="col-span-9 p-4 m-4 outline-none rounded-lg"
          placeholder={lang[getLanguages].gptSearchPlaceHolder}
        />
        <button className="col-span-3 py-4 px-2 my-4 me-4 bg-red-800 text-white rounded-lg">
          {lang[getLanguages].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
