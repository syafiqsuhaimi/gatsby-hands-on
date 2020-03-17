import React, { useState } from "react";
import styled from "styled-components";
import Circle from "../atoms/circle";
import Bio from "./bio";
import ClickPopup from "../atoms/clickPopup";
import { StaticQuery, graphql, Link } from "gatsby";

const Container = styled.header`
    padding: 10px 0;
    font-size: 15px;
    background-color: ${props => props.theme.side.defaultBack};
    display: flex;
    justify-content: flex-end;
`;

const BlogTitle = styled(Link)`
    display: block;
    color: inherit;
    font-weight: bold;
    margin-bottom: 0;
    margin-left: 10px;
    font-size: 30px;
`;

const SideHeader = () => {
    const [bioOpen, setBioOpen] = useState(false);
    return (
        <StaticQuery
            query={query}
            render={data => {
                const node = data.site.siteMetadata;
                return (
                    <Container>
                        <BlogTitle to={"/"}>{node.title}</BlogTitle>
                    </Container>
                );
            }}
        />
    );
};

const query = graphql`
    query {
        site {
            siteMetadata {
                title
                authorNickName
            }
        }
    }
`;

export default SideHeader;
