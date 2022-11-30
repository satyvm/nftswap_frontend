import NavBar from "./components/navbar"
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Link from "next/link"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  let [categories] = useState({
    "Borrow": [
      {
        body: 'Get Crypto asap by Collateralizing your NFT',
        link: '/borrow',
        button: 'Borrow Now'
      }
    ],
    "Lend": [
      {
        body: 'Get Returns by providing Liquidity',
        link: '/lend',
        button: 'Lend Now'
      }
    ]
  })

  return (
    <div >
      <NavBar />
      <div className="flex justify-center items-center mt-20">
        <div className="flex flex-col items-center">
          <div className="p-10">
            <div className="text-5xl logo p-20 pb-3">
              <p>NFTRokz 🤘</p>
            </div>
            <div className="text-2xl font p-10 pt-0">
              <p>Your Bear 🐻 Market Partner</p>
            </div>
          </div>
          <div className="w-full max-w-md px-2 pt-20 pb-0 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-black/75 p-1 focus:none">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        'w-full text-2xl rounded-lg py-4 font-medium focus:none',
                        selected
                          ? 'bg-white'
                          : 'text-white hover:bg-white/10 hover:text-white'
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      'bg-white p-2 flex justify-center font font-medium'
                    )}
                  >
                    <ul>
                      {posts.map((post) => (
                        <li
                          key={post.body}
                          className="relative p-2"
                        >
                          <h3 className="text-1xl leading-5">
                            {post.body}
                          </h3>
                          <div className="flex justify-center pt-3">
                            <Link href={post.link}>
                              <button className="text-white rounded-lg bg-black/90 hover:bg-black/80 active:bg-white/10 focus:none p-3 px-5 m-3">
                               {post.button}
                              </button>
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                    
                  </Tab.Panel>
                  
                ))}
              </Tab.Panels>
            </Tab.Group>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}