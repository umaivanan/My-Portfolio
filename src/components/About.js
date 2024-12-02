import { FaSchool, FaChalkboardTeacher, FaCode, FaLanguage } from 'react-icons/fa'; // React icons for the section
import AboutImg from '../assets/IMG_2320__1_-removebg-preview.png';

export default function About() {
    return (
        <section
            className='flex flex-col md:flex-row bg-light-blue px-5 py-10 animate-fade-in bg-gradient-to-br from-blue-900 to-black'
            id='about'
        >
            {/* Left Side Image Section */}
            <div className="md:w-1/2 relative z-10">
                        <div className="relative">
                            {/* Gradient Background with blue + White Effect */}
                            <div 
                                // className="absolute -inset-4 bg-gradient-to-br from-blue-800 via-white to-blue-300 rounded-full blur-xl animate-pulse"
                            />
                            <img
                                className="relative rounded-full shadow-2xl transform hover:scale-110 ml-[20%] mt-[10%] transition-transform duration-500 animate-float"
                                src={AboutImg}
                                alt="Hero Image"
                                style={{ width: '100%', maxWidth: '500px', height: 'auto' }} // Increased size
                            />
                        </div>
                    </div>
            {/* Right Side Text Section */}
            <div
                className='md:w-1/2 flex flex-col justify-center mr-[8%] animate-slide-right'
                data-aos='fade-left'
                data-aos-duration='1000'
            >
                <div className='flex flex-col justify-center text-white'>
                    {/* Main Heading */}
                    <h1
                        className='text-5xl border-b-2 border-primary mb-5 ml-[34%] w-fit font-bold animate-bounce text-center'
                    >
                        About Me
                    </h1>

                    {/* Subheading in the center */}
                    <h2 className='text-2xl text-center font-semibold mb-8'>
                        A Passionate Learner and Developer
                    </h2>

                    {/* Short Introduction Text */}
                    <p className='text-lg text-center mb-6'>
                        I am a dedicated individual with a strong passion for learning and technology. My journey from biology to full-stack development has been challenging yet rewarding. Below, you can find more about my education, skills, and experiences.
                    </p>

                    {/* List of Points */}
                    <ul className='space-y-6 text-lg'>
                        {/* Point 1 - Education */}
                        <li className='flex items-center justify-center'>
                            <FaSchool className='mr-3 text-2xl' />
                            <span className='text-xl font-semibold'>
                                Education: 
                            </span>
                        </li>
                        <li className='text-center'>
                            <span>
                                I studied at St. John's College and completed my Advanced Level in the Biology field, achieving three credit passes.
                            </span>
                        </li>

                        {/* Point 2 - Language Skills */}
                        <li className='flex items-center justify-center'>
                            <FaLanguage className='mr-3 text-2xl' />
                            <span className='text-xl font-semibold'>
                                Language Skills: 
                            </span>
                        </li>
                        <li className='text-center'>
                            <span>
                                After completing my studies, I focused on improving my language skills and successfully completed the International English Language Testing System (IELTS) Academic, which helped me improve my English skills.
                            </span>
                        </li>

                        {/* Point 3 - Entering IT */}
                        <li className='flex items-center justify-center'>
                            <FaCode className='mr-3 text-2xl' />
                            <span className='text-xl font-semibold'>
                                Entering IT: 
                            </span>
                        </li>
                        <li className='text-center'>
                            <span>
                                Driven by my passion for technology, I transitioned into the IT field. I joined Uki Coding School, where I struggled initially but eventually succeeded with their guidance.
                            </span>
                        </li>

                        {/* Point 4 - Projects */}
                        <li className='flex items-center justify-center'>
                            <FaChalkboardTeacher className='mr-3 text-2xl' />
                            <span className='text-xl font-semibold'>
                                Projects: 
                            </span>
                        </li>
                        <li className='text-center'>
                            <span>
                                During my studies, I worked on numerous projects that helped me develop my full-stack development skills. I successfully completed every project with determination and hard work.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
