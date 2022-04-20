import Arweave from 'arweave'
import { SmartWeaveNodeFactory, LoggerFactory } from 'redstone-smartweave'
import fs from 'fs'

const arweave = Arweave.init({
  host: '127.0.0.1',
  port: 1984,
  protocol: 'http'
})

LoggerFactory.INST.logLevel('error');
const smartweave = SmartWeaveNodeFactory.memCached(arweave)

const wallet = JSON.parse(fs.readFileSync('./mywallet.json', 'utf-8'))

const contract = smartweave
  .contract('Gpw6tWO7eVsVqakRxHo9eqkxCt7zhjiILPPzoAW1jec')
  .connect(wallet);

// Read state
const state = await contract.readState();
console.log("State before any interactions");
console.log(JSON.stringify(state, null, 2));

await contract.writeInteraction({ function: 'like' })
await arweave.api.get('mine')

// Using generatedAssets contract function
const { result } = await contract.viewState({
  function: "balance"
});

console.log(result)
