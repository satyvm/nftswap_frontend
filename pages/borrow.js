import { useState } from 'react'
import NavBar from './components/navbar'
import ConnectMeta from './components/connectMeta'

export default function Borrow(){
    return(
        <div>
            <NavBar />
            <div className='flex justify-center items-center flex-col m-20'>
                <div className="text-5xl logo p-20 pb-10">
                    <p>To Borrow 🤑</p>
                </div>
                <ConnectMeta />
            </div>
        </div>
    )
    
}