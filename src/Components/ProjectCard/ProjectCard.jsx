import React, { useState } from 'react';
import copyIcon from '../../assets/icons/copy-icon.svg';
import tickIcon from '../../assets/icons/tick-icon.svg';
import linkIcon from '../../assets/icons/link-icon.svg';
import videoIcon from '../../assets/icons/video-icon.svg';
import VideoModal from '../Modal/VideoModal';

const ProjectCard = ({ id, category, image, link, video, name, description }) => {
    const [copyLink, setCopyLInk] = useState(copyIcon)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCopyLink = (link) => {
        setCopyLInk(tickIcon)
        setTimeout(() => {
            setCopyLInk(copyIcon)
        }, 1000);
        navigator.clipboard.writeText(link)
    }
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div key={id} className='text-sm p-5 border border-gray-300 rounded-lg space-y-3 hover:shadow-custom-shadow'>
            <img src={image} alt={name} className='border border-gray-300 rounded-lg' />
            <div className='flex gap-1'>
                <button className='border p-2 hover:border-Primary text-Primary rounded-lg items-center justify-center bg-white'><a href={`https://${link}`} target='_blank' className='inline-flex gap-1'>Visti<img src={linkIcon} alt="link" className='w-4' /></a></button>
                <button className='border hover:border-Primary p-2 text-Primary rounded-lg flex items-center justify-center gap-1 bg-white' onClick={() => setIsModalOpen(true)}>Demo <img src={videoIcon} alt="video" className='w-5' /></button>
                <button className='border hover:border-Primary p-2 text-Primary rounded-lg flex items-center justify-center gap-1 bg-white' onClick={() => handleCopyLink(link)}>Link<img src={copyLink} alt="copy" className='w-4' /></button>
            </div>
            <p className='text-Primary font-semibold text-lg'>{name}</p>
            <p>{description}</p>
            <VideoModal videoUrl={video} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default ProjectCard;
