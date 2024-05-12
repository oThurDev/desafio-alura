import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

export const Principal = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #131314;
    flex: 2;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: all 0.5s ease-in-out;

    > h1 span {
        color: #939;
        font-family: "Poetsen One", sans-serif;
        font-size: 36px;
    }

    > h1 span:hover {
        filter: drop-shadow(0 0 30px #939);
        cursor: pointer;
    }
`;

export const Secondary = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #939;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ButtonAcess = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #939;
    padding: 30px 10px;
    border-radius: 30px;
    height: 40px;
    align-items: center;
    margin-top: 40px;
    cursor: pointer;
    transition: 0.5s ease-in-out ;

    &:hover {
        box-shadow: 0 0 30px #939;
    }

    > a {
        text-decoration: none;
        color: #fff;

        > span {
            font-weight: 600;
        }
    }
`;

export const RobotImg = styled.img``;