import { useEffect } from "react"

export default function NftCard({ metadata, symbol, token_address, token_id }){
    useEffect(()=>{
        console.log('here')
    },[])
    return (
        <div className="glass_card font p-5" style={{maxWidth:300}}> 
            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg" className="bg-clip-text rounded-lg" ></img>
            <h1 className="text-2xl py-4 pb-1 px-2">{symbol}</h1>
            <p className="p-1 px-2 pb-0 text-black/70 break-all">NFT Address: {token_address}</p>
            <p className="p-1 px-2 text-black/70">TokendID: {token_id}</p>
            <div className="flex justify-center">
            <button onClick={()=>{
                
            }} className="text-white rounded-lg bg-black/90 hover:bg-black/80 active:bg-white/10 focus:none p-3 px-5 m-3">
                Collateralize
            </button>
            </div>
        </div>
    )
}