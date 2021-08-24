import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Surah from "../components/Surah"

const query = graphql`
  {
    allContentfulSurah {
      nodes {
        audio {
          file {
            url
          }
        }
        title
      }
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <Layout>
      <Seo title="Home" />
      {data.allContentfulSurah.nodes.map(surah => {
        console.log(surah)
        const {
          title,
          audio: {
            file: { url },
          },
        } = surah
        console.log(url)
        return <Surah title={title} source={url} />
      })}
    </Layout>
  )
}

export default IndexPage
