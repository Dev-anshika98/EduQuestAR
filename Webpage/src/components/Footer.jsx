import React from "react";
import { FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" bg-tertiary w-screen  mx-auto py-3 px-4 gap-8 text-gray-300 pb-1">
            <div>
                <h1 className='w-full text-3xl font-bold text-[#4db9ef] text-center'>EduQuest AR</h1>
                <p className='py-4 text-center'>Made with 🩵 By Team Kalakar</p>
                <div className='flex justify-center gap-3 items-center  md:w-[97 %] my-3'>
                    <a href="#" className=" justify-content text-center items-center transition duration-300 ease-in-out hover:scale-125" target="blank">
                        <FaInstagram size={30} />
                    </a>
                    <a href="#" className="transition duration-300 ease-in-out hover:scale-125" target="blank">

                        <FaTwitterSquare size={30} />
                    </a>
                    <a href="https://github.com/Dev-anshika98/EduQuestAR" className="transition duration-300 ease-in-out hover:scale-125" target="blank">
                        <FaGithubSquare size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;