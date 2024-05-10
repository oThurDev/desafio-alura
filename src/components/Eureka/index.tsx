import React from 'react';
import * as S from "./styles"

const Eureka: React.FC = () => {
  return (
    <S.Container>
        <S.Nav>
            <span>Aqui a nav</span>
        </S.Nav>
        <S.Chat>
            <span>Aqui será o chat</span>
        </S.Chat>
    </S.Container>
  );
}

export default Eureka;