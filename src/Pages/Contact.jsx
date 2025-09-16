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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ACCESS_KEY = "37c35959-5672-4c89-95bd-3afc05e99e62";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          phone: formData.phone || "Not provided",
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Message from ${formData.name}`,
          from_name: formData.name,
          source: "umscripts - Contact Form"
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus('✅ Message sent successfully! Thank you for reaching out.');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('❌ Failed to send message. Please try again later or contact me directly.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setFormStatus('')
      }, 3000);
    }
  };

  return (
    <div className='px-5 sm:px-10 lg:px-20 my-20 md:my-32' id='contact'>
      <p className='text-2xl border-l-4 pl-5 border-Primary my-5 md:my-10'>Let's Connect</p>
      <div className='flex flex-col sm:flex-row'>
        <div className='sm:w-3/6 xl:w-2/6 py-2 pr-2 text-sm lg:text-[16px] flex flex-col justify-between'>
          <div className='space-y-3 sm:space-y-5 xl:space-y-8 sm:text-xs md:text-sm'>
            <p className=' w-11/12 lg:w-5/6 sm:text-sm'>Get in touch to collaborate. Whether you have a question, a project proposal or just want to say hello, feel free to reach out. I'd love to hear from you!</p>
            <div className='space-y-3 sm:space-y-5'>
              <div className='flex gap-2 md:gap-5 items-center'>
                <img src={phoneIcon} alt="phone" className='w-6 sm:w-5 md:w-8' />03087165428
              </div>
              <div className='flex gap-2 md:gap-5 items-center'>
                <img src={mailIcon} alt="mail" className='w-6 sm:w-5 md:w-8' />musmanmustafa181@gmail.com
              </div>
              <div className='flex gap-2 md:gap-5 items-center'>
                <img src={locationIcon} alt="location" className='w-6 sm:w-5 md:w-8' />Lahore, Pakistan
              </div>
            </div>
          </div>
          <div className='flex gap-3 md:gap-5 my-5'>
            <a href="https://github.com/umscripts" target='_blank' rel="noopener noreferrer">
              <img src={githubLogo} alt="github" className='w-8 md:w-10 hover:shadow-custom-shadow cursor-pointer rounded-lg' />
            </a>
            <a href="https://www.linkedin.com/in/usmanmustafa181" target='_blank' rel="noopener noreferrer">
              <img src={linkedinLogo} alt="linkedin" className='w-8 md:w-10 hover:shadow-custom-shadow cursor-pointer rounded-lg' />
            </a>
            <a href="https://www.facebook.com/usman.mustafa.90813236" target='_blank' rel="noopener noreferrer">
              <img src={facebookLogo} alt="facebook" className='w-8 md:w-10 hover:shadow-custom-shadow cursor-pointer rounded-lg' />
            </a>
            <a href="https://www.instagram.com/heyy_usmaan" target='_blank' rel="noopener noreferrer">
              <img src={instaLogo} alt="instagram" className='w-8 md:w-10 hover:shadow-custom-shadow cursor-pointer rounded-lg' />
            </a>
          </div>
        </div>
        <div className='sm:w-3/6 xl:w-4/6'>
          <form onSubmit={handleSubmit} className='flex flex-col text-xs md:text-sm gap-2'>
            <div className='relative'>
              <input
                placeholder='Full Name'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='rounded-lg p-2 w-full border focus:outline-none focus:border-Primary transition-colors'
                required
                disabled={isSubmitting}
              />
            </div>
            <div className='relative'>
              <input
                placeholder='Phone Number (Optional)'
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className='rounded-lg p-2 w-full border focus:outline-none focus:border-Primary transition-colors'
                disabled={isSubmitting}
              />
            </div>
            <div className='relative'>
              <input
                placeholder='Email Address'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='rounded-lg p-2 w-full border focus:outline-none focus:border-Primary transition-colors'
                required
                disabled={isSubmitting}
              />
            </div>
            <div className='relative'>
              <textarea
                placeholder='Message'
                name="message"
                value={formData.message}
                onChange={handleChange}
                className='rounded-lg p-2 w-full border focus:outline-none focus:border-Primary transition-colors resize-none min-h-40'
                required
                disabled={isSubmitting}
              />
            </div>
            
            {/* Status Message */}
            {formStatus && (
              <div className={`p-3 rounded-lg text-sm ${
                formStatus.includes('✅') 
                  ? 'bg-green-100 text-green-700 border border-green-300' 
                  : 'bg-red-100 text-red-700 border border-red-300'
              }`}>
                {formStatus}
              </div>
            )}
            
            <button 
              type="submit" 
              className={`w-40 border p-2 rounded-lg bg-Primary text-white hover:shadow-custom-shadow text-sm transition-all ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;