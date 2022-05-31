import Styled from "styled-components";

export const Box = Styled.div`
    width: 450px;
    background-color: #a7c7eec7;
    position: absolute;
    border-radius: 32px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    display: flex;
    align-items: center;
    flex-direction: column;#a7c7eec7
    backdrop-filter: blur(10px);

    @media (max-width: 480px)
    {
        width: 90vw;
    }
`;
