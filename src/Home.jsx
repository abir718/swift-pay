import React from 'react'
import HomeContent from './HomeContent'
import { Outlet } from 'react-router-dom'


function Home() {
    return (
            <div>
                <HomeContent></HomeContent>
                <Outlet></Outlet>
            </div>
    )
}

export default Home