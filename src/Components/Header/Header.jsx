import React, { useState } from 'react'
import { CgMail } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";
const Header = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
        { code: 'bn', name: 'Bangla' },
    ];

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
        console.log(`Language changed to: ${e.target.value}`);
    };

    return (
        <section className='bg-[#029E9D] py-3 md:block hidden'>
            <div className="max-w-container mx-auto">
                <div className="md:flex justify-between items-center">
                    <div className="md:flex px-4 md:px-0">
                        <div className="md:pr-4 md:border-r-[1px]">
                            <FaPhoneAlt className='inline-block text-white' />
                            <span className='ml-[2px] font-poppins font-medium text-white text-base'>+88 01742264413</span>
                        </div>
                        <div className="md:px-4">
                            <CgMail className='inline-block text-white text-xl' />
                            <span className='ml-[2px] font-poppins font-medium text-white text-base'>cityhotelsint@gmail.com</span>
                        </div>
                    </div>
                    <div className="">
                        <select className='py-2 px-2 rounded-md' id="language" value={selectedLanguage} onChange={handleLanguageChange}>
                            {languages.map((lang) => (
                                <option className='font-poppins font-medium text-base' key={lang.code} value={lang.code}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="">
                        <ul className='flex'>
                            <li className='px-4 py-1 border-r-[1px]'>
                                <a className='text-white text-base' href="#"><FaFacebookF /></a>
                            </li>
                            <li className='px-4 py-1 border-r-[1px]'>
                                <a className='text-white text-base' href="#"><FaXTwitter /></a>
                            </li>
                            <li className='px-4 py-1 border-r-[1px]'>
                                <a className='text-white text-base' href="#"><FaInstagram /></a>
                            </li>
                            <li className='py-1 pl-4'>
                                <a className='text-white text-base' href="#"><FaYoutube /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header

