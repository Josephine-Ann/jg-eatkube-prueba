import React from 'react';
import Logo from '../logo.svg'

function ToggledSearchBar(props) {
    return (
        <div className='flex flex-col justify-center items-center max-h-[90vh]'>
            <div id="a" className='max-h-[10%] mt-5 flex justify-center items-center'>
                <div id="e" className='flex justify-between'>
                    <span className='border-r-2'><button className='drop-shadow-md bg-gradient-to-r from-[#1B7EC8] to-[#3FA9FB] mx-4 px-8 py-2 text-white rounded-md'>Active</button></span>
                    <span><button className='border-t-[0.09rem] drop-shadow-md bg-white mx-4 px-8 py-2 rounded-md'>Inactive</button></span>
                </div>
            </div>
            <div id="b" className='border-t-[0.09rem] max-h-[90%] mt-3 align-middle bg-white h-[25rem] sm:w-[40rem] w-[20rem] max-w-[90%] drop-shadow-md rounded-md flex flex-col justify-center lg:flex-row lg:justify-around lg:items-center'>
                <div id="c" className='flex justify-center items-center'>
                    <img className="h-[15rem]" alt="react-logo" src={Logo} />
                </div>
                <div id="d" className='flex flex-col justify-between items-center'>
                    <input className='border-2 my-3' />
                    <button className='font-semibold my-3 drop-shadow-md bg-gradient-to-r from-[#1B7EC8] to-[#3FA9FB] mx-4 px-8 py-2 text-white rounded-md'>ENVIAR</button>
                </div>
            </div>
        </div>


    );
}

export default ToggledSearchBar;