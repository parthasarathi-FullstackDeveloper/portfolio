import websiteImg1 from '../assets/hotel.jpeg';
import websiteImg2 from '../assets/Login.png';
import websiteImg3 from '../assets/race.jpeg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Hotel Management Website. Built with React js, Spring boot, Java, MySql',
                link: 'https://github.com/parthasarathi-FullstackDeveloper/hotel_Management.git'
            },
            {
                image: websiteImg2,
                description: 'Secure Login Page .Build With Java, SpringBoot, React js, My Sql',
                link: 'https://github.com/parthasarathi-FullstackDeveloper/UUID-Generator.git'
            },
            {
                image: websiteImg3,
                description: 'LapCount Application . Build With Java, Spring Boot, React js, My Sql',
                link: 'https://github.com/parthasarathi-FullstackDeveloper/LapCount.git'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React,CSS, Java and Spring Boot. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}