import * as React from "react"
import { graphql, useStaticQuery} from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"

const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges

    return (
        <Layout>
        <Seo title="Home" />
        {postList.map(
          ({
            node: { 
            frontmatter: { background, category, date, description, title },
            timeToRead,
            fields: { slug }
          },
        }) => (
          <PostItem
            slug={slug}
            category={category}
            background={background}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
        )}
      </Layout>
    )
}

export const query = graphql`
query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC}
        limit: $limit
        skip: $skip
        ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList