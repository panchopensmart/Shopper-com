import '../styles/globals.css'
import {Provider} from "react-redux";
import Layout from "../components/layout";
import store from '../store'


function App({Component, pageProps}) {
    //TODO сделать компоненты чтобы были шаблонами при открытии и менялись при прогрузке (как это сделано в Ютуб)
    return (
        <Layout>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </Layout>
    )
}

export default App
