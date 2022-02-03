// import { useStore } from 'vuex'
import Web3 from "web3";

// TODO: Load urls via dotenv (see api.js example)

// RPC Alternative: https://www.alchemy.com/

const nodes = [{
    "test_0":"https://rpc-mumbai.matic.today",
    // Other Testnet RPC's. Only if above fails
    "test_1":"https://matic-mumbai.chainstacklabs.com",
    "test_2":"https://rpc-mumbai.maticvigil.com",
    "test_3":"https://matic-testnet-archive-rpc.bwarelabs.com",
    
    "main_0":"https://polygon-rpc.com/",
    // Other Mainnet RPC's. Only if above fails
    "main_1":"https://rpc-mainnet.matic.network",
    "main_2":"https://matic-mainnet.chainstacklabs.com",
    "main_3":"https://rpc-mainnet.maticvigil.com",
    "main_4":"https://rpc-mainnet.matic.quiknode.pro",
    "main_5":"https://matic-mainnet-full-rpc.bwarelabs.com"
}]
const NODE_URL = nodes[0]["test_1"];
const provider = new Web3.providers.HttpProvider(NODE_URL);
const web3 = new Web3(provider);
// const web3 = new Web3(window.ethereum);

const contractABI = require("../contract-abi.json");
const contractAddress = "0x35301C3527B99bd75bf2e01e3d7D5612495C3295"

export const myabi = contractABI;

export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "👆🏽 Write a message in the text-field above.",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
        return {
            address: "",
            status: "You must install Metamask, a virtual Ethereum wallet, in yourbrowser."
        };
    }
};

export async function loadContract() {
    return new Web3.eth.Contract(contractABI, contractAddress);
}

export const _mintNFT = async (tokenId, amount, toHolder) =>{
    if(!tokenId || tokenId == "" || tokenId == null){
        return {
            success: false,
            status: "Please provide tokenId"
        }
    }else if(amount <= 0){
        return {
            success: false,
            status: "Please enter amount > 0"
        }
    }

    window.contract = await new web3.eth.Contract(contractABI, contractAddress);
    const transactionParams = {
        to: contractAddress,
        from: window.ethereum.selectedAddress,
        data: window.contract.methods
            .mint(toHolder, tokenId, amount, web3.utils.asciiToHex(0))
            .encodeABI(),
    }

    try{
        const txHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParams]
        });
        
        return {
            success: true,
            status:
            "✅ Check out your transaction on Etherscan: https://mumbai.polygonscan.com/tx/" +
            txHash,
        }
    }catch(e){
        return {
            success: false,
            status: "😥 Something went wrong: " + e.message,
        }
    }
}

export const mintNFT = async (tokenId, amount) =>{
    console.log("token id: "+tokenId.toString())
    console.log("amount: "+amount.toString())
    // if(!tokenId || tokenId == "" || tokenId == undefined){
    //     return {
    //         success: false,
    //         status: "Please provide tokenId"
    //     }
    if(amount <= 0){
        return {
            success: false,
            status: "Please enter amount > 0"
        }
    }

    window.contract = await new web3.eth.Contract(contractABI, contractAddress);
    const transactionParams = {
        nonce: '0x00', // ignored by MetaMask
        gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
        gasLimit: 200000,
        // gas: '0x186A0', // customizable by user during MetaMask confirmation.
        gas: '0x61A8', // customizable by user during MetaMask confirmation.
        to: contractAddress,
        from: window.ethereum.selectedAddress,
        value: '0x00', // Only required to send ether to the recipient from the initiating external account.
        data: window.contract.methods
            .mintNFT(window.ethereum.selectedAddress, tokenId, amount)
            .encodeABI(),
    }

    try{
        const txHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParams]
        });
        
        return {
            success: true,
            status:
            "✅ Check out your transaction on Etherscan: https://mumbai.polygonscan.com/tx/" +
            txHash,
        }
    }catch(e){
        return {
            success: false,
            status: "😥 Something went wrong: " + e.message,
        }
    }
}

export const showTokenAmount = async (tokenId) =>{
    if(!tokenId || tokenId == "" || tokenId == null){
        return {
            success: false,
            status: "Please provide tokenId"
        }
    }

    window.contract = await new web3.eth.Contract(contractABI, contractAddress);
    try{

        console.log("call..");
        const addr = window.ethereum.selectedAddress;
        return await window.contract.methods.balanceOf(addr, tokenId).call({"from":addr})
        .then(function(result){
            return {
                success: true,
                status:
                "Balance of " + tokenId.toString() + " is " + result
            }
        });
    }catch(e){
        return {
            success: false,
            status: "😥 Something went wrong: " + e.message,
        }
    }
}

export const NFTReserved = async (tokenId) =>{
    if(!tokenId || tokenId == "" || tokenId == null){
        return {
            success: false,
            status: "Please provide tokenId"
        }
    }

    console.log("address:")
    console.log(contractAddress)
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);
    try{
      
        // const addr = window.ethereum.selectedAddress;
        return await window.contract.methods.NFTReserved(tokenId).call()
        .then(function(result){
            return {
                success: true,
                status:
                "Token Id '" + tokenId.toString() + "' exist: " + result
            }
        });
    }catch(e){
        return {
            success: false,
            status: "😥 Something went wrong: " + e.message,
        }
    }
}

export const NFTUri = async (tokenUri) =>{
    if(!tokenUri || tokenUri == "" || tokenUri == null){
        return {
            success: false,
            status: "Please provide tokenUri"
        }
    }

    try{

        return fetch(tokenUri, { method: "GET" })
        .then((response) => {
            if(response.status == 200)
                return response.json();
            return null;
        });
      
        // // const addr = window.ethereum.selectedAddress;
        // return await window.contract.methods.NFTReserved(tokenId).call()
        // .then(function(result){
        //     return {
        //         success: true,
        //         status:
        //         "Token Id '" + tokenId.toString() + "' exist: " + result
        //     }
        // });
    }catch(e){
        return {
            success: false,
            status: "😥 Something went wrong: " + e.message,
        }
    }
}