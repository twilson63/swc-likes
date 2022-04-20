# SmartWeave Contract Demo

SmartWeave Contracts are the smart contracts of the Arweave network. They work 
a little different than smart contracts on other platforms. With SmartWeave
contracts, you actually run them on the client side and not on the server side.

You can find out more information about SmartWeave Contracts here:

## Creating a Contract.

When creating your contract, you need to export a handle function, this
function takes `state` and `action` arguments. The state argument represents
the initial state of the contract at the time the handle function is called.
The action object contains an `input` object, which contains the function name and
any arguments for the function.

``` js
export function handle(state, action) {
  if (action.input.function === 'name') {
    return { result: state.name }
  }
  throw new ContractError('function not found!')
}
```

With smart contracts you have two types of actions: A read interaction where you read the 
invoke a function that returns some value based on the current state. And a write interaction that actually executes a function that modifies the current state, by 
creating a new transaction on Arweave.

There are several smartweave platforms for Arweave, we are going to use the redstone
smartweave sdk. It has some performance optimization features that will give us 
a boost!
