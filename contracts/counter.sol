// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Counter {
    uint256 private counter = 0;

    function increase() public {
        counter++;
    }

    function decrease() public {
        require(counter > 0, "Counter must be greater than 0");
        counter--;
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }
}