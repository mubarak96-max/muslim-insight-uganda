import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div
      >
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
