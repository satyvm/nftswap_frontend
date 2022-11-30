import { useState } from 'react'
import NavBar from './components/navbar'
import ConnectArgent from './components/connectArgentx'

export default function Borrow(){
    return(
        <div>
            <NavBar />
            <div className='flex justify-center items-center flex-col m-20'>
                <div className="text-5xl logo p-20 pb-10">
                    <p>To Lend 💰</p>
                </div>
                <ConnectArgent />
            </div>
        </div>
    )
    
}