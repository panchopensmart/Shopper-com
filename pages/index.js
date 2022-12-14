import { useSession, signIn, signOut } from "next-auth/react"
import React, {useEffect} from 'react';
import Main from './main'


const MainPage = () => {
    const { data: session } = useSession()
    if(session) {
        return (
            <Main/>
        );
    } else {
        return (
            <>
                Not signed in <br />
                <button onClick={(e) => {
                    e.preventDefault()
                    signIn()
                }}>Sign in</button>
            </>
        )
    }
};

export default MainPage;