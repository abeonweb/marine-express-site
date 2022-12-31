import React from 'react'
import Head from "next/head"
import Navigation from "./Navigation"
import Footer from "./Footer"

const SharedLayout = ({ children }) => {
    return (
        <>
            <Navigation />
            <Head>
                <title>Marine Express Nigeria Limited</title>
                <meta name="description" content="Licensed clearing and forwarding agent. We handle logistics to and from Nigeria." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main id="main">{children}</main>
            <Footer />
        </>
    )
}

export default SharedLayout