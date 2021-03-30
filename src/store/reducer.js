const defaultState = {
  initialList: null,
  items: [],
  isDescriptionActive: false,
  currentPokemonId: null,
  currentCategory: null,
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_INITIAL_POKEMON_LIST":
      return {...state, initialList: action.payload}

    case "MAKE_DESCRIPTION_ACTIVE":
      return {...state, isDescriptionActive: true}

    case "SET_CURRENT_POKEMON_ID":
      return {...state, currentPokemonId: action.payload}

    case "ADD_POKEMON_DATA_TO_COLLECTION":
      return {
        ...state,
        items: [...state.items, ...action.payload]
      }

    case "CURRENT_CATEGORY":
      return {...state, currentCategory: action.payload}

    default:
      return state
  }
}