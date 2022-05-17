/**
 * permanotes contract
 * 
 */
const functions = { like, unlike }

export function handle(state, action) {
  if (Object.keys(functions).includes(action.input.function)) {
    return functions[action.input.function](state, action)
  }

  throw new ContractError(`No function supplied or function not recognised: "${input.function}"`);
}

function like(state, action) {
  if (!state.likes.includes(action.caller)) {
    state.likes = [...state.likes, action.caller]
  }
  return { state }
}

function unlike(state, action) {
  state.likes = state.likes.filter(address => address !== action.caller)
  return { state }
}
