import { useEffect } from "react"

export default function Nftcard({ metadata, symbol, token_address, token_id }){
    useEffect(()=>{
        console.log('here')
    },[])
    return (
        <div style={{
          borderWidth:3,
          borderColor:'black',
          borderStyle:'solid',
          borderRadius: 30,
          padding:10
        }}> 
            <h1>{symbol}</h1>
            <h2>{token_address}</h2>
            <h3>TokendID: {token_id}</h3>
        </div>
    )
}