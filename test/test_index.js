var localhost = "http://127.0.0.1:8545"

var account_1 = "0xD6658Be74Ed0Ba9B4ce62E8fdDC64513F55A4548"

var contractAddress = "0x1617C088568003E70D68b484B87D59bCa4829F71"
var contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
var data = "608060405234801561001057600080fd5b5060e38061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80636057361d14602d575b600080fd5b60436004803603810190603f91906085565b6045565b005b8060008190555050565b600080fd5b6000819050919050565b6065816054565b8114606f57600080fd5b50565b600081359050607f81605e565b92915050565b6000602082840312156098576097604f565b5b600060a4848285016072565b9150509291505056fea264697066735822122005cc7c1e70f91b588a6a79e86e81ec5d15f61559cf224e68200e44b8941fc50164736f6c63430008120033"

var Web3 = require("web3")
var web3 = new Web3(new Web3.providers.HttpProvider(localhost))

var Storage_Contract = new web3.eth.Contract(contractABI, contractAddress)

Storage_Contract.options.data = data;
Storage_Contract.methods.store(10).send({ from : account_1}, function (error, result) {
    console.log("结果_store：" + result);
})

// Storage_Contract.methods.retrieve().call({ from : account_1}, function(error, result) {
//     console.log("结果_retrieve： " + result);
// })
