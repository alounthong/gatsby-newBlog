import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

const ComponentName = ({ data:{
    product:{
        title,
        price,
        image: {fixed},
        info: {info},
    }

} }) => {
    return ( 
    <>
        <Layout>
            <div>
            <Link to="/product/">Back</Link>
                <div style={{textAlign:"center"}}>
                    <h1>Product: {title}</h1>
                </div>
            </div>
            <section className="single-product">
                <article>
                    <Image fixed={fixed} alt={title}></Image>
                </article>
                <article>
                    <h1>{title}</h1>
                    <h2>${price}</h2>
                    <p>{info}</p>
                </article>
            </section>
        </Layout>
    </>
    )
}
export const query = graphql`
  query getSingleProducts($slug: String) {
        product: contentfulProduct(slug: {eq: $slug}) {
            title
            price
            image {
            fixed (width:300){
                ...GatsbyContentfulFixed
            }
            }
            info {
            info
            }
        }
    }
`

export default ComponentName

