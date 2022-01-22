import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
    return (
        <>
        <div>
            <Header />

            <Outlet className="mt-5"/>


 
        </div>
        </>
    )
}