var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Frog = artifacts.require("./Frog.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Frog, 'https://our-url.com/nfts/');
};
