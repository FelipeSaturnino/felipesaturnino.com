import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import { MainContent } from "../styles/base"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <MainContent>
    <h1>404</h1>
    <p>Eita, parece que você quebrou a internet.</p>
    </MainContent>
  </Layout>
)

export default NotFoundPage
