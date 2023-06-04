export default (user = [], action) => {
  switch (action.type) {
    case "GET_USER":
      return action.payload;

    case "SIGN_OUT":
      return false;

    default:
      return user;
  }
};
