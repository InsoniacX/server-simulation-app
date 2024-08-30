import { Link } from 'react-router-dom';

import Header from '../components/Header';

export default function LandingPage() {
    return (
        <>
            <Header />
            <div className="bg-[url('../assets/bg-image.jpeg')] w-[100vw] h-[100vh] flex items-center ,md:mt-[4.5rem] justify-center ">
                <div className="w-50 p-6 rounded-md">
                    <h2 className="text-3xl font-bold h-fit py-4 text-center">Not Found (404)</h2>
                    <p className="text-center py-2 text-wrap">Halaman ini masih dalam tahap Pengembangan </p>
                    <div className='flex text-center justify-center contents-center'>
                        <Link to='/' className='border-2 bg-sky-600 border-black text-white font-[Poppins] py-2 px-6 rounded my-3 hover:bg-sky-400 duration-200'>
                            Kembali ke Halaman Utama
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}