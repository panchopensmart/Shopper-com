import '../styles/globals.css'

import Layout from "../components/layout";


function MyApp({Component, pageProps}) {
    //TODO сделать компоненты чтобы были шаблонами при открытии и менялись при прогрузке (как это сделано в Ютуб)
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
