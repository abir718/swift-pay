import React from 'react'
import { IoExitOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function HomeContent() {
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
                <p className='text-gray-500'>Enjoy easy and convenient financial services with us. Cashout charge is low.</p>
            </div>
            <div className='mt-4 grid grid-cols-6 w-[90%] mx-auto'>
                <NavLink to="/home/add-money" className={({ isActive }) => `border-2 w-[150px] rounded-lg hover:border-[#0874F2] 
                hover:bg-[#d6e8ff] transition duration-300 ${isActive ? "border-[#0874F2] bg-[#d6e8ff]" : "border-gray-300"}`}>
                    <div className="flex flex-col items-center justify-center gap-2  p-4 ">
                        <img src="/wallet1.png" alt="wallet" />
                        <p className="text-gray-700 font-medium">Add Money</p>
                    </div>
                </NavLink>
                <NavLink to="/home/cashout" className={({ isActive }) => `border-2 w-[150px] rounded-lg hover:border-[#0874F2] 
                hover:bg-[#d6e8ff] transition duration-300 ${isActive ? "border-[#0874F2] bg-[#d6e8ff]" : "border-gray-300"}`}>
                    <div className="flex flex-col items-center justify-center gap-2 p-4">
                        <img src="/send1.png" alt="wallet" />
                        <p className="text-gray-700 font-medium">Cashout</p>
                    </div>
                </NavLink>

                <NavLink to="/home/transfer" className={({ isActive }) => `border-2 w-[150px] rounded-lg hover:border-[#0874F2] 
                hover:bg-[#d6e8ff] transition duration-300 ${isActive ? "border-[#0874F2] bg-[#d6e8ff]" : "border-gray-300"}`}>
                    <div className="flex flex-col items-center justify-center gap-2 p-4">
                        <img src="/money1.png" alt="wallet" />
                        <p className="text-gray-700 font-medium">Transfer Money</p>
                    </div>
                </NavLink>

                <NavLink to="/home/bonus" className={({ isActive }) => `border-2 w-[150px] rounded-lg hover:border-[#0874F2] 
                hover:bg-[#d6e8ff] transition duration-300 ${isActive ? "border-[#0874F2] bg-[#d6e8ff]" : "border-gray-300"}`}>
                    <div className="flex flex-col items-center justify-center gap-2 p-4">
                        <img src="/bonus1.png" alt="wallet" />
                        <p className="text-gray-700 font-medium">Get Bonus</p>
                    </div>
                </NavLink>

                <NavLink to="/home/pay-bill" className={({ isActive }) => `border-2 w-[150px] rounded-lg hover:border-[#0874F2] 
                hover:bg-[#d6e8ff] transition duration-300 ${isActive ? "border-[#0874F2] bg-[#d6e8ff]" : "border-gray-300"}`}>
                    <div className="flex flex-col items-center justify-center gap-2 p-4">
                        <img src="/purse1.png" alt="wallet" />
                        <p className="text-gray-700 font-medium">Pay Bill</p>
                    </div>
                </NavLink>

                <NavLink to="/home/transaction" className={({ isActive }) => `border-2 w-[150px] rounded-lg hover:border-[#0874F2] 
                hover:bg-[#d6e8ff] transition duration-300 ${isActive ? "border-[#0874F2] bg-[#d6e8ff]" : "border-gray-300"}`}>
                    <div className="flex flex-col items-center justify-center gap-2 p-4">
                        <img src="/transaction1.png" alt="wallet" />
                        <p className="text-gray-700 font-medium">Transactions</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default HomeContent