import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

export const Principal = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #007bff;
    flex: 2;
    justify-content: center;
    align-items: center;
    color: #fff;

    > h1 span {
        color: #28a745;
    }
`;

export const Secondary = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ButtonAcess = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #28a745;
    padding: 30px 10px;
    border-radius: 30px;
    height: 40px;
    align-items: center;
    margin-top: 40px;

    > a {
        cursor: pointer;
        text-decoration: none;
        color: #fff;

        > span {
            font-weight: 600;
        }
    }
`;

export const RobotImg = styled.img``;