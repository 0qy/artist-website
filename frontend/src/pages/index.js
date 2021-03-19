import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Img from 'gatsby-image'
import Layout from "../components/layout"

export const query = graphql`
  query {
    allStrapiExhibitions {
      edges {
        node {
          strapiId
          title
          description
          photo {
            childImageSharp {
              fixed(width:1600, height:900){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <StaticQuery
      query={query}
      render={data => (
        <ul>
          {data.allStrapiExhibitions.edges.map(exhibitions => (
            <div>
              <li>{exhibitions.node.title}</li>
              <Img fixed={exhibitions.node.photo.childImageSharp.fixed}/>
            </div>
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
