import {faArrowRightFromBracket, faSearch, faSortDown, faUserAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // const [captcha, setCaptcha] = useState(123456);


    const [user, setUser] = useState(true);


    // Captch genaration code
    const characters = '1234567890';
    function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const captcha = generateString(4)
    console.log(captcha)
    // captch code end

    return (
        <div className="w-[100%] flex md:h-[100px] h-[200px] justify-between bg-[#252525] md:py-2 px-2 md:px-4 items-center">
            <div className="flex flex-col md:flex-row items-center md:gap-16 gap-8">
                <img src="/images/logo.png" alt="Logo" className="w-[150px] h-[70px]"/>

                <div className="relative">
                    <FontAwesomeIcon icon={faSearch}
                        className="absolute top-1 left-2"/>
                    <input type="text" className="md:w-72 w-40 rounded-md px-8 outline-blue-500" placeholder="Search Events"/>
                </div>
            </div>
            {
            user ? (
                <div className="flex md:gap-6 gap-10 md:flex-row flex-col">
                    <p className="text-[#ffb81d] text-[13px] md:block flex flex-col bg-[#404040] hover:underline cursor-pointer border py-1 px-2 rounded-md shadow-md "
                        style={
                            {boxShadow: "inset 0 1px 1px #fff"}
                    }>
                        Main Balance
                        <span className="font-bold">PBU 0.36</span>
                        Exposure{" "}
                        <span>0.00</span>
                    </p>
                    <div className="flex items-center relative gap-2 text-[#ffb81d] text-[13px] bg-[#404040] hover:underline cursor-pointer border py-1 px-2 rounded-md shadow-md "
                        style={
                            {boxShadow: "inset 0px 1px 0.5px #fff, 0px 1px 3px #000"}
                    } onClick={()=>setOpenMenu(!openMenu)}>
                        <FontAwesomeIcon icon={faUserAlt}/>
                        <p>My Account</p>
                        <div className={`absolute top-8 right-0 bg-white rounded-md ${!openMenu && "hidden"}`}>
                            <div className="flex font-bold text-[#5a6060] w-60 border-b-2 justify-between px-2 py-1">
                                <p>Username</p>
                                <p>GMT+5:30</p>
                            </div>
                            <div className="flex flex-col text-[#5a6060] shadow-md">
                                <Link to={"/userprofile"} className="py-1 px-2 border-b-2 font-medium">My Profile</Link>
                                <Link className="py-1 px-2 border-b-2 font-medium">Balance Overview</Link>
                                <Link className="py-1 px-2 border-b-2 font-medium">Account Statement</Link>
                                <Link className="py-1 px-2 border-b-2 font-medium">My Bets</Link>
                                <Link className="py-1 px-2 border-b-2 font-medium">Bets History</Link>
                                <Link className="py-1 px-2 border-b-2 font-medium">Profits and Loss</Link>
                                <Link className="py-1 px-2 font-medium">Activity Log</Link>
                                <div className="px-2 py-2">
                                <button className="bg-[#5a6060] text-white w-[100%] py-1 font-bold rounded-md">LOGOUT &nbsp; <FontAwesomeIcon icon={faArrowRightFromBracket}/></button>
                                </div>
                            </div>

                        </div>
                        <FontAwesomeIcon icon={faSortDown}/>
                    </div>
                </div>
            ) : (
                <div className="flex md:flex-row flex-col gap-2 items-center">
                    <FontAwesomeIcon icon={faUserAlt}
                        className="text-[#ffb81d] hidden md:block"/>
                    <input type="text" placeholder="Username" className="rounded-sm px-2 w-[150px] outline-blue-500"/>
                    <input type="password" placeholder="Password" className="rounded-sm px-2 w-[150px] outline-blue-500"/>
                    <div className="relative">
                        <input type="text" placeholder="Validation" className="rounded-sm px-2 w-[150px] outline-blue-500"
                            maxLength={4}/>
                        <span className="absolute right-2 bottom-0 font-bold text-xl">
                            {captcha}</span>
                    </div>
                    <div className="bg-red-600 px-3 flex items-center rounded-md gap-2 w-[100%]">
                        <button className="text-white">Login</button>
                        <FontAwesomeIcon icon={faArrowRightFromBracket}
                            style={
                                {color: "#ffffff"}
                            }/>
                    </div>
                </div>
            )
        } </div>
    );
};

export default Header;
