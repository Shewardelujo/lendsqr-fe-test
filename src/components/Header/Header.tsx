import "./Header.scss"
import { Link } from "react-router-dom";
import Lendsqr from "../../../src/assets/images/lendsqr.svg"
import downArrow from "../../../src/assets/icons/down-arrow.png"
import user from "../../../src/assets/images/Adedeji.png"
import menuBurger from "../../../src/assets/images/menu-burger.png"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../Sidebar/sidebarSlice";

const Header: React.FunctionComponent = () => {

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(toggleSidebar());
  }

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };


  return (
    <div className="header d-flex align-items-center row g-3">
      <div className="col-7 d-md-flex align-items-md-center">

        <div className="col-md-5">
            <img src={Lendsqr} alt="brand-logo" className="brandImage"/>
      </div>
      <div className="col-md-7 search-input mt-3 mt-md-0">
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for anything" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button className="btn" type="button" id="button-addon2">
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        </div>
      </div>
      </div>
      <div className="col-5 d-flex align-items-center justify-content-end">
        
        <span>
          <Link to="/docs" className="col-12 docs-text">Docs</Link>
        </span>
        <i className="fa-regular fa-bell icon"></i>
        <div className=" d-flex align-items-center">
          <img src={user} alt="user-icon" className="userImage" />
          <div className="username">Adedeji</div>
        <div className="nav-item dropdown">
        <img
          src={downArrow}
          alt="down-icon"
          className="nav-link arrow px-0"
          id="navbarDropdownMenuLink-4"
          onClick={handleDropdownClick}
        />
        <div
          className={`dropdown-menu dropdown-menu-right dropdown-info text-center ${
            showDropdown ? "show" : ""
          }`}
          aria-labelledby="navbarDropdownMenuLink-4"
          style={{ position: "absolute", top: "35px", left: "-120px" }}
        >
          <Link
            to="/"
                className="dropdown-item waves-effect waves-light pointer px-0"
                style={{ width: "30px" }}
          >
            Log out
          </Link>
        </div>
      </div>
          <img
            className="menu"
            src={menuBurger}
            alt="menu-burger"
            onClick={handleClick}
          />
        </div>
        </div>
    </div>
  )
}

export default Header