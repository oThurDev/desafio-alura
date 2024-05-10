import React from 'react';
import * as S from "./styles";

import Robo from "../../assets/robot.png"

const Home: React.FC = () => {
  return (
    <S.Container>
        <S.Principal>
          <h1>Olá Mundo!</h1>
          <h1>Sejam bem vindos ao <span>Eureka</span>!</h1>
          <S.ButtonAcess>
            <a href="/eureka">
              <span>Acessar Eureka</span>
            </a>
          </S.ButtonAcess>
        </S.Principal>
        <S.Secondary>
          <S.RobotImg src={Robo} />
        </S.Secondary>
    </S.Container>
  );
}

export default Home;