// import React from "react";
// import logo from "../assets/logo.jpg";
// import { useState } from "react";

// const Navbar = () => {
//   const [isClick, setIsclick] = useState(false);

//   const toggle = () => {
//     setIsclick(!isClick);
//   };

//   return (
//     <div className=" sticky z-[1px] top-0 w-screen flex-wrap flex md:flex justify-between px-7 md:px-20 items-center border-b-[2px] ">
//       <div>
//         <img className="size-[60px]" src={logo} alt="logo" />
//       </div>
//       <div className="md:hidden cursor-pointer " onClick={toggle}>
//         <svg
//           class="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="M4 6h16M4 12h16m-7 6h7"
//           ></path>
//         </svg>
//       </div>

//       <ul className="md:flex hidden gap-6 items-center">
//         <li className=" hover:bg-gray-400 px-3 py-1 rounded-md">
//           <a href="#">Home</a>
//         </li>
//         <li className=" hover:bg-gray-400 px-3 py-1 rounded-md">
//           <a href="#">About</a>
//         </li>
//         <li className=" hover:bg-gray-400 px-3 py-1 rounded-md">
//           <a href="#">Contact</a>
//         </li>
//       </ul>
//       {isClick && (
//         <ul className="w-full md:hidden flex flex-col gap-3 mt-4 mb-10  duration-300 ">
//           <li className=" block hover:bg-gray-400 p-3">
//             <a href="#">Home</a>
//           </li>
//           <li className="block hover:bg-gray-400   p-3">
//             <a href="#">About</a>
//           </li>
//           <li className="block hover:bg-gray-400  p-3">
//             <a href="#">Contact</a>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import Logo from "../assets/logo.jpg";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isClick, setIsclick] = useState(false);
  const toggle = () => {
    setIsclick(!isClick);
  };

  return (
    <div>
      <nav className="flex w-screen justify-between items-center text-center px-7 md top-0 sticky z-20 bg-white border-b-2">
        <div className="size-20">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="hidden md:flex gap-7 text-lg font-medium">
          <li className="hover:bg-gray-300 px-5 py-2 rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-gray-300 px-5 py-2 rounded-md">
            <Link to="about">About</Link>
          </li>
          <li className="hover:bg-gray-300 px-5 py-2 rounded-md">
            <Link to="pricing">Pricing</Link>
          </li>
          <li className="hover:bg-gray-300 px-5 py-2 rounded-md">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <div className="md:hidden cursor-pointer" onClick={toggle}>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </nav>
      {isClick && (
        <ul className="md:hidden w-screen sticky top-0 flex flex-col gap-2 bg-gray-200 border-b-2 pb-4 text-lg font-medium">
          <li className="hover:bg-gray-300 px-7 py-2 rounded-md transition duration-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-gray-300 px-7 py-2 rounded-md transition duration-500 ">
            <Link to="about">About</Link>
          </li>
          <li className="hover:bg-gray-300 px-7 py-2 rounded-md transition duration-500">
            <Link to="pricing">Pricing</Link>
          </li>
          <li className="hover:bg-gray-300 px-7 py-2 rounded-md transition duration-500">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      )}
      <Outlet />
    </div>
  );
};

export default Navbar;
