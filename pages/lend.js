import { use, useState } from 'react'
import NavBar from './components/navbar'
import { TailSpin } from 'react-loader-spinner';
import { connect } from "@argent/get-starknet"
import { Contract } from 'starknet';
import mainStrk from '../main-strk';
import Web3 from 'web3';
import tokenStrk from '../token-strk';
export default function Borrow(){
    const [isLoading, setLoadin] = useState(false)
    const [isConnected, setIsConnected] = useState(false)
    const [val, setVal] = useState("")
    return(
        <div>
            <NavBar />
            <div className='flex justify-center items-center flex-col m-20'>
                <div className="text-5xl logo p-20 pb-10">
                    <p>To Lend 💰</p>
                </div>
                {!isConnected && !isLoading && (<button className="text-white rounded-lg bg-black/90 hover:bg-black/80 active:bg-white/10 focus:none p-3 px-5 m-3" onClick={async ()=>{
                    setLoadin(true)
                    let starknet = await connect({ showList: false })
                    await starknet.enable()
                    if(starknet.isConnected){
                        window.starknet_ = starknet;
                        setIsConnected(true)
                        return;
                    }
                }}>Connect ArgentX
                </button>)}
                {!isConnected && isLoading && (<div className="flex justify-center">
                    <TailSpin
                        height="80"
                        width="80"
                        color="#000000"
                        ariaLabel="tail-spin-loading"
                        radius="0.5"
                        className="text-black rounded-lg bg-white hover:bg-white active:bg-white focus:none p-3 px-5 m-3"/> 
                </div>)}
                {isConnected && (
                    <div  style={{display:'flex'}}>
                            <input type={'text'} onChange={(e)=>{
                                setVal(e.target.value)
                            }} style={{fontSize:24, borderColor:'black', borderWidth:4, padding:5}} placeholder={'Stake Amount in ETH'}  />
                            <button
                                type="button"
                                className="text-white rounded-lg bg-black/90 hover:bg-black/80 active:bg-white/10 focus:none p-3 px-5 m-3"
                                onClick={async ()=>{
                                    //window.starknet
                                    const erc20 = new Contract(tokenStrk.abi, "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7", window.starknet.provider);
                                    erc20.connect(window.starknet_.account);
                                    const gw = new Contract(mainStrk.abi, "0x0293db72cad0f062c08005ad1d10178c2646345bfeeaf845366ac84a56b8dd2f", window.starknet.provider);
                                    gw.connect(window.starknet_.account);
                                    const x  = await erc20.approve( '0x0293db72cad0f062c08005ad1d10178c2646345bfeeaf845366ac84a56b8dd2f', [Web3.utils.toWei(val),'0']);
                                    console.log(x)
                                    //await window.starknet_.waitForTransaction(mintTxHash);
                                    const {transaction_hash} = await gw.stake([Web3.utils.toWei(val),'0'])
                                    //console.log(y)
                                    alert(`Amount staked TxHash: ${transaction_hash}`)
                                    //await window.starknet_.waitForTransaction(mintTxHash1);
                                }}>
                                Stake
                            </button>
                    </div>
                )}
            </div>
        </div>
    )
    
}