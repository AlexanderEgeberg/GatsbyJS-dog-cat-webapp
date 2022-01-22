import * as React from "react"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle={`Home`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built by Alexander Egeberg
        </footer>
      </div>
    </>
  )
}

export default Layout
