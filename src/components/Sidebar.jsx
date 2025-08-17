import React from 'react'
import { sidebarItems, sidebarItemsShort } from '../utils/sidebar'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const menu = useSelector(store => store.menu.toggleMenu)
  return (
    <div>
        {
            !menu ? (
                <aside className='max-w-full w-[240px] sticky top-[56px] bg-white'>
                    <ul>
                        {sidebarItems?.sidebar?.map(item => (
                            <li key={item.id} className='flex items-center gap-2.5 p-3 mx-2.5 rounded-2xl hover:bg-[#00000009] cursor-pointer'>
                                <img src={item.icon} alt="" />
                                <span>{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </aside>                        
            ) : (
                <aside className='max-w-full w-[100px] sticky top-[56px] bg-white'>
                    <ul>
                        {sidebarItemsShort?.sidebar?.map(item => (
                            <li key={item.id} className='p-3 mx-2.5 rounded-2xl hover:bg-[#00000009] cursor-pointer'>
                                <Link to={item.route} className='flex flex-col items-center gap-1'>
                                    <img src={item.icon} alt="" />
                                    <span className='text-[12px]'>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            )
        }
    </div>
  )
}

export default Sidebar