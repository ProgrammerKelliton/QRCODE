import Styled from "styled-components";

export const Title = Styled.h1`
    margin: 10px 50px;
    font-size: ${(props) => props.setFontSize};

    @media (max-height: 670px)
    {
        line-height: 13px;
        font-size: 15px;
    }
`;
