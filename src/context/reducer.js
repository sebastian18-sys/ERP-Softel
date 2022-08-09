export const initialState = {
  user: null
}

export const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    
    case 'LOGOUT':
      return {
        ...state,
        user: null
      }

    default:
      return state;
  }
}