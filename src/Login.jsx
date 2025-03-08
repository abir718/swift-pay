import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    let routeChange = () => {
        navigate("/home")
    }


    return (
        <div className='bg-gray-100 h-screen flex flex-col items-center justify-center'>
            <img className='w-36 mb-6' src="/swiftlogo.png" alt="" />
            <div className='bg-white w-fit py-4 px-10 rounded-xl'>
                <h1 className='text-2xl text-center font-bold text-[#0874F2] mb-4'>SwiftPay</h1>
                <div className='flex flex-col gap-2'>
                    <p className='font-medium text-lg'>Mobile Number</p>
                    <input className='bg-gray-100 px-4 py-2 rounded-full w-64 border-2 border-gray-200 outline-[#0874F2]' type="text" name="number" id="" placeholder='Enter Mobile Number' />
                    <p className='font-medium text-lg'>Pin Number</p>
                    <input className='bg-gray-100 px-4 py-2 rounded-full w-64 border-2 border-gray-200 outline-[#0874F2]' type="text" name="number" id="" placeholder='Enter pin Number' />
                    <button onClick={routeChange} className='bg-[#0874F2] border-2 border-[#0874F2] text-white rounded-full  w-64 px-4 py-2 cursor-pointer hover:bg-transparent hover:text-[#0874F2] transition duration-300 mt-2 font-medium'>Login</button>
                    </div>

            </div>

        </div>
    );
};

export default Login;