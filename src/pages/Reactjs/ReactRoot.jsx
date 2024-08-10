import React from "react";
import { Link, Outlet } from "react-router-dom";

const ReactRoot = () => {
  return (
    <div>
      <div>
        <Link to="myprops" className=" hover:underline">
          My Props
        </Link>
      </div>
      <div>
        <Link to="myfilter" className=" hover:underline">
          My Filter
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default ReactRoot;
