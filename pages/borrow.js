import { useState, useEffect } from 'react'
import NavBar from './components/navbar'
import ConnectMeta from './components/connectMeta'
import NftCard from './components/nftCard'
import { TailSpin } from 'react-loader-spinner';

function ConnectDiv({ isLoading, ...props }) {
    return (
      <div {...props}>
        {isLoading ? <TailSpin
                      height="80"
                      width="80"
                      color="#000000"
                      ariaLabel="tail-spin-loading"
                      radius="0.5"
                      className="text-black rounded-lg bg-white hover:bg-white active:bg-white focus:none p-3 px-5 m-3"
              />  : <ConnectMeta />}
      </div>
    );
}

export default function Borrow(){
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
    
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const [currentAccount, setCurrentAccount] = useState('');
    
    // Implement your connectWallet method here
    const connectWallet = async () => {
        try {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Get MetaMask -> https://metamask.io/");
            return;
        }

        // Fancy method to request access to account.
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        
        // Boom! This should print out public address once we authorize Metamask.
        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]);
        } catch (error) {
        console.log(error)
        }
    }

    const checkIfWalletIsConnected = async () => {
        const { ethereum } = window;

        if (!ethereum) {
        console.log('Make sure you have metamask!');
        return;
        } else {
        console.log('We have the ethereum object', ethereum);
        }

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length !== 0) {
        const account = accounts[0];
        console.log('Found an authorized account:', account);
        setCurrentAccount(account);
        } else {
        console.log('No authorized account found');
        }
    };

    // Render Methods
    const renderNotConnectedContainer = () => (
        <div>
        <ConnectDiv onClick={event => {setIsButtonLoading(true);
        connectWallet();}} isLoading={isButtonLoading}></ConnectDiv>
        </div>
    );
    
    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    const renderConnectedContainer = () =>(
        <div>
            <p>{currentAccount}</p>
        </div>
    )

    function RenderDiv() {
        // console.log(currentAccount);
        return (
            <div>
                {currentAccount ? renderConnectedContainer()
                : renderNotConnectedContainer()}
            </div>
        )
    }    

    return(
        <div>
            <NavBar />
            <div className='flex justify-center items-center flex-col m-20'>
                <div className="text-5xl logo p-20 pb-10">
                    <p>To Borrow 🤑</p>
                </div>
                <RenderDiv/>
            </div>
            
            <div className="grid grid-cols-3 gap-4 m-10">
                {
                    nftList.map((nft, i)=>{
                        return (
                            <NftCard key={i} metadata={nft.metadata} symbol={nft.symbol} token_address={nft.token_address} token_id={nft.token_id}/>
                        )
                    })
                }
            </div>
        </div>
    )
    
}