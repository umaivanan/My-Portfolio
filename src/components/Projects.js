import websiteImg1 from '../assets/Screenshot from 2024-11-27 21-03-21.png';
import websiteImg2 from '../assets/Screenshot from 2024-11-27 21-03-54.png';
import websiteImg3 from '../assets/Screenshot from 2024-11-28 10-30-35.png';
import websiteImg4 from '../assets/Screenshot from 2024-11-28 18-45-20.png';  // New Image 4
import websiteImg5 from '../assets/Screenshot from 2024-11-28 18-53-25.png';  // New Image 5

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Learning platform. Built with MERN Stack.',
                link: 'https://swapsmart.vercel.app/'
            },
            {
                image: websiteImg2,
                description: 'AI summarizer',
                link: 'https://pdf-summarizer-umber.vercel.app/'
            },
            {
                image: websiteImg3,
                description: 'Basic frontend website. Built with HTML, CSS, and JavaScript.',
                link: 'https://umaivanan.github.io/movie/'
            },
            {
                image: websiteImg4,
                description: 'Quizz collection Buil with html,css,javascript.',
                link: 'https://umaivanan.github.io/quizapp/'  // Add the link for this project
            },
            {
                image: websiteImg5,
                description: 'Resatarunt Home page. Builtwith html,css.',
                link: 'https://umaivanan.github.io/Foodinn/'  // Add the link for this project
            }
        ]
    }

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-gradient-to-br from-blue-900 to-black text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-6xl border-b-4 border-secondary mb-5 ml-[8%] w-[150px] font-bold">Projects</h1>
                    <p className="text-3xl ml-[13%]" >These are some of my best projects. I have built these with React and MERN. Check them out.</p>
                </div>
            </div>
            <div className="w-full">
                {/* Use flex-wrap to ensure proper wrapping on smaller screens */}
                <div className='flex flex-wrap justify-center gap-5 px-10'>
                    {config.projects.map((project, index) => (
                        <div key={index} className='relative max-w-[600px] w-full md:w-[600px] bg-black/30 rounded-lg shadow-xl'>
                            <img 
                                className='h-[400px] w-full object-cover rounded-t-lg' 
                                src={project.image} 
                                alt={`Project ${index + 1}`} 
                            />
                            <div className='p-5'>
                                <p className='text-center mb-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all' target='_blank' href={project.link}>
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
