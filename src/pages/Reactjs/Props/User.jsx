import React, { Children } from "react";

const User = ({ img, name, detail }) => {
  return (
    <article className=" w-96 flex flex-col items-center py-7 px-3 rounded-lg justify-center shadow-slate-600 shadow-lg bg-blue-300">
      <img className="w-60 h-60 rounded-full" src={img} alt="pic" />
      <h1 className="font-extrabold text-[2rem]">{name}</h1>
      <p className="font-medium text-[1.5rem]">{detail}</p>
    </article>
  );
};

export default User;
