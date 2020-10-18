import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql
`{
      site {
        info: siteMetadata {
          title
          description
          author
          data
          person {
            name
            age
          }
        }
      }
    }`
const Header = () => {

  const { 
      site: {
        info: {
            title,
            person:{
                name
            },
        },
      }
    }
    = useStaticQuery(getData)

  return (
      <>
      <h1>{title}</h1>
      <h1>{name}</h1>
      </>
  )
}

export default Header
