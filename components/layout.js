import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div className="content"
             style={{
                 maxWidth: "1920px",
                 margin: "0 auto",
             }}
        >
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;