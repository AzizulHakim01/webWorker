import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {navBar} from "../../data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faGear} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false)
    return(
      <>
      <div className="px-3 py-1 md:hidden"><FontAwesomeIcon icon={faBars} className="text-xl cursor-pointer" onClick={()=>setOpen(!open)}/></div>
        <div className={`px-3 bg-[#ffc21d] ${open?"flex":"hidden"} md:flex md:w-[100%] items-center justify-between`}>
          <div className="flex gap-0 flex-col md:flex-row">
            {navBar.map((data) => {
              const isActive = location.pathname === data.link;
              return (
                <Link
                  to={data.link}
                  className={`hover:underline px-3 py-1 font-bold ${
                    isActive &&
                    "shadow-inner shadow-[#252525] opacity-100 bg-[#ffdc7a]"
                  }`}
                  key={data.id}
                >
                  {data.title}
                </Link>
              );
            })}
          </div>
    
          <div className="flex md:flex-row flex-col items-center gap-3">
            <div className="">
              TIme Zone: <span className="font-bold">GMT +5:30</span>
            </div>
            <div className="flex gap-1 items-center">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">One Click Bet</label>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faGear }/>
              <b className="hover:underline cursor-pointer ">Settings</b>
            </div>
          </div>
        </div>
      </>
    );
};

export default NavBar;
