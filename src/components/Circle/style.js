import Styled from "styled-components";

export const Circle = Styled.div `
    background-color: #5E9DEA;
    border-radius: ${props => props.setBorderRadius};
    width: ${props => props.setSize};
    height: ${props => props.setSize};
    position: absolute;
    left: ${props => props.setLeft};
    top: ${props => props.setTop};
`;