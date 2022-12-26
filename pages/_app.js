import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Layout from "../components/layout";

/**
 * TODO сделать компоненты чтобы были шаблонами при открытии и менялись при прогрузке (как это сделано в Ютуб)
 */

function App({Component, pageProps: { session, ...pageProps },}) {
    return (
        <SessionProvider session={session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    )
}

export default App

