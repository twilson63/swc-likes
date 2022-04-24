/**
 * likes contract
 * 
 * {
 *   addresses: []
 * }
 */
const functions = { like, unlike, likes, liked }

export function handle(state, action) {
  if (Object.keys(functions).includes(action.input.function)) {
    return functions[action.input.function](state, action)
  }

  throw new ContractError(`No function supplied or function not recognised: "${input.function}"`);
}

function liked(state, action) {
  return { result: { tx: state.tx, liked: state.addresses.includes(action.caller) } }
}

function like(state, action) {
  if (!state.addresses.includes(action.caller)) {
    return {
      addresses: state.address.concat([action.caller])
    }
  }
  return { state }
}

function unlike(state, action) {
  state.addresses = state.addresses.filter(address => address !== action.caller)
  return { state }
}

function likes(state, action) {
  return { result: { likes: state.addresses.length } }
}