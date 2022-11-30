import { useEffect } from "react"

export default function Nftcard({ metadata, symbol, token_address, token_id }){
    useEffect(()=>{
        console.log('here')
    },[])
    return (
        <>
            <h1>{symbol}</h1>
        </>
    )
}