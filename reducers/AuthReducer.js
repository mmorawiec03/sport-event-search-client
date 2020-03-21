export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isAuth: true,
                user: action.user
            }
        case 'LOGOUT':
            return {
                isAuth: false,
                user: null
            }
        default:
            return state;
    }
}