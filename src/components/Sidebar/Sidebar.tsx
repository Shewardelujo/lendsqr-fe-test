import "./Sidebar.scss"
import Briefcase from "../../../src/assets/icons/briefcase.svg"
import Dropdown from "../../../src/assets/icons/down.svg"
import Home from "../../../src/assets/icons/home.svg"
import SignOut from "../../../src/assets/sidenavIcons/sign-out.svg"
import Menu from "../Menu/Menu"
import { businessesMenuData, customerMenuData, settingsMenuData } from "./menuData"
import {  useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useSelector } from "react-redux"



const Sidebar: React.FunctionComponent = () => {

  const isOpen = useSelector((state: any) => state.sidebar.isOpen);

  const navigate = useNavigate();
  const location = useLocation();

  const currentPathname = location.pathname;

  const [activeLink, setActiveLink] = useState(currentPathname);

  const handleMenuClick = (path: string) => {
    setActiveLink(path);
    navigate(path);
  };

  
  const handleLogout = () => {
    console.log('clicked', "clicked")
    navigate('/');
  };
  
  return (
    <>
      <div className="sidebar">
          <div className="sidebar-top-section"> 
          <div className="d-flex align-items-center sidebar-first-menu">
              <img src={Briefcase} alt="briefcase-icon" className="sidebar-icon" />
              <div className="sidebar-menu">Switch Organization</div>
              <img src={Dropdown} alt="dropdown-icon" className="sidebar-dropdown" />
        </div>
        <Menu icon={Home} title="Dashboard" isForActionMenu={false} hasClick={true} click={() => { navigate('/dashboard'); handleMenuClick('/dashboard') }} isActive={'/dashboard' === activeLink}/>
        
          </div>
          <div className="sidebar-bottom-section">
            <div>
          <div className="sidebar-bottom-sub-section-title">CUSTOMERS</div>
          {
            customerMenuData.map((customer) => (
              <Menu key={customer.id} icon={customer.icon} title={customer.title} isForActionMenu={false} hasClick={true} click={() => { navigate(customer.path); handleMenuClick(customer.path) }} isActive={customer.path === activeLink} /> 
            ))
            }
            </div>
            <div>
          <div className="sidebar-bottom-sub-section-title">BUSINESSES</div>
              {
              businessesMenuData.map((business) => (

                <Menu key={business.id} icon={business.icon} title={business.title} isForActionMenu={false}  hasClick={true} click={() => { navigate(business.path); handleMenuClick(business.path) }} isActive={business.path === activeLink}  />
              ))
              }
        </div>
        <div>
          <div className="sidebar-bottom-sub-section-title">SETTINGS</div>
          {
            settingsMenuData.map((setting) => (

              <Menu key={setting.id} icon={setting.icon} title={setting.title} isForActionMenu={false}  hasClick={true} click={() => { navigate(setting.path); handleMenuClick(setting.path) }} isActive={setting.path === activeLink}  />
            ))
            }
              </div>
          </div>
          
          <div className="sidebar-logout-section">
            <hr className="sidebar-hr"/>
            <div className="sidebar-logout-section-features">
            <div className="d-flex align-items-center sidebar-first-menu" onClick={handleLogout}>
              <img src={SignOut} alt="signOut-icon" className="sidebar-icon sidebar-logout-icon" />
              <div className="sidebar-menu">Logout</div>
          </div>
          <div className="app-version">
            v1.2.0
          </div>
            </div>
          </div>
    </div>

    {isOpen && <div className="sidebarMobile">
          <div className="sidebar-top-section"> 
          <div className="d-flex align-items-center sidebar-first-menu">
              <img src={Briefcase} alt="briefcase-icon" className="sidebar-icon" />
              <div className="sidebar-menu">Switch Organization</div>
              <img src={Dropdown} alt="dropdown-icon" className="sidebar-dropdown" />
        </div>
        <Menu icon={Home} title="Dashboard" isForActionMenu={false} hasClick={true} click={() => { navigate('/dashboard'); handleMenuClick('/dashboard') }} isActive={'/dashboard' === activeLink}/>
        
          </div>
          <div className="sidebar-bottom-section">
            <div>
          <div className="sidebar-bottom-sub-section-title">CUSTOMERS</div>
          {
            customerMenuData.map((customer) => (
              <Menu key={customer.id} icon={customer.icon} title={customer.title} isForActionMenu={false} hasClick={true} click={() => { navigate(customer.path); handleMenuClick(customer.path) }} isActive={customer.path === activeLink} /> 
            ))
            }
            </div>
            <div>
          <div className="sidebar-bottom-sub-section-title">BUSINESSES</div>
              {
              businessesMenuData.map((business) => (

                <Menu key={business.id} icon={business.icon} title={business.title} isForActionMenu={false}  hasClick={true} click={() => { navigate(business.path); handleMenuClick(business.path) }} isActive={business.path === activeLink}  />
              ))
              }
        </div>
        <div>
          <div className="sidebar-bottom-sub-section-title">SETTINGS</div>
          {
            settingsMenuData.map((setting) => (

              <Menu key={setting.id} icon={setting.icon} title={setting.title} isForActionMenu={false}  hasClick={true} click={() => { navigate(setting.path); handleMenuClick(setting.path) }} isActive={setting.path === activeLink}  />
            ))
            }
              </div>
          </div>
          
          <div className="sidebar-logout-section">
            <hr className="sidebar-hr"/>
            <div className="sidebar-logout-section-features">
            <div className="d-flex align-items-center sidebar-first-menu" onClick={handleLogout}>
              <img src={SignOut} alt=" signOut-icon" className="sidebar-icon sidebar-logout-icon" />
              <div className="sidebar-menu">Logout</div>
          </div>
          <div className="app-version">
            v1.2.0
          </div>
            </div>
          </div>
    </div>}

    </>


  )
}

export default Sidebar