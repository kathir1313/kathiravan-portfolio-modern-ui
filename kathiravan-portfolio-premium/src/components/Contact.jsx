import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactBgVideo from '../assets/contact_assets/contact_bg.mp4';
import { personal, socials } from '../data/portfolioData';

// Circular Social Icons matching the reference screenshot
const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ContactSection = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });

  const emailjsConfigured =
    Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID) &&
    Boolean(import.meta.env.VITE_EMAILJS_TEMPLATE_ID) &&
    Boolean(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setStatusMessage({ text: 'Please fill in all required fields.', type: 'error' });
      return;
    }

    if (!emailjsConfigured) {
      setStatusMessage({
        text: `Message form isn't fully wired up yet — please email directly at ${personal.email} in the meantime.`,
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ text: '', type: '' });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatusMessage({ text: 'Message sent successfully!', type: 'success' });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatusMessage({ text: 'Failed to send message. Please try again later.', type: 'error' });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-white font-sans flex items-center justify-center overflow-hidden py-16 md:py-24"
    >
      {/* Background Rotating 3D Dot-Matrix Globe Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:left-[30%] lg:-translate-x-1/2 w-[700px] sm:w-[850px] md:w-[950px] lg:w-[1100px] max-w-none aspect-square object-contain opacity-80 mix-blend-screen"
        >
          <source src={contactBgVideo} type="video/mp4" />
        </video>

        {/* Soft gradient masks to seamlessly blend into deep black */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none" />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
        {/* Left Side: Heading & Contact Details */}
        <div className="w-full lg:w-[42%] flex flex-col justify-between self-stretch pt-2 lg:pt-6">
          <div>
            {/* Metallic 3D Styled "Get in touch" Heading */}
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight leading-none mb-12 sm:mb-16 select-none"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #D8DFE8 40%, #7E8794 75%, #343A44 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 10px 18px rgba(0, 0, 0, 0.95)) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.15))',
              }}
            >
              Get in touch
            </h2>

            <div className="flex flex-col gap-8">
              {/* Name */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-[#8a909a] font-normal mb-1 tracking-wide">
                  Name:
                </span>
                <span className="text-base sm:text-lg text-white font-medium tracking-wide text-glow-white transition-all duration-300">
                  {personal.name}
                </span>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-[#8a909a] font-normal mb-1 tracking-wide">
                  Email:
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-base sm:text-lg text-white font-medium tracking-wide text-glow-white transition-all duration-300 break-all"
                >
                  {personal.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-[#8a909a] font-normal mb-1 tracking-wide">
                  Phone:
                </span>
                {personal.phone ? (
                  <a
                    href={`tel:${personal.phoneRaw || personal.phone}`}
                    className="text-base sm:text-lg text-white font-medium tracking-wide text-glow-white transition-all duration-300"
                  >
                    {personal.phone}
                  </a>
                ) : (
                  <span className="text-base sm:text-lg text-gray-500 font-normal tracking-wide">
                    Not specified
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Follow Us & Social Icons */}
          <div className="mt-12 lg:mt-auto pt-6 flex flex-col gap-3">
            <span className="text-xs sm:text-sm text-[#8a909a] font-normal tracking-wide">
              Follow us
            </span>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href={socials.instagram || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#121316] border border-[#23262d] flex items-center justify-center text-[#9ea3ae] hover:text-white hover:bg-[#1c1e24] hover:border-[#40444f] transition-all duration-300 shadow-sm"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* YouTube */}
              <a
                href={socials.youtube || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#121316] border border-[#23262d] flex items-center justify-center text-[#9ea3ae] hover:text-white hover:bg-[#1c1e24] hover:border-[#40444f] transition-all duration-300 shadow-sm"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={socials.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#121316] border border-[#23262d] flex items-center justify-center text-[#9ea3ae] hover:text-white hover:bg-[#1c1e24] hover:border-[#40444f] transition-all duration-300 shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href={socials.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-[#121316] border border-[#23262d] flex items-center justify-center text-[#9ea3ae] hover:text-white hover:bg-[#1c1e24] hover:border-[#40444f] transition-all duration-300 shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form matching reference screenshot */}
        <div className="w-full lg:w-[58%] lg:pt-8">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 sm:gap-5 w-full"
          >
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-xs sm:text-sm text-[#9aa0a6] font-normal"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                  className="w-full bg-[#0c0d0f] text-white text-sm rounded-lg px-4 py-3.5 border border-[#1d1f25] placeholder:text-[#4e535e] focus:outline-none focus:border-white/70 focus:ring-1 focus:ring-white/30 input-glow-white transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-xs sm:text-sm text-[#9aa0a6] font-normal"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Your email address"
                  required
                  className="w-full bg-[#0c0d0f] text-white text-sm rounded-lg px-4 py-3.5 border border-[#1d1f25] placeholder:text-[#4e535e] focus:outline-none focus:border-white/70 focus:ring-1 focus:ring-white/30 input-glow-white transition-all duration-200"
                />
              </div>
            </div>

            {/* Row 2: Phone and Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-phone"
                  className="text-xs sm:text-sm text-[#9aa0a6] font-normal"
                >
                  Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="Your phone number"
                  className="w-full bg-[#0c0d0f] text-white text-sm rounded-lg px-4 py-3.5 border border-[#1d1f25] placeholder:text-[#4e535e] focus:outline-none focus:border-white/70 focus:ring-1 focus:ring-white/30 input-glow-white transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-subject"
                  className="text-xs sm:text-sm text-[#9aa0a6] font-normal"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full bg-[#0c0d0f] text-white text-sm rounded-lg px-4 py-3.5 border border-[#1d1f25] placeholder:text-[#4e535e] focus:outline-none focus:border-white/70 focus:ring-1 focus:ring-white/30 input-glow-white transition-all duration-200"
                />
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="contact-message"
                className="text-xs sm:text-sm text-[#9aa0a6] font-normal"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Write something...."
                required
                className="w-full bg-[#0c0d0f] text-white text-sm rounded-lg px-4 py-3.5 border border-[#1d1f25] placeholder:text-[#4e535e] focus:outline-none focus:border-white/70 focus:ring-1 focus:ring-white/30 input-glow-white transition-all duration-200 resize-none min-h-[140px]"
              />
            </div>

            {/* Status Message */}
            {statusMessage.text && (
              <div
                className={`text-sm px-4 py-3 rounded-lg border ${
                  statusMessage.type === 'success'
                    ? 'bg-green-500/10 border-green-500/50 text-green-400'
                    : 'bg-red-500/10 border-red-500/50 text-red-400'
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            {/* Row 4: Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-semibold text-sm md:text-base rounded-lg py-3.5 px-6 hover:bg-[#ececec] transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
