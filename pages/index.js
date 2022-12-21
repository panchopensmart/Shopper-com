import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react';
import Main from './main'


const MainPage = () => {
    const { data: session } = useSession()
    if(session) {
        return (
            <Main/>
        );
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
};

export default MainPage;