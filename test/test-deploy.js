const hre = require("hardhat");
const { expect, assert } = require("chai");
describe("SimpleStorage", () => {
  let simpleStorage;
  beforeEach(async () => {
    const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorage.deploy();
  });
  it("should give default Person object", async () => {
    const person = await simpleStorage.viewPersonAt(0);
    console.log("====================================");
    console.log({ person });
    console.log("====================================");

    // Both assert or expect can be used
    assert.equal(person.age, 0);
    expect(person.age).equals(0);
  });
  it("should add Person to people", async () => {
    const addedperson = await simpleStorage.addPersonToList("Jane", 20);
    await addedperson.wait();
    const person = await simpleStorage.viewPersonAt(0);
    console.log("====================================");
    console.log({ person });
    console.log("====================================");
    assert.equal(person.age, 20);
    assert.equal(person.name, "Jane");
  });
});
