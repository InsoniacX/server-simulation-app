import { useState } from 'react'
import Menu from '@mui/icons-material/Menu';

const AdminHeader = () => {
    let Links =[
      { id: 1, name:"Dashboard",link:"/"},
      { id: 2, name:"Links",link:"/"},
      { id: 3, name:"Links",link:"/simulation"},
      { id: 4, name:"Links",link:"/"},
      { id: 5, name:"Links",link:"/"},
    ];
    let [open,setOpen]=useState(false);

  return (
    <div className='w-full fixed top-0 left-0 border-b-2 border-black shadow-lg'>
        <div className='md:flex items-center justify-center bg-blue-400 py-4 md:px-10 px-7'>
            {/* <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
            text-gray-800'>
                Logo
            </div> */}
      
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-2 cursor-pointer md:hidden'>
                <Menu name={open ? 'close':'menu'}/>
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-400 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 ':'top-[-490px]'}`}>
            {
              Links.map((link)=>(
                <li key={link.id} className='md:ml-5 text-md md:my-0 my-7'>
                  <a href={link.link} className='text-gray-800 hover:text-white px-2 pb-1 hover:border-b-2 duration-200'>{link.name}</a>
                </li>
              ))
            }
            </ul>
        </div>
    </div>
  )
}

export default AdminHeader