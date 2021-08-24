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
        index
      }
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(query)
  const byIndex = data.allContentfulSurah.nodes.slice(0)
  byIndex.sort(function(a,b){
    return a.index - b.index
  })

  return (
    <Layout>
      <Seo title="Home" />
      {byIndex.map(surah => {
       
        const {
          title,
          audio: {
            file: { url },
          },
        } = surah
        
        return <Surah title={title} source={url} />
      })}
    </Layout>
  )
}

export default IndexPage
