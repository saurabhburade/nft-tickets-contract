//  SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract SimpleStorage {
    struct Person {
        uint256 id;
        string name;
        uint256 age;
    }
    mapping(uint256 => Person) people;
    uint256 public peopleCount = 0;

    function addPersonToList(string calldata _name, uint256 _age) public {
        Person memory newPerson = Person({
            id: peopleCount,
            name: _name,
            age: _age
        });
        people[peopleCount] = newPerson;
        peopleCount++;
    }

    function viewPersonAt(uint256 _index)
        public
        view
        returns (Person memory _person)
    {
        return people[_index];
    }
}
