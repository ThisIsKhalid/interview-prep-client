import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  //   console.log(location);

  let currentLink = "";

  const crumbs = location.pathname.split("/").filter((cmb) => cmb !== "");
  console.log(crumbs);

  return (
    <div className="breadcrumbs text-xl font-medium capitalize text-[#FFCD70]">
      <Link to="/">
        <h3>Home {">"}</h3>
      </Link>
      {crumbs.map((crumb) => {
        currentLink = currentLink + `/${crumb}`;
        //   console.log(crumb);
        //   console.log(currentLink);

        return (
          <div className="crumb">
            <Link to={currentLink}>{crumb}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
