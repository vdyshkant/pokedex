const defaultState = {
  fetchUrl: 'https://pokeapi.co/api/v2/pokemon/?limit=12',
  itemCollection: [],
  isDescriptionActive: false,
  currentPokemonId: null,
  currentCategory: null,
}

const MAKE_DESCRIPTION_ACTIVE = "MAKE_DESCRIPTION_ACTIVE"
const SET_CURRENT_POKEMON_ID = "SET_CURRENT_POKEMON_ID"
const UPDATE_COLLECTION = "UPDATE_COLLECTION"
const CURRENT_CATEGORY = "CURRENT_CATEGORY"
const UPDATE_URL = "UPDATE_URL"

export const reducer = (state = defaultState, action) => {
  switch (action.type) {

    case MAKE_DESCRIPTION_ACTIVE:
      return {...state, isDescriptionActive: true}

    case SET_CURRENT_POKEMON_ID:
      return {...state, currentPokemonId: action.payload}

    case UPDATE_COLLECTION:
      return {
        ...state,
        itemCollection: [...state.itemCollection, ...action.payload]
      }

    case CURRENT_CATEGORY:
      return {...state, currentCategory: action.payload}

    case UPDATE_URL:
      return {...state, fetchUrl: action.payload}

    default:
      return state
  }
}

export const makeDescriptionActive = (payload) => ({type: MAKE_DESCRIPTION_ACTIVE, payload})
export const setCurrentPokemonId = (payload) => ({type: SET_CURRENT_POKEMON_ID, payload})
export const updateCollection = (payload) => ({type: UPDATE_COLLECTION, payload})
export const setCurrentCategory = (payload) => ({type: CURRENT_CATEGORY, payload})
export const updateUrl = (payload) => ({type: UPDATE_URL, payload})