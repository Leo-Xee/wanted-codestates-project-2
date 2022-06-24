import React, { MouseEventHandler } from "react";
import ReactDOM from "react-dom";

import * as S from "./style";

type ModalProps = {
  message: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function Modal({ message, onClick }: ModalProps) {
  const element = (
    <S.Background>
      <S.Container>
        <h1>확인</h1>
        <p>{message}</p>
        <S.ButtonWrapper>
          <button type="button" onClick={onClick}>
            확인
          </button>
        </S.ButtonWrapper>
      </S.Container>
    </S.Background>
  );

  const target = document.querySelector("#modal") as Element;

  return ReactDOM.createPortal(element, target);
}

export default Modal;
