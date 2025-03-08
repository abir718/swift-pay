import React from 'react'
import { IoExitOutline } from "react-icons/io5";

function Home() {
    return (
        <div className='lg:w-[80%] mx-auto'>
            <div className='flex items-center  justify-between  mt-4'>
                <div className='flex items-center gap-4'>
                    <img className='w-16' src="/swiftlogo.png" alt="" />
                    <div>
                        <p className='text-xl font-medium'>4500$</p>
                        <p className='text-gray-500'>Available Balance</p>
                    </div>
                </div>

                    <button className='flex items-center gap-2 border-2 rounded-lg w-fit p-2 border-gray-500 text-gray-500 cursor-pointer hover:bg-gray-100 transition duration-300'><IoExitOutline className='size-8' />Log Out</button>
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl font-bold'>Welcome to SwiftPay!</h1>
                <p className='text-gray-500'>Enjoy easy and convenient financial services with us. Cashout charge is low and </p>
            </div>
        </div>
    )
}

export default Home