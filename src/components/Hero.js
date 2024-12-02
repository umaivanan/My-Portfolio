import React from 'react';
import HeroImg from '../assets/IMG_2320__1_-removebg-preview.png';
import { AiOutlineGithub, AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'I\'m a Full-stack Developer, creating attractive and functional web applications.',
        social: {
            email: 'https://mail.google.com/gmail/?view=cm&fs=1&to=perinpnanthanumaivanan@gmail.com&su=Subject&body=Message', // Gmail link with pre-filled fields
            github: 'https://github.com/umaivanan', // GitHub link
            linkedin: 'https://www.linkedin.com/in/umaivanan' // LinkedIn link
        }
    }

    return (
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 to-black">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-white/5 grid grid-cols-8 gap-0.5" />
            <div className="absolute h-32 w-full bg-gradient-to-b from-blue-900 to-transparent" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between py-24 md:py-40 gap-12">
                    {/* Text Content */}
                    <div className="md:w-1/2 flex flex-col space-y-8 z-10">
                        <div className="space-y-4">
                            <h1 className="text-white text-6xl md:text-8xl font-hero-font leading-tight animate-fade-in">
                                Hi, <br />
                                I'm <span className="text-white hover:text-blue-500 transition-colors duration-300">
                                    Perinpanathan Umaivanan
                                </span>
                            </h1>
                            <p className="text-3xl md:text-4xl text-blue-200 font-light">
                                {config.subtitle}
                            </p>
                        </div>

                        {/* CTA Button */}
                        <button className="w-fit px-8 py-4 bg-white text-black rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Get In Touch
                        </button>

                        {/* Social Links */}
                        <div className="flex items-center gap-8 pt-6">
                            <a
                                href={config.social.email}
                                className="text-white-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
                                aria-label="Email"
                            >
                                <AiOutlineMail size={50} />
                            </a>
                            <a
                                href={config.social.github}
                                className="text-white-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
                                aria-label="GitHub"
                            >
                                <AiOutlineGithub size={50} />
                            </a>
                            <a
                                href={config.social.linkedin}
                                className="text-white-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <AiOutlineLinkedin size={50} />
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 relative z-10">
                        <div className="relative">
                            {/* Gradient Background with blue + White Effect */}
                            <div 
                                // className="absolute -inset-4 bg-gradient-to-br from-blue-800 via-white to-blue-300 rounded-full blur-xl animate-pulse"
                            />
                            <img
                                className="relative rounded-full shadow-2xl transform hover:scale-110 ml-[20%] transition-transform duration-500 animate-float"
                                src={HeroImg}
                                alt="Hero Image"
                                style={{ width: '100%', maxWidth: '500px', height: 'auto' }} // Increased size
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-blue-900 to-transparent" />
        </section>
    );
}

// TailwindCSS animation styles in the global CSS
const style = `
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

@keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-fade-in {
    animation: fade-in 1s ease-out forwards;
}
`;
