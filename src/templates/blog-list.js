import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"
import * as S from "../components/ListWrapper/styled"

const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges

    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
    const nextPage = `/page/${currentPage + 1}`

    return (
        <Layout>
        <Seo title="Início" />
        <S.ListWrapper>
        {postList.map(
            ({
                node: { 
                    frontmatter: { background, color, category, date, description, title },
                    timeToRead,
                    fields: { slug }
                },
            }) => (
                <PostItem
                slug={slug}
                category={category}
                background={background}
                color={color}
                date={date}
                timeToRead={timeToRead}
                title={title}
                description={description}
                />
                )
                )}
        </S.ListWrapper>
        <Pagination 
            isFirst={isFirst} 
            isLast={isLast} 
            currentPage={currentPage} 
            numPages={numPages} 
            prevPage={prevPage} 
            nextPage={nextPage} 
        />
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
            color
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