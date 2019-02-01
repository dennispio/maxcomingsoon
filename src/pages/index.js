import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/Layout'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Navigation from '../components/navigation/navigation'
import Topmorph from '../components/topmorph/topmorph'
import Contact from '../components/contact/contact'
import Bottommorph from '../components/bottommorph/bottommorph'


const IndexPage = ( props ) => {
  const { node: data } = props.data.homePageData.edges[0]
  const { edges: posts } = props.data.blogPosts
  return (
    <Layout>
      <Helmet titleTemplate="%s | Blog">
        <title>{`${data.frontmatter.seo_title}`}</title>
        <meta name="description" content={`${data.frontmatter.seo_desc}`} />
      </Helmet>
      <Navigation />
      <Topmorph />
      <Contact />
      <Bottommorph />
    </Layout>
  )
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  posts: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query HomeContent {
    homePageData: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "page_home" } }}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            pageKey
            seo_title
            seo_desc
            title
            text
          }
        }
      }
    }
    blogPosts: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "page_blogpost" } }}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
          }
        }
      }
    }
  }
`