


import { Bars3Icon, HomeIcon, UserIcon, DocumentTextIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [buttonColor, setButtonColor] = useState(false); // State to toggle button color

    const handleButtonClick = () => {
        setButtonColor(!buttonColor); // Toggle the color state
    }

    return (
        <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-br from-blue-900 to-black" >
            {/* Logo */}
            <a className="font-bold text-2xl text-white transition-colors duration-300 ml-[8%]" href="#">Umaivanan</a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex justify-center space-x-8 flex-grow">
                <ul className="flex text-lg text-white font-medium space-x-6">
                    <li><a href="/" className="flex items-center hover:text-primary transition-colors duration-300"><HomeIcon className="h-5 w-5 mr-2" /> Home</a></li>
                    <li><a href="/#about" className="flex items-center hover:text-primary transition-colors duration-300"><UserIcon className="h-5 w-5 mr-2" /> About</a></li>
                    <li><a href="/#projects" className="flex items-center hover:text-primary transition-colors duration-300"><DocumentTextIcon className="h-5 w-5 mr-2" /> Projects</a></li>
                    <li><a href="/#resume" className="flex items-center hover:text-primary transition-colors duration-300"><DocumentTextIcon className="h-5 w-5 mr-2" /> Resume</a></li>
                    <li><a href="/#contact" className="flex items-center hover:text-primary transition-colors duration-300"><PhoneIcon className="h-5 w-5 mr-2" /> Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Navigation */}
            {toggleMenu && (
                <nav className="absolute top-0 left-0 w-full h-full bg-white shadow-lg md:hidden z-50">
                    <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col items-center justify-center h-full text-lg text-gray-800 font-semibold space-y-6">
                        <li><a href="/" className="flex items-center hover:text-primary transition-colors duration-300"><HomeIcon className="h-5 w-5 mr-2" /> Home</a></li>
                        <li><a href="#about" className="flex items-center hover:text-primary transition-colors duration-300"><UserIcon className="h-5 w-5 mr-2" /> About</a></li>
                        <li><a href="#projects" className="flex items-center hover:text-primary transition-colors duration-300"><DocumentTextIcon className="h-5 w-5 mr-2" /> Projects</a></li>
                        <li><a href="#resume" className="flex items-center hover:text-primary transition-colors duration-300"><DocumentTextIcon className="h-5 w-5 mr-2" /> Resume</a></li>
                        <li><a href="#contact" className="flex items-center hover:text-primary transition-colors duration-300"><PhoneIcon className="h-5 w-5 mr-2" /> Contact</a></li>
                    </ul>
                </nav>
            )}

            {/* Mobile Menu Icon */}
            <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
                <Bars3Icon className="text-primary h-8 w-8 transition-transform duration-300 transform hover:scale-125" />
            </button>

            {/* New Button with Toggle Color */}
            <button 
                onClick={handleButtonClick} 
                className={`px-6 py-2 rounded-full mr-[7%] text-white transition-colors duration-300 ${buttonColor ? 'bg-gray-800' : 'bg-gray-800'}`}
            >
                Click Me
            </button>
        </header>
    )
}
