import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";

const StyledSideContent = styled.nav`
    background-color: ${props => props.theme.side.defaultBack};

    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
    padding: 10px 0;
`;

const Category = styled(Link)`
    display: block;
    color: ${props =>
        props.active ? props.theme.side.category.activeText : "inherit"};
    text-align: right;
    padding: 5px 0;
    &:hover {
        color: ${props => props.theme.side.category.activeText} !important;
    }
`;

const SideContent = ({ activeMenu }) => (
    <StaticQuery
        query={query}
        render={data => {
            const category = [
                {
                    id: "about us"
                },
                {
                    id: "visible brand action"
                },
                {
                    id: "projects"
                },
                {
                    id: "the player"
                },
                {
                    id: "the process"
                },
            ];
            return (
                <StyledSideContent>
                    {category.map(node => {
                        //const isActive = activeMenu === node.id;
                        return (
                            <Category
                                key={node.id}
                                to={`/category/${node.id}`}
                            //active={isActive ? 1 : 0}
                            >
                                <span>{node.id}</span>
                            </Category>
                        );
                    })}
                </StyledSideContent>
            );
        }}
    />
);

const query = graphql`
    query {
        site {
            siteMetadata {
                title
                category {
                    id
                    icon
                }
            }
        }
    }
`;

export default SideContent;
