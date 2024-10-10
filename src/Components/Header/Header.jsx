import React, { useState } from 'react'
import { CgMail } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import ReactFlagsSelect from "react-flags-select";
const Header = () => {
    const [selected, setSelected] = useState("");
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
        <section className='bg-[#029E9D] md:block hidden'>
            <div className="max-w-container mx-auto">
                <div className="md:flex justify-between items-center">
                    <div className="md:flex px-4 md:px-0">
                        <div className="flex items-center md:border-r-[1px] md:pr-4">
                            <p><FaPhoneAlt className='text-white text-[12px]' /></p>
                            <p className='ml-[2px] font-open-sans font-normal text-white text-[12px]'>+88 01742264413</p>
                        </div>
                        <div className="md:px-4 flex items-center">
                            <p><CgMail className='text-white text-[12px]' /></p>
                            <p className='ml-[2px] font-open-sans font-normal text-white text-[12px]'>cityhotelsint@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-8">
                        <div className="flex items-center">
                            <div className="">
                                <p className='ml-[2px] font-open-sans font-medium text-white text-[12px]'>Follow Us :</p>
                            </div>
                            <div className="">
                                <ul className='flex'>
                                    <li className='px-4 border-r-[1px]'>
                                        <a className='text-white text-[12px]' href="#"><FaFacebookF /></a>
                                    </li>
                                    <li className='px-4 border-r-[1px]'>
                                        <a className='text-white text-[12px]' href="#"><FaXTwitter /></a>
                                    </li>
                                    <li className='px-4 border-r-[1px]'>
                                        <a className='text-white text-[12px]' href="#"><FaInstagram /></a>
                                    </li>
                                    <li className=' pl-4'>
                                        <a className='text-white text-[12px]' href="#"><FaYoutube /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <ReactFlagsSelect
                                selected={selected}
                                onSelect={(code) => setSelected(code)}
                            />
                        </div>
                        {/* <div className="">
                        <select className='py-2 px-2 rounded-md' id="language" value={selectedLanguage} onChange={handleLanguageChange}>
                            {languages.map((lang) => (
                                <option className='font-playfair font-medium text-[12px]' key={lang.code} value={lang.code}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header

