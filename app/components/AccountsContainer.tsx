"use client";

import SocialIcon from "./SocialIcon";
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";

const AccountsContainer = () => {
    return ( 
        <div
            className="flex flex-row justify-start gap-2 p-4 items-center"
        >
            <span> Schedule to </span>
            <SocialIcon
                icon={<FaInstagram size={20}/>}
                link="https://cdn-icons-png.flaticon.com/512/124/124010.png"

            />
            <SocialIcon
                icon={<FaFacebookF size={20}/>}
                link="https://cdn-icons-png.flaticon.com/512/124/124010.png"

            />
            <SocialIcon
                icon={<RiTwitterXLine size={20}/>}
                link="https://cdn-icons-png.flaticon.com/512/124/124010.png"
            />
            <SocialIcon
                icon={<FaLinkedinIn size={20}/>}
                link="https://cdn-icons-png.flaticon.com/512/124/124010.png"
            />
        </div> 
        
    );
}
 
export default AccountsContainer;