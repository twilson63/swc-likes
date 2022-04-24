import Arweave from 'arweave'
import { SmartWeaveNodeFactory, LoggerFactory } from 'redstone-smartweave'
import fs from 'fs'

const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
})

LoggerFactory.INST.logLevel('error');
const smartweave = SmartWeaveNodeFactory.memCached(arweave)

const wallet = JSON.parse(fs.readFileSync('./mywallet.json', 'utf-8'))
const contract = fs.readFileSync('./contract.js', 'utf-8')
const state = fs.readFileSync('./state.json', 'utf-8')

const id = await smartweave.createContract.deploy({
  wallet,
  initState: state,
  src: contract
})

console.log(id)