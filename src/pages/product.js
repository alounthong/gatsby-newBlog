import React from 'react'
import Layout from "../components/layout"
import styles from "../components/product.module.css"
import {graphql} from "gatsby"
import Image from "gatsby-image"
import {Link} from "gatsby"

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        price
        slug
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const product = ({data}) => {

    const {
        allContentfulProduct: {
            nodes: products
        }
    }
    = data

    return (
        <>
             <Layout>
                 <div className={styles.page}>
             {products.map(product=>{
                   return  (
                    <article key={product.id}>
                    <Image fluid={product.image.fluid} alt={product.title}/>
                    <h3>{product.title}<span>${product.price}</span></h3>
                    <Link to={`/product/${product.slug}`}>More detail</Link>
                    </article>

                   )
             })}
             <p className={styles.text}>
            </p>
           
                </div>
             </Layout>
          

        </>
    )
}

export default product
