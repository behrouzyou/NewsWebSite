import { createContext } from "react";


export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {
    const login=async (input) => {
        try {
            console.log(input);
        } catch (error) {
            console.log(error);

        }

    }



     return (
          <AuthContext.Provider value={{login}}>
               {children}
          </AuthContext.Provider>
     )
}
