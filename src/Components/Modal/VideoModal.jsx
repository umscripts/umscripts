import React from 'react';

const VideoModal = ({ videoUrl, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-1 pt-10 rounded-lg relative w-10/12 sm:w-9/12 lg:w-7/12">
                <button className="absolute top-1 right-3 text-3xl" onClick={onClose}>
                    &times;
                </button>
                <video controls className="w-full h-auto rounded-lg">
                    <source src={videoUrl} type="video/mp4" />
                    Video Not Available
                </video>
            </div>
        </div>
    );
};

export default VideoModal;
