import { Send } from "@mui/icons-material";
import React from "react";

function Newsletter() {
  return (
    <div className="flex items-center justify-center flex-col h-[350px] w-[100%]  bg-[#c4a4f9]">
      <h1 className="text-[50px] font-bold">NEWSLETTER</h1>
      <h2 className="text-[20px] mt-2 mobile:text-center mobile:p-3">
        Always in touch with us, for your favourite Products.
      </h2>
      <div className="flex mt-[3rem] item-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden mobile:min-w-[20rem]">
        <input
          className="border-none pl-[20px] flex-[8]"
          type="email"
          placeholder="email"
        />
        <button className="bg-[#4caf50] flex-1">
          <Send className="text-white h-[100%]" />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
