// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity  ^0.8.9;

contract CrowdFunding {
	struct Campaign {
		address owner;
		string title;
		string description;
		uint256 target;
		uint256 amountCollected;
		uint256 deadline;
		address[] donators;
		uint256[] donations;
	}
	mapping (uint256 => Campaign) public campaigns;
}