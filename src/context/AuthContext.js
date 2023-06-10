import {createContext, useReducer} from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE ={
    user: {
        _id : "647eb3d2c857767e39c678c8",
        username : "john", 
        email : "john@gmail.com",
        password : "$2b$10$/nmK.6EUweM4ZYOPNNIJZuiUofFhbZ4MW5GgFEch4uyNoHAE8bkvi",
        profilePicture : "",
        coverPicture : "",
        followers : [
            
        ],
        following : [
            
        ],
        isAdmin : false,
        city : "Paris",
        desc : "Welcome to my page",
        from : "Berlin",
        relationship : 2
    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return(
        <AuthContext.Provider value={{
            user:state.user, 
            isFetching:state.isFetching,
            error: state.error,
            dispatch
        }}>
        {children}
        </AuthContext.Provider>
    )
}