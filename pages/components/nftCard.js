import { useEffect, Fragment, useState  } from "react"
import { Dialog, Transition } from '@headlessui/react'
import SelectNetwork from "./selectNetwork"

export default function NftCard({ metadata, symbol, token_address, token_id }){
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  

    return (
        <div className="glass_card font p-5"> 
            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg" 
            className="bg-clip-text rounded-lg" ></img>
            <h1 className="text-2xl py-4 pb-1 px-2">{symbol}</h1>
            <p className="p-1 px-2 pb-0 text-black/70 break-all"><span className="font-bold">NFT Address: </span>{token_address}</p>
            <p className="p-1 px-2 text-black/70"><span className="font-bold">Tokend ID: </span>{token_id}</p>
            <div className="flex justify-center">
            <button
                type="button"
                onClick={openModal}
                className="text-white rounded-lg bg-black/90 hover:bg-black/80 active:bg-white/10 focus:none p-3 px-5 m-3"
                >
                Collateralize it
            </button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full glass_card max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <div className="">
                        <Dialog.Title
                            as="h3"
                            className="text-3xl px-4 pt-6"
                        >
                            Collateralize {symbol} now.
                        </Dialog.Title>
                        <div className="mt-2 text-sm p-4">
                            <p className="text-black/70 break-all"><span className="font-bold">NFT Address: </span>{token_address}</p>
                            <p className="text-black/70"><span className="font-bold">Tokend ID: </span>{token_id}</p>
                        </div>
                        </div>

                        <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-20">
                            <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V3a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                        </svg>
                        </div>
                        <div className="p-4 pb-10">
                            <SelectNetwork />
                        </div>

                        <div className="mt-2 flex justify-center">
                            <button
                            type="button"
                            className="text-white rounded-lg bg-black/90 hover:bg-black/80 active:bg-white/10 focus:none p-3 px-5 m-3"
                            onClick={closeModal}>
                            Confirm
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
            </div>
        </div>
    )
}