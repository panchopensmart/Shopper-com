import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div className="content"
             style={{
                 maxWidth: "1900px",
                 margin: "0 auto",
                 padding: "0 15px 0 15px;"
             }}
        >
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;