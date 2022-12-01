module.exports = {
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_starknetCore",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_endpointGateway",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "l1ERC721",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "l2ERC721",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "l1Account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "BridgeFromStarknet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "l1ERC721",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "l2Account",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "BridgeToStarknet",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC721",
          "name": "_l1TokenContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_l2TokenContract",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "bridgeFromStarknet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC721",
          "name": "_l1TokenContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_l2TokenContract",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "bridgeFromStarknetAvailable",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC721",
          "name": "_l1TokenContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_account",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_floorprice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_requiredtoken",
          "type": "uint256"
        }
      ],
      "name": "bridgeToStarknet",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "gateway",
          "type": "uint256"
        }
      ],
      "name": "changegateway",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "starknet",
          "type": "address"
        }
      ],
      "name": "changestark",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC721",
          "name": "_l1TokenContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_l2TokenContract",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "debug_bridgeFromStarknetAvailable",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "endpointGateway",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "starknetCore",
      "outputs": [
        {
          "internalType": "contract IStarknetCore",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
}
