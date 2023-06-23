import React, { useState } from 'react';
import logo from '../../assets/images/brand/logo.png';
import { GrMail, GrFacebookOption, GrYoutube, GrContactInfo, GrGallery, GrProjects, GrHomeRounded } from 'react-icons/gr';
import { BsTelephoneFill } from 'react-icons/bs';
import { ImMobile2 } from 'react-icons/im';
import { BiNews } from 'react-icons/bi';
import { MdOutlineRoundaboutRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isLanEng, setIsLanEng] = useState(true);
    return (
        <section className='px-2 md:px-4 lg:px-6'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">

                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            <li className='mb-4'>
                                <Link to={"/"}>
                                    <img src={logo} className='w-40 h-20' alt="" />
                                </Link>
                            </li>
                            <li><Link to={"/"}>
                                <GrHomeRounded className='inline mr-3 text-green-600'></GrHomeRounded>
                                Home
                            </Link></li>
                            <li><Link to={"/about"}>
                                <MdOutlineRoundaboutRight className='inline mr-3'></MdOutlineRoundaboutRight>
                                About</Link></li>
                            <li><Link to={"/projects"}>
                                <GrProjects className='inline mr-3'></GrProjects>
                                Projects
                            </Link></li>
                            <li><Link to={"/gallery"}>
                                <GrGallery className='inline mr-3'></GrGallery>
                                Gallery
                            </Link></li>
                            <li><Link to={"/news"}>
                                <BiNews className='inline mr-3'></BiNews>
                                News
                            </Link></li>
                            <li><Link to={"/contact"}>
                                <GrContactInfo className='inline mr-3'></GrContactInfo>
                                Contact
                            </Link></li>
                        </ul>



                    </div>
                    <div>
                        <Link to={"/"} className="hidden lg:inline">
                            <img src={logo} className='w-52 h-28' alt="" />
                        </Link>
                    </div>
                </div>

                <div className='navbar-center hidden md:flex flex-col lg:hidden'>
                    <div className='text-xs font-semibold flex'>
                        <p className='mr-3'>
                            <ImMobile2 className='text-green-600 inline'></ImMobile2>
                            <span>+8801918-390119</span>
                        </p>
                        <p>
                            <BsTelephoneFill className='text-green-600 inline'></BsTelephoneFill>
                            <span className='ml-1'>(+880) - 02 - 4895 4791</span>
                        </p>

                    </div>
                    <div className='text-xs'>
                        <p>
                            <GrMail className='text-green-600 inline'></GrMail>
                            <span className='ml-1'>onfo@darulmaaqamfoundation.com</span>
                        </p>
                    </div>
                </div>

                <div className='navbar-center hidden lg:flex flex-col'>
                    <div className='text-xs font-semibold flex justify-center items-end'>
                        <p className='mr-3'>
                            <ImMobile2 className='text-green-600 inline'></ImMobile2>
                            <span>+8801918-390119</span>
                        </p>
                        <p>
                            <BsTelephoneFill className='text-green-600 inline'></BsTelephoneFill>
                            <span className='ml-1'>(+880) - 02 - 4895 4791</span>
                        </p>
                        <p className='mx-2 text-xl'>
                            |
                        </p>
                        <p>
                            <GrMail className='text-green-600 inline'></GrMail>
                            <span className='ml-1'>onfo@darulmaaqamfoundation.com</span>
                        </p>
                    </div>
                    <div>
                        <ul className="menu menu-horizontal px-1 font-semibold text-lg">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                            <li><Link to={"/projects"}>Projects</Link></li>
                            <li><Link to={"/gallery"}>Gallery</Link></li>
                            <li><Link to={"/news"}>News</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="navbar-end flex flex-col items-end">

                    <div className='mr-0 lg:mr-12'>
                        <div className='flex justify-center  items-center'>
                            <div>
                                <GrFacebookOption className='text-green-600 inline'></GrFacebookOption>
                                <GrYoutube className='text-green-600 inline mx-2 md:mx-3'></GrYoutube>
                            </div>
                            <div className='font-bold text-sm bg-green-500 rounded-lg'>

                                <button onClick={() => setIsLanEng(true)} className={`mr-1 rounded-lg ${isLanEng && "bg-gray-200"} px-2`}>EN</button>
                                <button onClick={() => setIsLanEng(false)} className={`rounded-lg ${!isLanEng && "bg-gray-200"} px-2`}>BAN</button>
                            </div>
                        </div>
                    </div>

                    <div className='my-4 py-1'>
                        <div>
                            <button className='capitalize px-4 py-1 text-sm text-white bg-green-600 rounded-lg'>My Account</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Navbar;