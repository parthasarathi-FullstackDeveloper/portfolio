import HeroImg from '../assets/hero.png';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer',
        social: {
        instagram:"https://www.instagram.com/ps_y_to_u?igsh=MWdubHN3aDZ2NmVwZQ==",
            linkedin: 'https://in.linkedin.com/company/jvl-code'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>M</span> Parthasarathi 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
            <a href={config.social.instagram} className='pr-5 hover:text-white'>
  <AiOutlineInstagram size={40} />
</a>
                {/* <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a> */}
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
