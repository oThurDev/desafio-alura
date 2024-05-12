import { useState, useEffect } from 'react';
import * as S from "./styles";

import RoboImg from "../../assets/robot.png";

const Chat = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hours = currentTime.getHours();
    if (hours >= 5 && hours < 12) {
      return "Bom dia!";
    } else if (hours >= 12 && hours < 18) {
      return "Boa tarde!";
    } else {
      return "Boa noite!";
    }
  };

  return (
    <S.Container>
      <S.Nav>
        <span>Histórico de Conversas</span>
      </S.Nav>
      <S.Chat>
        <S.TopChat>
          <S.Texts>
            <h1>{getGreeting()} Sou o <span>Eureka</span>!</h1>
            <span>No que posso te ajudar hoje?</span>
          </S.Texts>
          <S.ImgChats src={RoboImg} />
        </S.TopChat>
        <S.Prompt type="text" placeholder="Digite sua pergunta ou comando..." />
      </S.Chat>
    </S.Container>
  );
};

export default Chat;
