import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const demoPage = () =>(
    <Layout>
        <SEO title="Demo" />
        <h1>This is Demo Page</h1>
        <p>how are you?</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default demoPage