import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import img from "../images/image3.jpg"
import Image from "gatsby-image"

const getImages = graphql
`
{
    fixed: file(relativePath: {eq: "image1.jpg"}) {
      childImageSharp {
        fixed(width: 200, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "image2.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Images = () => {

    const {
        fixed: {
            childImageSharp: {
                fixed
            }
        },

        fluid: {
            childImageSharp: {
                fluid
            }
        }

    } = useStaticQuery(getImages)

    return (
        <section className="images">
            <article className="single-images">
                <h3>Basic Image</h3>
                <img src={img} alt="image3" width="100%"></img>
            </article>
             <article className="single-images">
                <h3>Fixed Image</h3>
                <Image fixed={fixed}></Image>
            </article>
             <article className="single-images">
                <h3>Fluid Image</h3>
                <Image fluid={fluid}></Image>
            </article>
        </section>
    )
}

export default Images
