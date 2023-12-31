import React from "react";
import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, photo, name, prompt }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardcover card">
      <img
        src={photo}
        alt={prompt}
        className="w-full h-auto object-cover rounded-xl"
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-md overflow-y-auto prompt">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full obejct-cover bg-green-700  flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button type="button" onClick={()=>downloadImage(_id,photo)} className="outline-none bg-transparent border-none">
            <img src={download} className="h-7 w-7 rounded-full object-contain invert"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
