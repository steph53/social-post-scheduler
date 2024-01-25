"use client";
import Image from 'next/image';
import { ReactElement } from 'react';

interface NavButtonProps {
    name: string;
    logo: ReactElement;
    link: string;
    active?: boolean;
    secLogo?: string;
}

const NavButton: React.FC<NavButtonProps> = ({
    name,
    logo,
    link,
    secLogo,
    active=false
}) => {

    return ( 
        <div className={`
            flex 
            flex-row 
            justify-start 
            gap-4 
            items-center 
            cursor-pointer 
            hover:text-[#1bc3fe] 
            transition-all 
            duration-[1000ms]
            ${active ? 'text-[#1bc3fe]' : ""}
        `}>
        {logo}
            <div className="font-normal text-md hidden lg:block"> {name}</div>
            { secLogo && (
                <Image
                    src={secLogo}
                    width={40}
                    height={40}
                    layout="fixed"
                    alt='logo'
                />
            )}
    </div>
    );
}
 
export default NavButton;