// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import "forge-std/console.sol";
import {Owner} from "../src/Owner.sol";

contract OwnerScript is Script {
	Owner public ownerContract;

	function run() external {
		vm.startBroadcast();

		ownerContract = new Owner();

		vm.stopBroadcast();

		console.log("Owner deployed at:", address(ownerContract));
	}
}
