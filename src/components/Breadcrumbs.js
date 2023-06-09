// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Breadcrumbs = () => {
//   const location = useLocation();
//   //   console.log(location);

//   let currentLink = "";

//   const crumbs = location.pathname.split("/").filter((cmb) => cmb !== "");
//   // console.log(crumbs);

//   return (
//     <div className="breadcrumbs text-xl font-medium capitalize text-[#FFCD70]">
//       <Link to="/">
//         <h3>Home {">"}</h3>
//       </Link>
//       {crumbs.map((crumb) => {
//         currentLink = currentLink + `/${crumb}`;
//         //   console.log(crumb);
//         //   console.log(currentLink);

//         return (
//           <div className="crumb">
//             <Link to={currentLink}>{crumb}</Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Breadcrumbs;


import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ lastCrumb }) => {
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");

  return (
    <nav aria-label="Breadcrumb" className="text-gray-500 text-sm">
      <ol className="flex">
        <li className="text-[#ffbb3c]">
          <Link to="/">Home</Link>
        </li>
        {crumbs.map((crumb, index) => {
          const currentPath = crumbs.slice(0, index + 1).join("/");
          const isLastCrumb = index === crumbs.length - 1;

          const breadcrumbName = isLastCrumb ? lastCrumb : crumb;

          return (
            <li key={crumb} className="text-[#ffbb3c]">
              <span className="mx-2">&gt;</span>
              {isLastCrumb ? (
                <span className="font-medium" title={breadcrumbName}>
                  {breadcrumbName}
                </span>
              ) : (
                <Link to={`/${currentPath}`} title={breadcrumbName}>
                  {breadcrumbName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
