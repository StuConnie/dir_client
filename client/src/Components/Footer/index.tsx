import React from 'react';
import { google } from '../../utilities/PNG';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
    const navigate = useNavigate();

    const navigationFun = (str: string) => {
        navigate(`/${str}`);
    }

    return (
        <>  
        {/*__Footer__*/}
        <div className='bg-[#ADD8E6] p-2'>
                <div className='mx-auto max-w-[1250px] flex justify-between items-center'>
                    <p className='lg:text-[14px] md:text-[14px] text-[12px] text-[#1A2B3C]'>© 2023-2024  All rights reserved.</p>
                    <p className='lg:text-[14px] md:text-[14px] text-[12px] text-[#1A2B3C]'>Village Montessori School and Colleges.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;