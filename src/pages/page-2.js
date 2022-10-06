import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cards from "../components/cards"
import { GlobalStyle } from "../styles"

const SecondPage = () => (
  <>
    <GlobalStyle/>
    <Cards/>
  </>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
