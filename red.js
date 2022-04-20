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
const contract = fs.readFileSync('./contract.js', 'utf-8')
const state = fs.readFileSync('./state.json', 'utf-8')

const id = await smartweave.createContract.deploy({
  wallet,
  initState: state,
  src: contract
})

console.log(id)