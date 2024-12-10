import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Parthasarathi. I am a Full stack web developer. I built beautiful Websites with React.js , CSS + Bootstrap',
        line2: 'I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios and many more.',
        line3: 'In backend I know Java , Spring boot ,Spring Micro service , My Sql, and Cassandra'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}