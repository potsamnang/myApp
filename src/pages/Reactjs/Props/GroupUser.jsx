import User from "./User";
import React from "react";
import p1 from "./p1.jpg";
import p2 from "./p2.jpg";

const Name = [
  {
    img: "https://images.pexels.com/photos/10259873/pexels-photo-10259873.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Pot Samnang",
    detail: "Hello everyone",
  },
  {
    img: "https://images.pexels.com/photos/4161710/pexels-photo-4161710.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "GG",
    detail: "Hello everyone",
  },
  {
    img: "https://images.pexels.com/photos/27503497/pexels-photo-27503497/free-photo-of-zapatilla-negras.png?auto=compress&cs=tinysrgb&w=600",
    name: "YY",
    detail: "Hello everyone",
  },
];
const GroupUser = () => {
  return (
    <div className="w-screen flex flex-col gap-5   justify-center items-center">
      {Name.map((n) => (
        <User img={n.img} name={n.name} detail={n.detail} />
      ))}
      <div>
        <img src={p1} alt="p1" />
        <img src={p2} alt="p2" />
      </div>
    </div>
  );
};

export default GroupUser;
