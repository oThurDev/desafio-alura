import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

export const Chat = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    background-color: tomato;
    justify-content: center;
    align-items: center;
`;

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.5;
    background-color: yellow;
    justify-content: center;
    align-items: center;
`;