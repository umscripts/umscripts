import React, { useState } from 'react';
import copyIcon from '../../assets/icons/copy-icon.svg';
import tickIcon from '../../assets/icons/tick-icon.svg';
import linkIcon from '../../assets/icons/link-icon.svg';
import videoIcon from '../../assets/icons/video-icon.svg';
import VideoModal from '../Modal/VideoModal';

const ProjectCard = ({ id, category, image, link, video, name, description, isLive }) => {
    const [copyLink, setCopyLInk] = useState(copyIcon);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCopyLink = (link) => {
        setCopyLInk(tickIcon);
        setTimeout(() => {
            setCopyLInk(copyIcon);
        }, 1000);
        navigator.clipboard.writeText(link);
    };

    return (
        <div key={id} className='text-sm p-2 md:p-5 border border-gray-300 rounded-lg space-y-2 lg:space-y-3 hover:shadow-custom-shadow bg-PrimaryBG my-2 sm:my-0'>
            <img src={image} alt={name} className="w-11/12 mx-auto transition-transform duration-700 ease-in-out hover:scale-110 h-auto max-h-40 2xl:max-h-64 object-cover" />
            <div className='flex gap-1'>
                <button className={isLive ? 'border hover:border-Primary py-1 px-2 lg:p-2 text-Primary rounded-md lg:rounded-lg items-center justify-center' : 'hidden'}><a href={`https://${link}`} target='_blank' className='inline-flex gap-1'>Visti<img src={linkIcon} alt="link" className='w-4' /></a></button>
                <button className='border hover:border-Primary py-1 px-2 lg:p-2 text-Primary rounded-md lg:rounded-lg flex items-center justify-center gap-1' onClick={() => setIsModalOpen(true)}>Demo <img src={videoIcon} alt="video" className='w-5' /></button>
                <button className={isLive ? 'border hover:border-Primary py-1 px-2 lg:p-2 text-Primary rounded-md lg:rounded-lg flex items-center justify-center gap-1' : 'hidden'} onClick={() => handleCopyLink(link)}>Link<img src={copyLink} alt="copy" className='w-4' /></button>
            </div>
            <p className='text-Primary font-semibold text-lg'>{name}</p>
            <p className='overflow-y-scroll h-24 lg:h-36 xsm:text-xs sm:text-sm'>{description}</p>
            <VideoModal videoUrl={video} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default ProjectCard;
