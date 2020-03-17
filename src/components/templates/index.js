import React from "react";
import { graphql } from "gatsby";

import Layout from "components/templates/layout";
import PostList from "components/organisms/postList";
import SEO from "components/seo";
import styled from "styled-components";

const Title = styled.h1`
    color: #FFFF99;
    padding: 1rem;
    margin: 0;
    border-bottom: 0;
    
    @media all and (min-width: 992px) {
        padding: 50px 75px;
        font-size: 3rem;
        max-width: 1200px;
    }
`

class BlogIndex extends React.Component {
    render() {
        const { data, location, pageContext } = this.props;
        const { title, pageListSize } = data.site.siteMetadata;
        const posts = data.allMarkdownRemark.edges;

        return (
            <Layout location={location} title={title}>
                <SEO
                    title="Main"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <Title>
                    Want to get millennials into a Cognac they know nothing about?<br /> Make them the expert.
                </Title>
            </Layout>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
                pageListSize
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            skip: $skip
            limit: $limit
        ) {
            edges {
                node {
                    excerpt(pruneLength: 300)
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "YYYY-MM-DD")
                        title
                        category
                        cover {
                            childImageSharp {
                                fixed(width: 120, height: 120) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
