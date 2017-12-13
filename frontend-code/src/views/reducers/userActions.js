// userActions: contains actions. It creates action objects and passes it to the reducer
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// login action takes the user and set user to redux state
export const login = (user) => ({
	type: LOGIN,
	user: user
})

// logout action takes the user and set user to empty
export const logout = () => ({
	type: LOGOUT
})
