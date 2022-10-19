import '../styles/globals.css'
import Layout from "../components/layout";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../dev";

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <Component {...pageProps} />
            </DevSupport>
        </Layout>
    )
}

export default MyApp
