const initialState = {
  user: {
    name: "",
    email: "",
    token: {},
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user/login":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
