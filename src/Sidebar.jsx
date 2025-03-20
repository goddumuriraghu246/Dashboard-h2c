import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  BsFillHouseFill, 
  BsListCheck, 
  BsGearFill, 
  BsFillPersonFill,
  BsBoxArrowRight
} from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const location = useLocation();

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsFillHouseFill className='icon_header'/> Home
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className={`sidebar-list-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/">
                    <BsFillHouseFill className='icon'/> Dashboard
                </Link>
            </li>
            <li className={`sidebar-list-item ${location.pathname === '/reports' ? 'active' : ''}`}>
                <Link to="/reports">
                    <BsListCheck className='icon'/> Recent Reports
                </Link>
            </li>
            <li className={`sidebar-list-item ${location.pathname === '/profile' ? 'active' : ''}`}>
                <Link to="/profile">
                    <BsFillPersonFill className='icon'/> Profile
                </Link>
            </li>
            <li className={`sidebar-list-item ${location.pathname === '/settings' ? 'active' : ''}`}>
                <Link to="/settings">
                    <BsGearFill className='icon'/> Settings
                </Link>
            </li>
        </ul>

        <div className='sidebar-bottom'>
            <div className='sidebar-list-item logout-item'>
                <Link to="/logout">
                    <BsBoxArrowRight className='icon'/> Logout
                </Link>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar