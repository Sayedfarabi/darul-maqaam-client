import React, { useState } from 'react';
import logo from '../../assets/images/brand/logo.png';
import { GrMail, GrFacebookOption, GrYoutube, GrContactInfo, GrGallery, GrProjects, GrHomeRounded } from 'react-icons/gr';
import { BsTelephoneFill } from 'react-icons/bs';
import { ImMobile2 } from 'react-icons/im';
import { BiNews } from 'react-icons/bi';
import { MdOutlineRoundaboutRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import i18next from "i18next"
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [Lan, setLan] = useState("en");
    const [activeRoute, setActiveRoute] = useState("home");
    const { t } = useTranslation();
    const toggleHandle = (e) => {
        setLan(e)
        i18next.changeLanguage(e)
        console.log(e);
    }
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
                                <p className='hover:text-green-600'>Home</p>
                            </Link></li>
                            <li><Link to={"/about"}>
                                <MdOutlineRoundaboutRight className='inline mr-3'></MdOutlineRoundaboutRight>
                                <p className='hover:text-green-600'>About</p>
                            </Link></li>
                            <li><Link to={"/projects"}>
                                <GrProjects className='inline mr-3'></GrProjects>
                                <p className='hover:text-green-600'>Projects</p>
                            </Link></li>
                            <li><Link to={"/gallery"}>
                                <GrGallery className='inline mr-3'></GrGallery>
                                <p className='hover:text-green-600'>Gallery</p>
                            </Link></li>
                            <li><Link to={"/news"}>
                                <BiNews className='inline mr-3'></BiNews>
                                <p className='hover:text-green-600'>News</p>
                            </Link></li>
                            <li><Link to={"/contact"}>
                                <GrContactInfo className='inline mr-3'></GrContactInfo>
                                <p className='hover:text-green-600'>Contact</p>
                            </Link></li>
                        </ul>



                    </div>
                    <div>
                        <Link onClick={() => setActiveRoute("home")} to={"/"} className="hidden lg:inline">
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
                        <ul className="flex justify-evenly items-center px-1 font-semibold text-lg">
                            <li className='mx-4 my-4'><Link to={"/"}>
                                <p onClick={() => setActiveRoute("home")} className={`${(activeRoute === "home") && "text-green-600"} hover:text-green-600`}>{t("home")}</p>
                            </Link></li>
                            <li className='mx-4 my-4'><Link to={"/about"}>
                                <p onClick={() => setActiveRoute("about")} className={`${(activeRoute === "about") && "text-green-600"} hover:text-green-600`}>{t("about")}</p>
                            </Link></li>
                            <li className='mx-4 my-4'><Link to={"/projects"}>
                                <p onClick={() => setActiveRoute("projects")} className={`${(activeRoute === "projects") && "text-green-600"} hover:text-green-600`}>{t("projects")}</p>
                            </Link></li>
                            <li className='mx-4 my-4'><Link to={"/gallery"}>
                                <p onClick={() => setActiveRoute("gallery")} className={`${(activeRoute === "gallery") && "text-green-600"} hover:text-green-600`}>{t("gallery")}</p>
                            </Link></li>
                            <li className='mx-4 my-4'><Link to={"/news"}>
                                <p onClick={() => setActiveRoute("news")} className={`${(activeRoute === "news") && "text-green-600"} hover:text-green-600`}>{t("news")}</p>
                            </Link></li>
                            <li className='mx-4 my-4'><Link to={"/contact"}>
                                <p onClick={() => setActiveRoute("contact")} className={`${(activeRoute === "contact") && "text-green-600"} hover:text-green-600`}>{t("contact")}</p>
                            </Link></li>
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

                                <button onClick={() => toggleHandle("en")} className={`mr-1 rounded-lg ${(Lan === "en") && "bg-gray-200"} px-2`}>EN</button>
                                <button onClick={(e) => toggleHandle("bn")} className={`rounded-lg ${(Lan === "bn") && "bg-gray-200"} px-2`}>BAN</button>
                            </div>
                        </div>
                    </div>

                    <div className='my-4 py-1'>
                        <div>
                            <button className='capitalize px-4 py-1 text-sm text-white bg-green-600 rounded-lg'>{t("myAccount")}</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Navbar;