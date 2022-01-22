import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const IndexPage = () => {
  const Container = styled.div`
    margin-top: 20%;
  `

  return (
    <Layout>
      <Seo title="Home" />
      <Container>
        <h1>Hi</h1>
        <p>
          Welcome to my site with cool facts about cats and pictures of dogs.{" "}
          {<br />} Click the respective link to view either page.
        </p>
        <p>
          <Link to="/cat-facts/">Go to cat facts</Link> <br />
          <Link to="/dog/">Go to dogs page</Link> <br />
        </p>
      </Container>
    </Layout>
  )
}

export default IndexPage
