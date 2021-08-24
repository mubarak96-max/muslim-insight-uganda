import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// background: `rebeccapurple`,
//     marginBottom: `1.45rem`,

const Header = () => (
  <header>
    <StaticImage
      src="../images/quran.png"
      width={150}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Quran mu Luganda"
      className="logo"
    />
    <h1>Luganda mu Quran</h1>
  </header>
)

export default Header
