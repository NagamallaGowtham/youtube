import React from 'react'
import menu from '../assets/menu.svg'
import logo from '../assets/youtube-logo.svg'
import search from '../assets/search.svg'
import profile from '../assets/profile.jpg'
import { useDispatch } from 'react-redux'
import { addtoggleMenu } from '../utils/menuSlice'

const Header = () => {
    const dispatch = useDispatch()

    const handleMenuToggle = () => {
        dispatch(addtoggleMenu())
    }
  return (
    <header className='min-h-[56px] px-4 flex items-center justify-between'>
        <div className="logo-menu flex items-center gap-4">
            <div className="menu cursor-pointer hover:bg-[#00000019] w-[40px] h-[40px] flex items-center justify-center rounded-full" onClick={handleMenuToggle}>
                <img src={menu} alt='menu' />
            </div>
            <div className="logo">
                <img src={logo} alt='logo' />
            </div>
        </div>
        <div className="search-box">
            <form className='flex'>
                <input type="text" className='border-[#c6c6c6] border-[1px] py-1.5 pr-1.5 pl-6 w-[530px] rounded-l-full inset-shadow-xs' placeholder='Search' />
                <button className='w-[64px] flex items-center justify-center bg-[#f8f8f8] rounded-r-full border-[#c6c6c6] border-[1px] border-l-0 cursor-pointer hover:bg-[#00000019] inset-shadow-xs'><img src={search} alt='search-icon' /></button>
            </form>
        </div>
        <div className="profile">
            <img src={profile} width={40} height={40} alt="profile" />
        </div>
    </header>
  )
}

export default Header