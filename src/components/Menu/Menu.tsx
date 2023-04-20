import "./Menu.scss"

interface MenuProps {
  icon: string,
  title: string,
  isForActionMenu: boolean
  hasClick: boolean
  click?: () => void
  isActive?: boolean
}

const Menu = (menuItem : MenuProps) => {
  const { icon, title, isForActionMenu, hasClick, click, isActive } = menuItem;
  const activeClass = isActive ? 'active' : '';
  return (
    <>
      {
        hasClick ? 
          <div className= {`d-flex align-items-center menu-wrapper ${activeClass}`} onClick={click}>
      {
        isForActionMenu ?
          <>
          <img src={icon} alt="action-menu-icon" className='action-menu-icon' />
          <div className="action-menu-title">{title}</div>
          </>
          : 
        <>
          <img src={icon} alt="menu-icon" className='menu-icon' />
          <div className="menu-title">{title}</div>
          </>
      }
        </div>
          :
          <div className="d-flex align-items-center menu-wrapper">
      {
        isForActionMenu ?
          <>
          <img src={icon} alt="action-menu-icon" className='action-menu-icon' />
          <div className="action-menu-title">{title}</div>
          </>
          : 
        <>
          <img src={icon} alt="menu-icon" className='menu-icon' />
          <div className="menu-title">{title}</div>
          </>
      }
        </div>
      }
    </>

  )
}

export default Menu

