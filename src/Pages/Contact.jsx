import React, { useState } from 'react';
import locationIcon from '../assets/icons/location-icon.svg';
import phoneIcon from '../assets/icons/phone-icon.svg';
import mailIcon from '../assets/icons/mail-icon.svg';
import githubLogo from '../assets/logos/github-logo.svg';
import linkedinLogo from '../assets/logos/linkedin-logo.svg';
import facebookLogo from '../assets/logos/facebook-logo.png';
import instaLogo from '../assets/logos/insta-logo.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "37c35959-5672-4c89-95bd-3afc05e99e62",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } else {
      setFormStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className='px-10 lg:px-20 my-32' id='contact'>
      <p className='text-2xl border-l-4 pl-5 border-Primary my-10'>Let's Connect</p>
      <div className='flex'>
        <div className='w-2/6 p-5 text-[16px] flex flex-col justify-between'>
          <div className='space-y-8'>
            <p className='text-[16px]'>Get in touch to collaborate. Whether you have a question, a project proposal or just want to say hello, feel free to reach out. I'd love to hear from you!</p>
            <div className='flex gap-5 items-center'>
              <img src={phoneIcon} alt="phone" className='w-8' />03087165428
            </div>
            <div className='flex gap-5 items-center'>
              <img src={mailIcon} alt="mail" className='w-8' />musmanmustafa181@gmail.com
            </div>
            <div className='flex gap-5 items-center'>
              <img src={locationIcon} alt="location" className='w-8' />Lahore, Pakistan
            </div>
          </div>
          <div className='flex gap-5'>
            <a href="https://github.com/umscripts" target='_blank'><img src={githubLogo} alt="github" className='w-10 hover:shadow-custom-shadow cursor-pointer rounded-lg' /></a>
            <a href="https://www.linkedin.com/in/usmanmustafa181" target='_blank'><img src={linkedinLogo} alt="linkedin" className='w-10 hover:shadow-custom-shadow cursor-pointer rounded-lg' /></a>
            <a href="https://www.facebook.com/usman.mustafa.90813236" target='_blank'><img src={facebookLogo} alt="facebook" className='w-10 hover:shadow-custom-shadow cursor-pointer rounded-lg' /></a>
            <a href="https://www.instagram.com/heyy_usmaan" target='_blank'><img src={instaLogo} alt="instagram" className='w-10 hover:shadow-custom-shadow cursor-pointer rounded-lg' /></a>
          </div>
        </div>
        <div className='w-4/6'>
          <form onSubmit={handleSubmit} className=' flex flex-col'>
            <div className='relative m-2'>
              <label class={`text-sm absolute left-4 top-[10px] pointer-events-none transition-all duration-700 transform ${formData.name ? '-translate-y-1/2 scale-90 top-0 left-1 bg-white' : ''} peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:py-0 peer-focus:mt-0 peer-focus:bg-white peer-focus:px-1`}>Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='rounded-lg p-2 w-full border focus:outline-none'
                required
              />
            </div>
            <div className='relative m-2'>
              <label htmlFor="phone" className={`text-sm absolute left-4 top-[10px] pointer-events-none transition-all duration-700 transform ${formData.phone ? '-translate-y-1/2 scale-90 top-0 left-1 bg-white' : ''} peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:py-0 peer-focus:mt-0 peer-focus:bg-white peer-focus:px-1`}>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className='rounded-lg p-2 w-full border focus:outline-none'
                required
              />
            </div>
            <div className='relative m-2'>
              <label htmlFor="email" className={`text-sm absolute left-4 top-[10px] pointer-events-none transition-all duration-700 transform ${formData.email ? '-translate-y-1/2 scale-90 top-0 left-1 bg-white' : ''} peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:py-0 peer-focus:mt-0 peer-focus:bg-white peer-focus:px-1`}>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='rounded-lg p-2 w-full border focus:outline-none'
                required
              />
            </div>
            <div className='relative m-2 mb-0'>
              <label htmlFor="message" className={`text-sm absolute left-4 top-[10px] pointer-events-none transition-all duration-700 transform ${formData.message ? '-translate-y-1/2 scale-90 top-0 left-1 bg-white' : ''} peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:py-0 peer-focus:mt-0 peer-focus:bg-white peer-focus:px-1`}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className='rounded-lg p-2 w-full border focus:outline-none resize-none min-h-40'
                required
              />
            </div>
            <button type="submit" className='w-40 border p-2 rounded-lg mx-2 bg-Primary text-white hover:shadow-custom-shadow'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
