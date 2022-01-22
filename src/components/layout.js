import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import "./layout.css"
import { AiOutlineHome } from "react-icons/ai"

const Layout = ({ children }) => {
  const Footer = styled.footer`
    width: 600px;
    position: fixed;
    bottom: 0;
    left: 50%;
    margin-left: -300px;
    text-align: center;
    margin-bottom: 10px;
  `
  const Wrapper = styled.div`
    margin: 25px 0 0 25px;
  `

  const Home = styled(Link)``

  return (
    <>
      <Wrapper>
        <Home to="/">
          <AiOutlineHome size={"2em"} />
        </Home>
      </Wrapper>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer
        style={{
          marginTop: `2rem`,
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        ></Link>
        © {new Date().getFullYear()}, Built by Alexander Egeberg
      </Footer>
    </>
  )
}

export default Layout
