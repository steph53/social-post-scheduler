"use client";

import Image from 'next/image';
import NavButton from './NavButton';
import { useRouter } from 'next/router';
import {IoCalendarOutline} from 'react-icons/io5';
import {PiImagesSquare} from 'react-icons/pi';
import {RxHamburgerMenu} from 'react-icons/rx';

const Navbar = () => {
    return ( 
        <>
            <div className=" lg:hidden flex flex-row justify-between items-center p-6 bg-white border-b border-neutral-200">
                <div className="font-bold text-xl">Social Media Manager</div>
                <RxHamburgerMenu size={30}/>
            </div>
            <div 
                className="flex-col justify-start gap-4 p-6 w-[200px] h-screen bg-white border-r border-neutral-200 hidden lg:flex transition-all duration-200"
            >
                <NavButton
                    name="Calendar"
                    logo={<IoCalendarOutline size={25}/>}
                    link="/"
                    active={true}
                />
                <NavButton
                    name="Media"
                    logo={<PiImagesSquare size={25}/>}
                    link="/"
                />
            </div>
        </>
     );
}
 
export default Navbar;