import React from "react";
import styled from "styled-components";

const StyledMainContent = styled.section`
    overflow: auto;
    padding: 20px;
    height: 90vh;
    display: flex;
    align-items: center;
    ::-webkit-scrollbar {
        display: none;
    }
    
    @media all and (min-width: 992px) {
        padding: 50px 75px;
        height: 100vh;
    }
`;

const MainContent = ({ children }) => {
    return <StyledMainContent>{children}</StyledMainContent>;
};

export default MainContent;
