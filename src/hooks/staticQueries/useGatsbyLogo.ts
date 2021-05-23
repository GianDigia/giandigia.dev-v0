import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

export const useGatsbyLogo = (): FluidObject => {
  return useStaticQuery<{
    gatsbyLogo: { childImageSharp: { fluid: FluidObject } }
  }>(graphql`
    query GatsbyLogoQuery {
      gatsbyLogo: file(relativePath: { eq: "gatsbyLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `).gatsbyLogo.childImageSharp.fluid
}
