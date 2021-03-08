import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const query = graphql`
  query {
    allStrapiExhibitions {
      edges {
        node {
          strapiId
          title
          description
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery
      query={query}
      render={data => (
        <ul>
          {data.allStrapiExhibitions.edges.map(exhibitions => (
            <li>{exhibitions.node.title}</li>
          ))}
        </ul>
      )}  
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
