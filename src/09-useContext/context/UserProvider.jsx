// es un componente como cualquier otro. La diferencia entre un component y este es que aca se recibe los children

import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Matias Nardelli',
//     email: 'matias@google.com',
// }


export const UserProvider = ({children}) => {
    const [user, setUser] = useState()
    
    
    return (
        <UserContext.Provider value={{user,setUser}}>
            {/* cualquier hijo va a poder obtener el objeto value */}
            {children}
        </UserContext.Provider>
    )
}
