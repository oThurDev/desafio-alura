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
    background-color: #131314;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
`;

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #939;
    justify-content: center;
    align-items: center;
`;

export const TopChat = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
`;

export const Imgs = styled.div``;

export const Texts = styled.div`
    > h1 span {
        color: #939;
        cursor: pointer;
    }

    > h1 span:hover {
        filter: drop-shadow(0 0 30px #939);
    }
`;

export const Prompt = styled.input`
    background-color: #939;
    border: none;
    width: 80%;
    height: 100px;
    border-radius: 30px;
    padding: 0 10px;
    color: #fff;
    font-size: 16px;
    outline: none;

    &::placeholder {
        color: #fff;
        font-size: 16px;
    }   

    &:focus {
        background-color: #939; 
        border-color: transparent; 
        box-shadow: 0 0 20px #939;
        color: #fff;
        font-size: 16px;
    }
`;

export const ImgChats = styled.img`
    width: 80px;
    height: 80px;
`;

export const QuestionChat= styled.div`
    width: 80%;
    height: 300px;
    display: flex;
    align-items: center;
`;

export const BoxChat = styled.div`
    width: 80%;
    height: 300px;
    display: flex;
    align-items: center;
`;