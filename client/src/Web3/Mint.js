import React, { Component } from "react";
import Web3 from "web3";
import Frog from "../contracts/Frog.json";
import getWeb3 from "./getWeb3";
// import NFTRow from "../components/NFTRow";
import { Button } from '../components/styles/Button.styled'
import MembersOnly from '../components/MembersOnly';

class Mint extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      const web3socket = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:7545'));

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Frog.networks[networkId];
      const instance = new web3.eth.Contract(
        Frog.abi,
        deployedNetwork && deployedNetwork.address,
      );

      const socketInstance = new web3socket.eth.Contract(
        Frog.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      const currentSupply = parseInt(await instance.methods.currentSupply().call())

      this.setState({ web3, accounts, contract: instance, currentSupply, quantity: 1 });

      const component = this

      socketInstance.events.Transfer({
        fromBlock: 0
      }, function (error, event) {
        if (error) console.log(error)
        // componentState
        let tokenId = event.returnValues.tokenId
        if(parseInt(tokenId) > parseInt(currentSupply))
        component.setState({ currentSupply: tokenId })
      })
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

async mintNFT(e) {
  e.preventDefault()

  const {accounts, contract, web3, quantity} = this.state

  let price = 0.05 * quantity;

  await contract.methods.purchase(quantity).send({
    from: accounts[0],
    value: web3.utils.toWei(String(price), 'ether')
  })
}

setQuantity(e){
  this.setState({quantity: e.target.value})
}

nftIDs() {
  let ids = [...Array(parseInt(this.state.currentSupply) + 1).keys()]
  ids.shift()
  return ids
}

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
     <>
        {this.state.currentSupply === 0 ? (
          <>
          <h2>Well, this is sad.</h2>
          <h3> You own zero NFTs.</h3>
          <select name="count" id="count" onChange={this.setQuantity.bind(this)} value={this.value}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>&nbsp;
        <Button href="#" className="MintNowBtn" onClick={this.mintNFT.bind(this)}>Mint {this.state.quantity} Now</Button>
        {/* <br /> */}
          </>
        ) : this.state.currentSupply === 1 ? (
          <>
          <h3> You own {this.state.currentSupply} NFT</h3>
          <select name="count" id="count" onChange={this.setQuantity.bind(this)} value={this.value}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>&nbsp;
        <Button href="#" className="MintNowBtn" onClick={this.mintNFT.bind(this)}>Mint {this.state.quantity} Now</Button>
        {/* <br /> */}
          <MembersOnly />
          </>
        ) : (
          <>
          <h3> You own {this.state.currentSupply} NFTs</h3>
          <select name="count" id="count" onChange={this.setQuantity.bind(this)} value={this.value}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>&nbsp;
        <Button href="#" className="MintNowBtn" onClick={this.mintNFT.bind(this)}>Mint {this.state.quantity} Now</Button>
        {/* <br /> */}
          <MembersOnly />
          </>
        )}
       

        {/* <table>
          <thead>
          <tr>
            <th>
              Token ID
            </th>
            <th>
              Owner Address
            </th>
          </tr>
          </thead>
          <tbody>
            {this.nftIDs().map((id) => <NFTRow id={id} key={id} contract={this.state.contract}/>)}
          </tbody>
        </table> */}
        </>
    );
  }
}

export default Mint;
