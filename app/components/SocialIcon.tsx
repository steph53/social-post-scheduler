"use client";

import { ReactElement } from "react";
import {AiOutlinePlus} from 'react-icons/ai';

interface SocialIconProps {
    icon: ReactElement;
    link: string;
    image?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
    icon,
    link,
    image

}) => {
    return ( 
        <div className="
            relative
            p-1
            h-[40px]
            w-[40px]
            border
            rounded-full
            justify-center
            items-center
            flex
            text-neutral-400
            cursor-pointer
        ">
            {icon}
            <div className="bg-[#323b43] text-white p-[1px] rounded-full absolute right-[-1px] bottom-0">
                {!image && (
                    <AiOutlinePlus size={15}/>
                )}
            </div>
        </div>
     );
}
 
export default SocialIcon;