import { Link } from 'react-router-dom';

import Header from '../components/Header';

export default function LandingPage() {
    return (
        <>
            <Header />
            <div className="bg-[url('../assets/bg-image.jpeg')] w-[100vw] h-[100vh] flex items-center ,md:mt-[4.5rem] justify-center ">
                <div className="w-50 p-6 rounded-md">
                    <h2 className="text-3xl font-bold h-fit py-4 text-center">Lorem Ipsum</h2>
                    <p className="text-center py-2 text-wrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <div className='md:flex text-center justify-center contents-center my-4'>
                        <Link to='/simulation' className='block max-w-fit border-2 md:mx-3 bg-sky-600 border-black text-white font-[Poppins] py-2 px-6 rounded my-2 hover:bg-sky-400 duration-200 mx-auto md:my-0'>
                            Get Started
                        </Link>
                        <Link to='/' className='block max-w-fit border-2 bg-white border-black md:mx-3 text-sky-600 font-[Poppins] py-2 px-6 rounded my-3 hover:bg-gray-400 hover:text-sky-800 duration-200 mx-auto md:my-0'>
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}