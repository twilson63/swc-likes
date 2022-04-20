/**
 * initial state
 * 
 * {
 *   tx: 'txid',
 *   users: []
 * }
 */
const functions = { like, unlike, balance, liked }

export function handle(state, action) {
  if (['like', 'unlike', 'balance', 'liked'].includes(action.input.function)) {
    return functions[action.input.function](state, action)
  }

  throw new ContractError(`No function supplied or function not recognised: "${input.function}"`);
}

function liked(state, action) {
  return { result: { tx: state.tx, liked: state.users.includes(action.caller) } }
}

function like(state, action) {
  if (!state.users.includes(action.caller)) {
    state.users = [...state.users, action.caller]
  }
  return { state }
}

function unlike(state, action) {
  state.users = state.users.filter(address => address !== action.caller)
  return { state }
}

function balance(state, action) {
  return { result: { tx: state.tx, likes: state.users.length } }
}