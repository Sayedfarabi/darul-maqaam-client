import React from 'react';
import { GrMail, GrFacebookOption, GrYoutube, GrInstagram } from 'react-icons/gr';
import { ImMobile2 } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';
import { BiSolidLocationPlus, BiLogoLinkedin } from 'react-icons/bi';
import { FaRegHandPointRight } from 'react-icons/fa';

import logo from '../../assets/images/brand/logo(1).png';

const Footer = () => {
    return (
        <section className='bg-green-500 py-8 md:py-12 px-2 md:px-6 lg:px-12 text-white'>
            <footer className='grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4'>

                <div className='mx-auto'>
                    <img src={logo} className='w-54 h-28' alt="logo" />
                    <p className='text-xs pr-0 md:pr-4'>
                        Darul Maqaam Foundation is a renowned law firm in Dhaka,
                        Bangladesh. We are providing and dealing with all sorts of legal
                        and professional services and matters to operate with the comp -
                        anies act.
                    </p>
                </div>
                <div className='mx-auto text-xs leading-loose w-full'>
                    <p className="text-lg md:text-2xl font-semibold tracking-wider mb-2 text-center">Contact Us</p>
                    <p>
                        <BiSolidLocationPlus className='inline mr-2 text-base'></BiSolidLocationPlus>
                        <a href='https://' className="link link-hover">

                            Tropical Alauddin Tower (11th Floor, Flat:11-B),
                            Holding No. - 32/C, Road - 02, Sector - 03,
                            Uttara, Dhaka - 1230, Bangladesh
                        </a>
                    </p>
                    <p>
                        <GrMail className='inline mr-2 text-base'></GrMail>
                        <a href='https://' className="link link-hover">
                            info@darulmaqaamfoundation.com
                            <br />
                            darulmaqaamfoundation@gmail.com
                            <br />
                        </a>
                    </p>
                    <p>
                        <BsTelephoneFill className='inline mr-2 text-base'></BsTelephoneFill>
                        <a href='https://' className="link link-hover">
                            (+880) - 02 - 4895 4791
                        </a>
                    </p>
                    <p>
                        <ImMobile2 className='inline mr-2 text-base'></ImMobile2>
                        <a href='https://' className="link link-hover">
                            (+880) - 1918 390 119
                        </a>
                    </p>
                </div>
                <div className='mx-auto text-xs leading-loose w-full'>
                    <p className="text-lg md:text-2xl font-semibold tracking-wider mb-2 text-center">Usefull Links</p>
                    <p>
                        <FaRegHandPointRight className='inline mr-6 text-base'></FaRegHandPointRight>
                        <a href='https://' className="link link-hover">
                            FAQ
                        </a>
                    </p>
                    <p>
                        <FaRegHandPointRight className='inline mr-6 text-base'></FaRegHandPointRight>
                        <a href='https://' className="link link-hover">
                            Clients
                        </a>
                    </p>
                    <p>
                        <FaRegHandPointRight className='inline mr-6 text-base'></FaRegHandPointRight>
                        <a href='https://' className="link link-hover">
                            Internship
                        </a>
                    </p>
                    <p>
                        <FaRegHandPointRight className='inline mr-6 text-base'></FaRegHandPointRight>
                        <a href='https://' className="link link-hover">
                            Blog
                        </a>
                    </p>
                    <p>
                        <FaRegHandPointRight className='inline mr-6 text-base'></FaRegHandPointRight>
                        <a href='https://' className="link link-hover">
                            Rahamat & Associates Limited
                        </a>
                    </p>
                </div>
                <div className='mx-auto  text-xs leading-loose w-full'>
                    <p className="text-lg md:text-2xl font-semibold tracking-wider mb-2 text-center">
                        {"Let’s connect"}
                    </p>
                    <p>
                        <GrFacebookOption className='inline mr-6 text-base'></GrFacebookOption>
                        <a href='https://' className="link link-hover">Facebook</a>
                    </p>
                    <p>
                        <BiLogoLinkedin className='inline mr-6 text-base'></BiLogoLinkedin>
                        <a href='https://' className="link link-hover">Linkedin</a>
                    </p>
                    <p>
                        <GrInstagram className='inline mr-6 text-base'></GrInstagram>
                        <a href='https://' className="link link-hover">Instagram</a>
                    </p>
                    <p>
                        <GrYoutube className='inline mr-6 text-base'></GrYoutube>
                        <a href='https://' className="link link-hover">Youtube</a>
                    </p>
                    <p>
                        <GrMail className='inline mr-6 text-base'></GrMail>
                        <a href='https://' className="link link-hover">Webmail</a>
                    </p>
                </div>

            </footer>
        </section>

    );
};

export default Footer;