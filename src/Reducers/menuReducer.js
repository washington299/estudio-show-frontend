const initialState = {
  menuClosed: true,
};

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, menuClosed: action.menu };
    default:
      return state;
  }
}

export default menuReducer;
