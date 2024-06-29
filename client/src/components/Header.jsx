import {FaSearch} from 'react-icons/fa' ;
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-primary shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
                <span className='text-secondary font-roboto'>Midtown</span>
                <span className='text-slate-100 font-roboto'>Housing</span>
            </h1>
            </Link>
            <form className= 'bg-white p-4 rounded-lg flex items-center'>
                <input type='text' 
                placeholder='Search...'
                className='bg-transparent focus:outline-none w-64 sm:w24'/>
                <FaSearch className='text-light-gray' />
            </form>
            <ul className='flex gap-4'>
                    <Link to='/'>
                <li className='hidden sm:inline text-creme hover:underline'>Home</li>
                    </Link>
                    <Link to='/about'>
                <li className='hidden sm:inline text-creme hover:underline'>About</li>
                    </Link>
                    <Link to='/sign-in'>
                <li className='text-creme hover:underline'>Sign in</li>
                    </Link>
            </ul>
        </div>
    </header>
  )
}
