import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Footer (){

    return(

        <div className="bg-black w-full text-white p-6 tablet:flex tablet:items-center tablet:justify-between border-t-[#ff4500] border-t-[2px]">
        {/* Footer Text */}
        <div className="text-center tablet:text-left text-sm mb-4 tablet:mb-0">
            &copy; 2024 MY Company Name
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-2xl">
            <Link to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="hover:text-blue-500">
                <FaLinkedin />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100017419832038" className="hover:text-blue-700">
                <FaFacebookSquare />
            </Link>
            <Link  to={'https://github.com/kannan-aishu'} className="hover:text-gray-500">
                <FaSquareGithub />
            </Link>
            <Link  to={{ pathname: "https://web.whatsapp.com/8610263372" }} 
                    target="_parent" 
                    rel="noopener noreferrer" className="hover:text-green-500">
                <FaWhatsappSquare />
            </Link>
        </div>
    </div>

    )

}