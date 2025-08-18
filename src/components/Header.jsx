import React, { useEffect, useState } from 'react'
import menu from '../assets/menu.svg'
import logo from '../assets/youtube-logo.svg'
import search from '../assets/search.svg'
import profile from '../assets/profile.jpg'
import { useDispatch } from 'react-redux'
import { addtoggleMenu } from '../utils/menuSlice'
import { YOUTUBE_SEARCH_QUERY_API } from '../utils/constants'

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchList, setSearchList] = useState(null)
    const [showSuggestions, setShowSuggestions] = useState(false)
    const dispatch = useDispatch()

    const handleMenuToggle = () => {
        dispatch(addtoggleMenu())
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleSearch();
        }, 250);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    const handleSearch = async () => {
        const data = await fetch(YOUTUBE_SEARCH_QUERY_API + searchQuery);
        const json = await data.json();

        setSearchList(json[1]);
    }
  return (
    <header className='min-h-[56px] px-4 flex items-center justify-between bg-white sticky top-0 z-30 opacity-[0.97]'>
        <div className="logo-menu flex items-center gap-4">
            <div className="menu cursor-pointer hover:bg-[#00000019] w-[40px] h-[40px] flex items-center justify-center rounded-full" onClick={handleMenuToggle}>
                <img src={menu} alt='menu' />
            </div>
            <div className="logo">
                <img src={logo} alt='logo' />
            </div>
        </div>
        <div className="search-box">
            <form className='flex relative'>
                <input 
                    type="text" 
                    className='border-[#c6c6c6] border-[1px] py-1.5 pr-1.5 pl-6 w-[530px] rounded-l-full inset-shadow-xs' 
                    placeholder='Search' 
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />
                {showSuggestions && (
                    <ul className='absolute top-full bg-white w-[89%] py-2.5 px-2.5 shadow-2xl rounded-2xl'>
                        {
                            searchList && searchList.map((list, index) => (
                                <li key={index} className='py-1.5 cursor-default hover:bg-[#00000019] rounded-xl flex items-center gap-3.5 px-3.5'>
                                    <img src={search} alt='search-icon' />
                                    <span>{list}</span>
                                </li>
                            ))
                        }
                    </ul>
                )}
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