export const initialState = {
  user: null,
  // remove the token after developing finished , it will be always loggen in 
  //  token: 'BQAboVQKX3tASIa7dt2gFeMwMAnMKeepkvc8fmvY9lejoILje4P75aQZmJDMVjrpJIYo1r9PfN72_XtenlC6u1NSjGB3bPNXJjLzwf2-NBU7DKdxd2pM5X63fjOXcteqjcB0nwvTEGEx_5Uo-vF9ArcRAtqlFFJrMO2_9CKmA27EGJTAuR75',
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
        return state;
  }

}

export default reducer;