import React from 'react'
import Navigation from "./Navigation"
import Footer from "./Footer"

const SharedLayout = ({children}) => {
    return (
        <>
            <Navigation />
            <main id="main">{children}</main>
            <Footer />
        </>
    )
}

export default SharedLayout