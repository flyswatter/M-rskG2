/*
Generated by Mix
Thu Aug 18 00:09:29 2016 GMT+0200
*/

var Shipment = {
	"abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"stakeholder\",\"type\":\"address\"}],\"name\":\"whitelistStakeholder\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"whiteList\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"documentId\",\"type\":\"uint256\"},{\"name\":\"newFingerprint\",\"type\":\"string\"}],\"name\":\"amendDocument\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"documents\",\"outputs\":[{\"name\":\"author\",\"type\":\"address\"},{\"name\":\"fingerprint\",\"type\":\"string\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"admin\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"inputs\":[],\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"stakeholder\",\"type\":\"address\"}],\"name\":\"StakeholderWhitelisted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"documentId\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"author\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"newFingerprint\",\"type\":\"string\"}],\"name\":\"DocumentAmended\",\"type\":\"event\"}]",
	"codeHex": "0x606060405260018054600160a060020a031916331790556103ac806100246000396000f3606060405260e060020a600035046326ea4bf68114610047578063372c12b11461006957806355389c3e14610084578063c2ed2b05146100f4578063f851a4401461011a575b005b6100456004356001543390600160a060020a038281169116146101ca57610002565b61012c60043560006020819052908152604090205460ff1681565b602060248035600481810135601f810185900490940260809081016040526060858152610045958335959394604494929392019181908382808284375094965050505050505033600160a060020a03811660009081526020819052604081205460ff16151514156102cc57610002565b61013860043560026020526000908152604090208054600160a060020a03169060010182565b6101c0600154600160a060020a031681565b15156060908152602090f35b60608281526040608090815282546002600019600183161561010002019091160460a081905260c090849080156101b05780601f10610185576101008083540402835291602001916101b0565b820191906000526020600020905b81548152906001019060200180831161019357829003601f168201915b5050935050505060405180910390f35b6060908152602090f35b600160a060020a038216600081815260208181526040909120805460ff1916600117905560609182527f078cba54125a07a375c22702c366fcb4d1029bafd27b1d6e93d813b1d103b6cb91a15050565b50509050507f2ebfece40746549a3b7549b22060ca8d895e54ac0096edfb3aaee7db4acdc0ee8333846040518084815260200183600160a060020a03168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156102b85780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1505050565b6040805180820182528281526020818101858152600087815260028084529481208451815473ffffffffffffffffffffffffffffffffffffffff191617815591518051600184810180548186529487902097989597909691851615610100026000190190941694909404601f9081018590048401949193929091019083901061037857805160ff19168380011785555b5061021a9291505b808211156103a85760008155600101610364565b8280016001018555821561035c579182015b8281111561035c57825182600050559160200191906001019061038a565b509056",
	"name": "Shipment"
}

