import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import {Provider} from "react-redux";
import Layout from "../components/layout";
import store from '../store'


function App({Component, pageProps: { session, ...pageProps },}) {
    //TODO сделать компоненты чтобы были шаблонами при открытии и менялись при прогрузке (как это сделано в Ютуб)
    return (
        <SessionProvider session={session}>
            <Layout>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Layout>
        </SessionProvider>
    )
}

export default App

