import { useEffect, useState } from "react"
import Nftcard from "./components/nftcard";
import NavBar from "./components/navbar"

export default function borrow(){
    const [nftList,setNftList] = useState([])
    useEffect(()=>{
        const address = "0xf36F155486299eCAff2D4F5160ed5114C1f66000";
        fetch(`https://deep-index.moralis.io/api/v2/${address}/nft?chain=goerli&&format=decimal&&normalizeMetadata=false`,{
            headers: {
                accept: 'application/json', 
                'X-API-Key': 'RZgl1p2CkA8Nc0U5Nao8GfGTqlmDT3U7GbExOaj0cAAjtIru1fGXyS7jmCdlxnDQ'
            }
        }).then((res)=>res.json())
        .then((res)=>setNftList(res.result))
        .catch((e)=>{
            console.error(e)
        })
    },[])
    return(
        <div>
            <NavBar />
            <div className="grid grid-cols-4 gap-4" style={{margin:10}}>
                {
                    nftList.map((nft, i)=>{
                        return (
                            <Nftcard key={i} metadata={nft.metadata} symbol={nft.symbol} token_address={nft.token_address} token_id={nft.token_id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}