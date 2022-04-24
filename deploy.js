import Arweave from 'arweave'
import { SmartWeaveNodeFactory, LoggerFactory } from 'redstone-smartweave'
import fs from 'fs'

const conn = {
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
}

const arweave = Arweave.init(conn)

LoggerFactory.INST.logLevel('error');
const smartweave = SmartWeaveNodeFactory.memCachedBased(arweave).useRedStoneGateway().build()

const wallet = JSON.parse(fs.readFileSync('./mywallet.json', 'utf-8'))
const contract = fs.readFileSync('./contract.js', 'utf-8')
const state = fs.readFileSync('./contract.json', 'utf-8')

const id = await smartweave.createContract.deploy({
  wallet,
  initState: state,
  src: contract
})

console.log(id)