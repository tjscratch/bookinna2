const initialState = {
    banner: []
}

export default function GetBanner(state = initialState, action) {
    if (action.type === 'GET_BANNER'){
        return {
            ...state,
            banner: [...state.banner, action.payload]
        }
    }
  return state;
};